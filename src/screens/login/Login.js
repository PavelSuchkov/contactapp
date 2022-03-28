import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { Container } from '../../components/common/container/Container';
import { Input } from '../../components/common/input/Input';
import { CustomButton } from '../../components/common/button/CustomButton';
import { LoginComponent } from '../../components/Login/LoginComponent';

export const Login = () => {

  const [value, changeText] = useState();

  return (
  <LoginComponent/>
  )
};
