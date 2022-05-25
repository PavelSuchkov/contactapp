import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Icon } from '../../components/common/icons/Icon';
import { ContactsComponent } from '../../components/contacts/ContactsComponent';
import { GlobalContext } from '../../context/Provider';
import { getContacts } from '../../context/actions/contacts/getContacts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CONTACT_DETAIL } from '../../constants/routeNames';
import { navigate } from '../../navigations/RootNavigator';

export const Contacts = ( ) => {


  const { setOptions, toggleDrawer } = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const contactsRef = useRef([]);

  const {
    contactsDispatch,
    contactsState: {
      getContacts: { data, loading },
    },
  } = useContext(GlobalContext);


  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };
  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getSettings();
      return () => {
      };
    }, []),
  );

  useEffect(() => {
    const prev = contactsRef.current;
    contactsRef.current = data;
    const newList = contactsRef.current;
    if (newList.length - prev.length === 1) {
      const newContact = newList.find((item) => !prev.map((i) => i.id).includes(item.id));
      navigate(CONTACT_DETAIL, { item: newContact });
    }
  }, [data.length]);


  useEffect(() => {
    setOptions({
      headerLeft:
        () => (
          <TouchableOpacity onPress={() => toggleDrawer()}>
            <Icon type="material" name="menu" size={30} style={{ padding: 10 }} />
          </TouchableOpacity>
        ),
    });
  }, []);

  return (
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      data={data}
      loading={loading}
      sortBy={sortBy}
    />
  );
};
