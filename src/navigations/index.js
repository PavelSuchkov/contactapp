import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import { DrawerNavigator } from './DrawerNavigator';
import { AuthNavigator } from './AuthNavigator';
import { GlobalContext } from '../context/Provider';


export const AppNavContainer = () => {
  // const isLoggedIn = true;

  const {
    authState: { isLoggedIn },
  } = useContext(GlobalContext);

  console.log(isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

// SafeAreaView - safe over statusbarr
