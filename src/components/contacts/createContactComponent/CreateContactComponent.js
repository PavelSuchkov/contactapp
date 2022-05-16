import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import { Container } from '../../common/container/Container';
import { Input } from '../../common/input/Input';
import CountryPicker from 'react-native-country-picker-modal';
import { CustomButton } from '../../common/button/CustomButton';
import { DEFAULT_IMAGE_URI } from '../../../constants/general';

export const CreateContactComponent = () => {
  return (
    <View style={styles.container}>

      <Container>
        <Image source={{uri: DEFAULT_IMAGE_URI}} style={styles.imageView}/>
        <Text style={styles.chooseText}>Choose image</Text>
        <Input label="First name" placeholder="Enter First Name" />
        <Input label="Last name" placeholder="Enter Last Name" />
        <Input
          label="Phone number"
          placeholder="Enter phone number"
          iconPosition="left"
          style={{paddingLeft: 10}}
          icon={
            <CountryPicker
              withFilter
              withFlag
              withCountryNameButton={false}
              withCallingCode
              withEmoji
              onSelect={() => {}}
            />
          }
        />

        <CustomButton primary title="Submit" />
      </Container>
    </View>
  );
};
