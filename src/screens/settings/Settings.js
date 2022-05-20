import React from 'react';
import { Text, View } from 'react-native';
import { SettingsComponent } from '../../components/settings/SettingsComponent';

export const Settings = () => {

  const [email, setEmail] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [sortBy, setSortBy] = React.useState(null);

  const settingsOptions = [
    {
      title: 'My Info', subTitle: 'Setup your profile', onPress: () => {
      },
    },
    {
      title: 'Accounts', subTitle: null, onPress: () => {
      },
    },
    {
      title: 'Default account for new contacts',
      subTitle: email,
      onPress: () => {
      },
    },
    {
      title: 'Contacts to display', subTitle: 'All contacts', onPress: () => {
      },
    },
    {
      title: 'Sort by',
      subTitle: sortBy,
      onPress: () => {
        setModalVisible(true);
      },
    },
    {
      title: 'Name format', subTitle: 'First name first', onPress: () => {
      },
    },
    {
      title: 'Import', subTitle: null, onPress: () => {
      },
    },
    {
      title: 'Export', subTitle: null, onPress: () => {
      },
    },
    {
      title: 'Blocked numbers', subTitle: null, onPress: () => {
      },
    },
    {
      title: 'About RNContacts', subTitle: null, onPress: () => {
      },
    },
  ];


  return (
    <SettingsComponent settingsOptions={settingsOptions} />
  );
};
