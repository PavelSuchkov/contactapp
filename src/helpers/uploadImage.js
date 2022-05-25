import storage from '@react-native-firebase/storage';
import {Platform} from 'react-native'

export const uploadImage = (file) => (onSuccess) => (onError) => {

  const prefix = Platform.OS === 'android' ? file.modificationDate : file.creationDate
  const path = 'contacts-pictures/user/778' + prefix || file.path;
  const ref = storage().ref(path);

  const task = ref.putFile(file.path);

  task
    .then(async () => {
    const url = await ref.getDownloadURL();
    onSuccess(url);
  })
    .catch((error) => {
    onError(error)
  });
};
