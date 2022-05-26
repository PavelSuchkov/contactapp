import {
  DELETE_CONTACT_FAILED,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
} from '../../../constants/actionTypes/actions';
import axios from '../../../helpers/axiosInstance';


export const deleteContact = (id) => (dispatch) => (onSuccess) => {
  dispatch({
    type: DELETE_CONTACT_LOADING,
  });
  axios.delete(`/contacts/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_CONTACT_SUCCESS,
        payload: id,
      });

      onSuccess()
    })
    .catch(error => {
      dispatch({
        type: DELETE_CONTACT_FAILED,
        payload: error.response
          ? error.response.data
          : { error: 'Something went wrong, try again' },
      });
      console.log('error ===>  ', error.response);
    });
};
