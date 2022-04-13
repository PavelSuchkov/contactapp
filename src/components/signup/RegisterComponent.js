import { Container } from '../common/container/Container';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Input } from '../common/input/Input';
import { CustomButton } from '../common/button/CustomButton';
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../constants/routeNames';

export const RegisterComponent = ({ errors, form, onChange, onSubmit }) => {

  const buttonDisabled = () => {
    return !!(errors.username || errors.firstName
      || errors.lastName || errors.email || errors.password);
  };

  const { navigate } = useNavigation();
  return (
    <Container>
      <Image width={70} height={70}
             source={require('../../assets/images/logo.png')}
             style={styles.logoImage} />

      <View>

        <Text style={styles.title}>Welcome to the RNContacts</Text>
        <Text style={styles.subTitle}>Create account</Text>

        <View style={styles.form}>

          <Input
            label='Username'
            placeholder='Enter Username'
            iconPosition='right'
            changeText={(value) => onChange({
              name: 'username', value,
            })}
            error={errors.username}
            value={form.username}
          />
          <Input
            label='Firstname'
            placeholder='Enter Username'
            iconPosition='right'
            changeText={(value) => onChange({
              name: 'firstName', value,
            })}
            error={errors.firstName}
            value={form.firstName}
          />

          <Input
            label='Lastname'
            placeholder='Enter Lastname'
            iconPosition='right'
            changeText={(value) => onChange({
              name: 'lastName', value,
            })}
            error={errors.lastName}
          />

          <Input
            label='email'
            placeholder='Enter email'
            iconPosition='right'
            changeText={(value) => onChange({
              name: 'email', value,
            })}
            error={errors.email}
          />

          <Input
            label='Password'
            placeholder='Enter Password'
            secureTextEntry={true}
            icon={<Text>SHOW </Text>}
            iconPosition='right'
            changeText={(value) => onChange({
              name: 'password', value,
            })}
            error={errors.password}
          />
          <CustomButton title='Submit' primary onPress={onSubmit} disabled={buttonDisabled()} />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have account?</Text>
            <TouchableOpacity onPress={() => {
              navigate(LOGIN);
            }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </Container>
  );
};