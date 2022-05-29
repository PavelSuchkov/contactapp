import React, { useContext, useEffect, useRef, useState } from 'react';
import { CreateContactComponent } from '../../components/contacts/createContactComponent/CreateContactComponent';
import { createContact } from '../../context/actions/contacts/createContact';
import { GlobalContext } from '../../context/Provider';
import { CONTACT_DETAIL, CONTACT_LIST } from '../../constants/routeNames';
import { useNavigation, useRoute } from '@react-navigation/native';
import { uploadImage } from '../../helpers/uploadImage';
import countryCodes from '../../utils/countryCodes';
import { editContact } from '../../context/actions/contacts/editContact';

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
  const { params } = useRoute();


  useEffect(() => {
    if (params?.contact) {
      setOptions({title: 'Update Contact'})
      const {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        is_favorite: isFavorite,
        country_code: countryCode,
      } = params?.contact;

      setForm((prev) => {
        return {
          ...prev,
          firstName,
          lastName,
          phoneNumber,
          isFavorite,
          phoneCode: countryCode,
        };
      });
      const country = countryCodes.find(item => {
        return item.value.replace('+', '') === countryCode;
      });
      if (country) {
        setForm((prev) => {
          return {
            ...prev,
            countryCode: country.key.toUpperCase(),
          };
        });
      }
    }
    if (params?.contact?.contact_picture) {
      setLocalFile(params?.contact.contact_picture);
    }
    // return () => {}
  }, []);

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

  const onFileSelected = (image) => {
    closeSheet();
    setLocalFile(image);
  };

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const toggleValueChange = () => {
    setForm({ ...form, isFavorite: !form.isFavorite });
  };

  //
  // const onFileSelected = (image) => {
  //   closeSheet();
  //   setLocalFile(image);
  //   setUpdatingImage(true);
  //   uploadImage(image)((url) => {
  //     const {
  //       first_name: firstName,
  //       last_name: lastName,
  //       phone_number: phoneNumber,
  //       country_code: phoneCode,
  //       is_favorite: isFavorite,
  //     } = item;
  //     editContact(
  //       {
  //         firstName,
  //         lastName,
  //         phoneCode,
  //         isFavorite,
  //         phoneNumber,
  //         contactPicture: url,
  //       },
  //       item.id
  //     )(contactsDispatch)(() => {
  //       setUpdatingImage(false);
  //       setUploadSucceeded(true);
  //     });
  //   })((error) => {
  //     console.log('error ', error);
  //     setUpdatingImage(false);
  //   });
  // };

  const onSubmit = () => {
    if (params?.contact) {
      if (localFile?.size) {
        setIsUploading(true);
        uploadImage(localFile)((url) => {
          editContact({ ...form, contactPicture: url }, params?.contact.id)(contactsDispatch)((item) => {
            navigate(CONTACT_DETAIL, {item});
            setIsUploading(false);
          });
        })
        ((error) => {
          console.log('error ', error);
          setIsUploading(false);
        });
      } else {
        editContact(form, params?.contact.id)(contactsDispatch)((item) => {
          navigate(CONTACT_DETAIL, {item});
          setIsUploading(false);
        });
      }
    } else {
      if (localFile?.size) {
        setIsUploading(true);
        uploadImage(localFile)((url) => {
          createContact({ ...form, contactPicture: url })(contactsDispatch)(() => {
            navigate(CONTACT_LIST);
            setIsUploading(false);
          });
        })
        ((error) => {
          console.log('error ', error);
          setIsUploading(false);
        });
      } else {
        createContact(form)(contactsDispatch)(() => {
          navigate(CONTACT_LIST);
          setIsUploading(false);
        });
      }
    }
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
