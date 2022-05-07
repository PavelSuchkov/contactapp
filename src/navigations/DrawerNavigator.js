import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeNavigator } from './HomeNavigator';
import { HOME_NAVIGATOR } from '../constants/routeNames';
import { SideMenu } from './sideMenu/SideMenu';
import { GlobalContext } from '../context/Provider';


const getDrawerContent = ( navigation, authDispatch ) => {

  return <SideMenu navigation={navigation} authDispatch={authDispatch}/>;
};

export const DrawerNavigator = () => {

  const Drawer = createDrawerNavigator();
  const { authDispatch } = useContext(GlobalContext);

  return (
    <Drawer.Navigator drawerType='back'
                      drawerContent={({navigation}) => getDrawerContent(navigation, authDispatch)
                      }>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};
