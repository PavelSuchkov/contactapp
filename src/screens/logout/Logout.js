import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/Provider';
import { ActivityIndicator } from 'react-native';
import { logoutUser } from '../../context/actions/auth/logoutUser';


export const Logout = () => {

  const { authDispatch} = useContext(GlobalContext);

  useEffect(() => {
    logoutUser()(authDispatch)
  }, [])

  return <ActivityIndicator />;
};
