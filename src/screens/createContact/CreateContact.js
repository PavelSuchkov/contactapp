import React, { useContext, useRef, useState } from 'react';
import { CreateContactComponent } from '../../components/contacts/createContactComponent/CreateContactComponent';
import { createContact } from '../../context/actions/contacts/createContact';
import { GlobalContext } from '../../context/Provider';
import { CONTACT_LIST } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import { uploadImage } from '../../helpers/uploadImage';

export const CreateContact = () => {

  const [form, setForm] = useState({});
  const [uploading, setIsUploading] = useState(false);
  const [localFile, setLocalFile] = useState(null);
  const { navigate, setOptions } = useNavigation();
  const {
    contactsDispatch,
    contactsState: { createContact: { loading, error } },
  } = useContext(GlobalContext);

  const sheetRef = useRef(null);

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const toggleValueChange = () => {
    setForm({ ...form, isFavorite: !form.isFavorite });
  };

  const onSubmit = () => {
    if(localFile?.size){
      setIsUploading(true)
      uploadImage(localFile)((url) => {
        createContact({ ...form, contactPicture: url })(contactsDispatch)(() => {
          navigate(CONTACT_LIST);
          setIsUploading(false)
        })
      })
      ((error) => {
        console.log('error ', error);
        setIsUploading(false)
      })
    } else {
      createContact(form)(contactsDispatch)(() => {
        navigate(CONTACT_LIST);
      });
    }
  };

  const onFileSelected = (image) => {
    closeSheet();
    setLocalFile(image);
  };

  return (
    <CreateContactComponent
      onChangeText={onChange}
      form={form}
      onSubmit={onSubmit}
      setForm={setForm}
      loading={loading || uploading}
      error={error}
      toggleValueChange={toggleValueChange}
      sheetRef={sheetRef}
      openSheet={openSheet}
      closeSheet={closeSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
    />
  );
};
