import {
  CLEAR_AUTH_STATE, LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT,
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constants/actionTypes/actions';

const authReducer = (state, { type, payload }) => {

  switch (type) {
    case REGISTER_LOADING:
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        isLoggedIn: true,
        error: null
      };

    case LOGOUT:
      return {
        ...state,
        loading: false,
        data: null,
        isLoggedIn: false,
        error: null
      }

    case REGISTER_FAILED:
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CLEAR_AUTH_STATE:
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
