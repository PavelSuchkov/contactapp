import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { DrawerNavigator } from './DrawerNavigator';
import { AuthNavigator } from './AuthNavigator';
import { GlobalContext } from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
import colors from '../assets/theme/colors';


export const AppNavContainer = () => {

  const [isAuth, setIsAuth] = useState();
  const [authLoaded, setAuthLoaded] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setAuthLoaded(true);
        setIsAuth(true);
      } else {
        setAuthLoaded(true);
        setIsAuth(false);
      }
    } catch (error) {

    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const {
    authState: { isLoggedIn },
  } = useContext(GlobalContext);

  return (
    <>
      {authLoaded ? (
          <NavigationContainer>
            {
              isAuth || isLoggedIn
                ? <DrawerNavigator />
                : <AuthNavigator />
            }
          </NavigationContainer>
        ) : (
          <ActivityIndicator size='large' color={colors.primary} true/>
        )}
    </>
  );
};

