import {
  CLEAR_AUTH_STATE,
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constants/actionTypes/actions';

const authReducer = (state, { type, payload }) => {

  switch (type) {
    case REGISTER_LOADING:
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

    case REGISTER_FAILED:
      console.log('REGISTER_FAILED ', state);
      return {
        ...state,
        loading: false,
        error: payload.data,
      };

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        data: null,
      };

    default:
      return state;
  }


};

export default authReducer;
