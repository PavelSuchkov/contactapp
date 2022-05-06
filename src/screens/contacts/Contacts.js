import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Container } from '../../components/common/container/Container';
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export const Contacts = () => {

  const { setOptions, toggleDrawer } = useNavigation();

  useEffect(() => {
    setOptions({
      headerLeft:
        () => (
          <TouchableOpacity onPress={() => toggleDrawer()}>
           <MaterialIcon name='menu' size={30} style={{padding: 10}}/>
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
