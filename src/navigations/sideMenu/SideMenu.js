import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Container } from '../../components/common/container/Container';
import styles from './styles';
import { SETTINGS } from '../../constants/routeNames';


export const SideMenu = ({ navigation }) => {

  const logOutHandler = () => {
    navigation.toggleDrawer();
  }

  const menuItems = [
    {
      icon: <Text>T</Text>,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Text>T</Text>, name: 'Logout',
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
