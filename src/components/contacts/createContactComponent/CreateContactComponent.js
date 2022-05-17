import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import { Container } from '../../common/container/Container';
import { Input } from '../../common/input/Input';
import CountryPicker from 'react-native-country-picker-modal';
import { CustomButton } from '../../common/button/CustomButton';
import { DEFAULT_IMAGE_URI } from '../../../constants/general';

export const CreateContactComponent = ({
                                         onChangeText,
                                         form,
                                         onSubmit,
                                         setForm,
                                         loading,
                                         error,
                                       }) => {
  return (
    <View style={styles.container}>

      <Container>
        <Image source={{ uri: DEFAULT_IMAGE_URI }} style={styles.imageView} />
        <Text style={styles.chooseText}>Choose image</Text>
        <Input label="First name"
               placeholder="Enter First Name"
               error={error?.first_name?.[0]}
               changeText={(value) => {
                 onChangeText({ name: 'firstName', value: value });
               }} />
        <Input label="Last name"
               placeholder="Enter Last Name"
               error={error?.last_name?.[0]}
               changeText={(value) => {
                 onChangeText({ name: 'lastName', value: value });
               }} />
        <Input
          label="Phone number"
          placeholder="Enter phone number"
          iconPosition="left"
          style={{ paddingLeft: 10 }}
          error={error?.phone_number?.[0]}
          changeText={(value) => {
            onChangeText({ name: 'phoneNumber', value: value });
          }}
          icon={
            <CountryPicker
              withFilter
              withFlag
              countryCode={!form ? undefined : form.countryCode}
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={(v) => {
                const phoneCode = v.callingCode[0];
                const cCode = v.cca2;
                setForm({ ...form, phoneCode, countryCode: cCode });
              }}
            />
          }
        />
        <CustomButton
          primary
          title="Submit"
          onPress={onSubmit}
          loading={loading}
          disabled={loading}
        />
      </Container>
    </View>
  );
};
