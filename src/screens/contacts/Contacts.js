import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '../../components/common/icons/Icon';
import { ContactsComponent } from '../../components/contacts/ContactsComponent';
import { GlobalContext } from '../../context/Provider';
import { getContacts } from '../../context/actions/contacts/getContacts';

export const Contacts = () => {

  const { setOptions, toggleDrawer } = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const {
    contactsDispatch,
    contactsState: {
      getContacts: { data, loading }
    },
  } = useContext(GlobalContext);


  useEffect(() => {
    getContacts()(contactsDispatch)
  }, [])

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
    <View>
      <ContactsComponent modalVisible={modalVisible}
                         setModalVisible={setModalVisible}
                         data={data}
                         loading={loading}
      />
    </View>
    // <Container>
    //   <Text>Hi from contacts</Text>
    // </Container>

  );
};
