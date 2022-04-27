import axiosInstance from '../../helpers/axiosInterceptor';
import {
  CLEAR_AUTH_STATE,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_LOADING,
} from '../../constants/actionTypes/actions';

export const loginUser = ({
                        password,
                        username,
                      }) => (dispatch) => (onSuccess) => {
  debugger
  dispatch({ type: LOGIN_LOADING });
  axiosInstance.post('auth/login', {
    password,
    username,
  })

    .then(res => {
      console.log('res ', res);
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
