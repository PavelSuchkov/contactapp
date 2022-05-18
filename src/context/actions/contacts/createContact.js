import {
  CREATE_CONTACT_FAILED,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
} from '../../../constants/actionTypes/actions';
import axios from '../../../helpers/axiosInstance';


export const createContact = (form) => (dispatch) => (onSuccess) => {

  const requestPayload = {
    country_code: form.phoneCode || '',
    first_name: form.firstName || '',
    last_name: form.lastName || '',
    phone_number: form.phoneNumber || '',
    // contact_picture: form.contactPicture || null,
    is_favorite: form.isFavorite || false,
  };
  dispatch({
    type: CREATE_CONTACT_LOADING,

  });
  axios.post('/contacts/', requestPayload)
    .then(res => {
      console.log('success ===> ', res.data);
      dispatch({
        type: CREATE_CONTACT_SUCCESS,
        payload: res.data,
      });
      onSuccess();
    })
    .catch(error => {
      console.log('failed ===> ', error.data);
      dispatch({
        type: CREATE_CONTACT_FAILED,
        payload: error.response
          ? error.response.data
          : { error: 'Something went wrong, try again' },
      });
    });
};
