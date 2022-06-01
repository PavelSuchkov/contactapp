import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ContactDetailsComponent } from '../../components/contactDetails/ContactDetailsComponent';
import { ActivityIndicator, Alert, TouchableOpacity, View } from 'react-native';
import { Icon } from '../../components/common/icons/Icon';
import colors from '../../assets/theme/colors';
import { GlobalContext } from '../../context/Provider';
import { deleteContact } from '../../context/actions/contacts/deleteContact';
import { navigate } from '../../navigations/RootNavigator';
import { CONTACT_LIST } from '../../constants/routeNames';
import { uploadImage } from '../../helpers/uploadImage';
import { editContact } from '../../context/actions/contacts/editContact';

export const ContactDetails = () => {
  const { params: { item = {} } = {} } = useRoute();
  const {
    contactsDispatch,
    contactsState: { deleteContact: { loading } },
  } = useContext(GlobalContext);

  const { setOptions } = useNavigation();

  const sheetRef = useRef(null);
  const [localFile, setLocalFile] = useState(null);
  const [updatingImage, setUpdatingImage] = useState(false);
  const [uploadSucceeded, setUploadSucceeded] = useState(false);


  useEffect(() => {
    if (item) {
      setOptions({
        title: item.first_name + ' ' + item.last_name,
        headerRight: () => {
          return (
            <View style={{ flexDirection: 'row', paddingRight: 10 }}>
              <TouchableOpacity>
                <Icon name={item.is_favorite ? 'star' : 'star-border'}
                      type="material"
                      size={21}
                      color={colors.grey}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingLeft: 10 }}
                                onPress={() => {
                                  Alert.alert('Delete',
                                    'Are you sure you want to remove ' + item.first_name + ' ?',
                                    [
                                      {
                                        text: 'Cancel',
                                        onPress: () => {
                                        },
                                        style: 'cancel',
                                      },
                                      {
                                        text: 'Ok',
                                        onPress: () => {
                                          deleteContact(item.id)(contactsDispatch)(() => {
                                            navigate(CONTACT_LIST);
                                          });
                                        },
                                        style: 'destructive',
                                      },
                                    ]);
                                }}
              >
                {!loading ? (
                  <Icon name="delete"
                        type="material"
                        size={21}
                        color={colors.grey}
                  />
                ) : (
                  <ActivityIndicator size="small" color={colors.primary} true />
                )}
              </TouchableOpacity>
            </View>
          );
        },

      });
    }
  }, [item, loading]);

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
    setUpdatingImage(true);
    uploadImage(image)((url) => {
      const {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        country_code: phoneCode,
        is_favorite: isFavorite,
      } = item;
      editContact(
        {
          firstName,
          lastName,
          phoneNumber,
          isFavorite,
          phoneCode,
          contactPicture: url,
        },
        item.id,
      )(contactsDispatch)(() => {
        setUpdatingImage(false);
        setUploadSucceeded(true);
      });
    })((err) => {
      console.log('err :>> ', err);
      setUpdatingImage(false);
    });
  };

  return (
    <ContactDetailsComponent contact={item}
                             onFileSelected={onFileSelected}
                             sheetRef={sheetRef}
                             openSheet={openSheet}
                             localFile={localFile}
                             updatingImage={updatingImage}
                             uploadSucceeded={uploadSucceeded}

    />
  );
};
