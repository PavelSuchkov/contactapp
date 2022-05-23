import axios from 'axios';
import envs from '../config/env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigations/RootNavigator';
import { LOGOUT } from '../constants/actionTypes/actions';

let headers = {};

const axiosInstance = axios.create({
  baseURL: envs.BACKEND_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // navigate(CREATE_CONTACT)
    const token = await AsyncStorage.getItem('token');
    if (token) {
      // config.headers.Authorization = `Bearer qwqwqwqwqwqw`;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }
    if(error.response.status === 403){
      navigate(LOGOUT , {tokenExpired: true})
    } else {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }
  }
);


export default axiosInstance;
