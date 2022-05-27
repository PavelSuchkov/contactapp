import { Platform } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LOGIN, REGISTER } from '../constants/routeNames';
import { Login } from '../screens/login/Login';
import { Register } from '../screens/register/Register';

export const AuthNavigator = () => {

  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: Platform.OS === 'ios' }}>
      <AuthStack.Screen name={LOGIN} component={Login}/>
      <AuthStack.Screen name={REGISTER} component={Register}/>
    </AuthStack.Navigator>
  );
};
