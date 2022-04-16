import axiosInstance from '../../helpers/axiosInterceptor';
import {
  CLEAR_AUTH_STATE,
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constants/actionTypes/actions';
import { type } from 'yarn/lib/cli';

export const clearAuthState = () => (dispatch) => {
  dispatch({
      type: CLEAR_AUTH_STATE
    },
  );
};

export default ({
                  email,
                  password,
                  username,
                  firstName: first_name,
                  lastName: last_name,
                }) => (dispatch) => {

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
      console.log('response ', res.data);
    }).catch(err => {
    dispatch({
      type: REGISTER_FAILED,
      payload: err.response ? err.response : { error: 'Something wrong' },
    });
    console.log('catch error', err.response.data);
  });
}
