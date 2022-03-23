import { SafeAreaView, StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { DrawerNavigator } from './DrawerNavigator';
import { HomeNavigator } from './HomeNavigator';
import { AuthNavigator } from './AuthNavigator';


export const AppNavContainer = () => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
  );
};

// SafeAreaView - safe over statusbarr
