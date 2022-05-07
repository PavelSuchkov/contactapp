import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '../../components/common/icons/Icon';
import { ContactsComponent } from '../../components/contacts/ContactsComponent';
import { CustomButton } from '../../components/common/button/CustomButton';

export const Contacts = () => {

  const { setOptions, toggleDrawer } = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

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
      <ContactsComponent modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
    // <Container>
    //   <Text>Hi from contacts</Text>
    // </Container>

  );
};
