import axiosInstance from '../../../helpers/axiosInstance';
import {
  CLEAR_AUTH_STATE,
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../../constants/actionTypes/actions';

export const clearAuthState = () => (dispatch) => {
  dispatch({ type: CLEAR_AUTH_STATE });
};

export const register =  ({
                  email,
                  password,
                  username,
                  firstName: first_name,
                  lastName: last_name,
                }) => (dispatch) => (onSuccess) => {

  dispatch({ type: REGISTER_LOADING });
  axiosInstance.post('auth/register', {
    email,
    password,
    username,
    first_name,
    last_name,
  })
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      onSuccess(res.data);
    }).catch((err) => {
    dispatch({
      type: REGISTER_FAILED,
      payload: err.response
        ? err.response.data
        : {error: 'Something went wrong, try again'},
    });
  });
}
