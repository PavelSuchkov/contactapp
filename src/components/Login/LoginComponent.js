import { Container } from '../common/container/Container';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Input } from '../common/input/Input';
import { CustomButton } from '../common/button/CustomButton';
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { REGISTER } from '../../constants/routeNames';

export const LoginComponent = () => {
  const [value, changeText] = useState();
  const { navigate } = useNavigation();
  return (
    <Container>
      <Image width={70} height={70}
             source={require('../../assets/images/logo.png')}
             style={styles.logoImage} />

      <View>

        <Text style={styles.title}>Welcome to the RNContacts</Text>
        <Text style={styles.subTitle}>Please Login here</Text>

        <View style={styles.form}>
          <Input
            label='Username'
            placeholder='Enter Username'
            iconPosition='right'
            // changeText={(text) => changeText(text)}
            // value={value}
            // error={'This field is required'}
          />

          <Input
            label='Password'
            placeholder='Enter Password'
            secureTextEntry={true}
            icon={<Text>SHOW </Text>}
            iconPosition='right'
            // changeText={(text) => changeText(text)}
            // value={value}
            // error={'This field is required'}
          />
          <CustomButton title='Submit' primary />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity onPress={() => {navigate(REGISTER)}}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </Container>
  );
};
