import { Container } from '../common/container/Container';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Input } from '../common/input/Input';
import { CustomButton } from '../common/button/CustomButton';
import React, { useContext, useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { REGISTER } from '../../constants/routeNames';
import { Message } from '../common/message/Message';
import { GlobalContext } from '../../context/Provider';

export const LoginComponent = ({ form, onChange, onSubmit, loading, errors }) => {

  const { navigate } = useNavigation();
  const [isSecure, setIsSecure] = useState(true);

  const {
    authState: { error },
  } = useContext(GlobalContext);

  return (
    <Container>
      <Image width={70} height={70}
             source={require('../../assets/images/logo.png')}
             style={styles.logoImage} />
      <View>
        <Text style={styles.title}>Welcome to the RNContacts</Text>
        <Text style={styles.subTitle}>Please Login here</Text>

        {error?.detail && (
          <Message message={error?.detail}
                   danger
                   retry
                   onDismiss
                   retryFn={() => onSubmit()} />
        )}

        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter Username"
            iconPosition="right"
            changeText={(value) => onChange({
              name: 'username', value,
            })}
            value={form.username}
            error={errors.username}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={isSecure}
            icon={
              <TouchableOpacity
                onPress={() => setIsSecure(prev => !prev)}>
                <Text>{isSecure ? 'SHOW' : 'HIDE'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            changeText={(value) => onChange({
              name: 'password', value,
            })}
            value={form.password}
            error={errors.password}
          />
          <CustomButton title="Submit"
                        primary
                        disabled={loading}
                        loading={loading}
                        onPress={onSubmit} />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity onPress={() => {
              navigate(REGISTER);
            }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </Container>
  );
};
