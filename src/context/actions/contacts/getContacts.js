import {
  GET_CONTACTS_FAILED,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../../../constants/actionTypes/actions';
import axios from '../../../helpers/axiosInstance';


export const getContacts = () => (dispatch) => {
  dispatch({
    type: GET_CONTACTS_LOADING,

  });
  axios.get('/contacts')
    .then(res => {
      dispatch({
        type: GET_CONTACTS_SUCCESS,
        payload: res.data,
      });
      // console.log('res.data ===>  ', res.data);
    })
    .catch(error => {
      dispatch({
        type: GET_CONTACTS_FAILED,
        payload: error.response
          ? error.response.data
          : { error: 'Something went wrong, try again' },
      });
      console.log('error ===>  ', error.response);
    });
};
