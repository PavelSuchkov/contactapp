import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { Container } from '../../components/common/container/Container';
import { Input } from '../../components/common/input/Input';

export const Login = () => {

  const [value, changeText] = useState();

  return (
    <Container>
      <Text>Hi from Login</Text>
      <Input
        label='Username'
        changeText={(text) => changeText(text)}
        value={value}
        iconPosition='right'
        // error={'This field is required'}
      />

      <Input
        label='Password'
        changeText={(text) => changeText(text)}
        value={value}
        icon={<Text>HIDE</Text>}
        iconPosition='right'
        // error={'This field is required'}
      />
    </Container>
  );
};
