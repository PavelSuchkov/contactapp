import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Container } from '../../components/common/container/Container';
import { useNavigation } from '@react-navigation/native';

export const Contacts = () => {

  const { setOptions, toggleDrawer } = useNavigation();

  useEffect(() => {
    setOptions({
      headerLeft:
        () => (
          <TouchableOpacity onPress={() => toggleDrawer()}>
            <Text style={{ padding: 10 }}>NAV</Text>
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
