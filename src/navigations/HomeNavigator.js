import { Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../constants/routeNames';
import { Contacts } from '../screens/contacts/Contacts';
import { ContactDetails } from '../screens/contactDetail/ContactDetails';
import { CreateContact } from '../screens/Createcontact/CreateContact';
import { Settings } from '../screens/settings/Settings';


export const HomeNavigator = () => {

  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts}/>
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetails}/>
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}/>
      <HomeStack.Screen name={SETTINGS} component={Settings}/>
    </HomeStack.Navigator>
  );
};
