import { LOGOUT } from '../../constants/actionTypes/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const logoutUser = () => (dispatch)  => {
      AsyncStorage.removeItem('token')
      AsyncStorage.removeItem('user')
      dispatch({
        type: LOGOUT
      });
    }
