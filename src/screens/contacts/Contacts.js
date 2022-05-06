import React, { useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Container } from '../../components/common/container/Container';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '../../components/common/icons/Icon';

export const Contacts = () => {

  const { setOptions, toggleDrawer } = useNavigation();

  useEffect(() => {
    setOptions({
      headerLeft:
        () => (
          <TouchableOpacity onPress={() => toggleDrawer()}>
           <Icon type='material' name='menu' size={30} style={{padding: 10}}/>
          </TouchableOpacity>
        ),
    });
  }, []);

  return (
    <Container>
      <Text>Hi from contacts</Text>
    </Container>
  );
};
