import { GET_CONTACTS_FAILED, GET_CONTACTS_LOADING, GET_CONTACTS_SUCCESS } from '../../constants/actionTypes/actions';

const contactsReducer = (state, { type, payload }) => {
  switch (type) {

    case GET_CONTACTS_LOADING:
      console.log('reducer GET_CONTACTS_Loading called ====>');
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: true,
          error: null,
        },
      };

    case GET_CONTACTS_SUCCESS:
      console.log('reducer GET_CONTACTS_SUCCESS ====>', payload);
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_CONTACTS_FAILED:
      console.log('reducer GET_CONTACTS_FAILED ====>', payload);
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default contactsReducer;
