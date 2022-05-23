import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, LOGOUT, SETTINGS } from '../constants/routeNames';
import { Contacts } from '../screens/contacts/Contacts';
import { ContactDetails } from '../screens/contactDetail/ContactDetails';
import { CreateContact } from '../screens/createContact/CreateContact';
import { Settings } from '../screens/settings/Settings';
import { Logout } from '../screens/logout/Logout';


export const HomeNavigator = () => {

  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetails} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
      <HomeStack.Screen name={LOGOUT} component={Logout} />
    </HomeStack.Navigator>
  );
};
