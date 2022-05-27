import {
  EDIT_CONTACT_FAILED,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
} from '../../../constants/actionTypes/actions';
import axios from '../../../helpers/axiosInstance';


export const editContact = (form, id) => (dispatch) => (onSuccess) => {

  const requestPayload = {
    country_code: form.phoneCode || '',
    first_name: form.firstName || '',
    last_name: form.lastName || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || null,
    is_favorite: form.isFavorite || false,
  };
  dispatch({
    type: EDIT_CONTACT_LOADING,

  });
  axios.put(`/contacts/${id}`, requestPayload)
    .then(res => {
      dispatch({
        type: EDIT_CONTACT_SUCCESS,
        payload: res.data,
      });
      onSuccess(res.data);
    })
    .catch(error => {
      dispatch({
        type: EDIT_CONTACT_FAILED,
        payload: error.response
          ? error.response.data
          : { error: 'Something went wrong, try again' },
      });
    });
};
