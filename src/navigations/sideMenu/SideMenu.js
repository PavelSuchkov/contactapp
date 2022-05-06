import React from 'react';
import { Alert, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Container } from '../../components/common/container/Container';
import styles from './styles';
import { SETTINGS } from '../../constants/routeNames';
import { logoutUser } from '../../context/auth/logoutUser';
import Icon from 'react-native-vector-icons/Ionicons';
import LogoutIcon from 'react-native-vector-icons/MaterialIcons';


export const SideMenu = ( {navigation, authDispatch} ) => {

  const logOutHandler = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => { },
        style: 'cancel'
      },
      {
        text: 'Ok',
        onPress: () => {
          logoutUser()(authDispatch)
        },
        style: 'destructive'
      }
    ])
  }

  const menuItems = [
    {
      icon: <Icon name='settings-outline' size={25}/>,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);

      },
    },
    {
      icon: <LogoutIcon name='logout' size={25}/>,
      name: 'Logout',
      onPress: logOutHandler
    },
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image width={70} height={70}
               source={require('../../assets/images/logo.png')}
               style={styles.logoImage} />
        <View style={{ paddingHorizontal: 75 }}>
          {menuItems.map(({ icon, name, onPress }) => (
            <TouchableOpacity key={name} style={styles.item} onPress={onPress}>
              <Text>{icon}</Text>
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};
