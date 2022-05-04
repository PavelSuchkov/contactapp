import axiosInstance from '../../helpers/axiosInterceptor';
import {
  CLEAR_AUTH_STATE,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_LOADING,
} from '../../constants/actionTypes/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = ({
                        password,
                        username,
                      }) => (dispatch) => (onSuccess) => {
  dispatch({ type: LOGIN_LOADING });
  axiosInstance.post('auth/login', {
    password,
    username,
  })

    .then(res => {
      console.log('res ', res.data);
      AsyncStorage.setItem('token', res.data.token)
      AsyncStorage.setItem('user', JSON.stringify(res.data.user))
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      onSuccess(res.data);
    }).catch((err) => {
    console.log('error ', err.response);
    dispatch({
      type: LOGIN_FAILED,
      payload: err.response
        ? err.response.data
        : { error: 'Something went wrong, try again' },
    });
  });
};
