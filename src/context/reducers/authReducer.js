import {
  CLEAR_AUTH_STATE, LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constants/actionTypes/actions';

const authReducer = (state, { type, payload }) => {

  switch (type) {
    case REGISTER_LOADING:
    case LOGIN_LOADING:
      console.log('REGISTER_LOADING ', state);
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      console.log('REGISTER_SUCCESS ', state);
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case LOGIN_SUCCESS:
      console.log('LOGIN_SUCCESS ', state);
      return {
        ...state,
        loading: false,
        data: payload,
        isLogged: true
      };

    case REGISTER_FAILED:
    case LOGIN_FAILED:
      console.log('REGISTER_FAILED ', state);
      return {
        ...state,
        loading: false,
        error: payload,

      };

    case CLEAR_AUTH_STATE:
      console.log('CLEAR_AUTH_STATE ', state);
      return {
        ...state,
        loading: false,
        data: null,
        error: null
      };

    default:
      return state;
  }


};

export default authReducer;
