import React from 'react';
import { Image, Text, View, Switch, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Container } from '../../common/container/Container';
import { Input } from '../../common/input/Input';
import CountryPicker from 'react-native-country-picker-modal';
import { CustomButton } from '../../common/button/CustomButton';
import { DEFAULT_IMAGE_URI } from '../../../constants/general';
import colors from '../../../assets/theme/colors';
import { ImagePickerComponent } from '../../common/imagePicker/ImagePickerComponent';

export const CreateContactComponent = ({
                                         onChangeText,
                                         toggleValueChange,
                                         form,
                                         onSubmit,
                                         setForm,
                                         loading,
                                         error,
                                         sheetRef,
                                         openSheet,
                                         localFile,
                                         onFileSelected,
                                       }) => {
  return (
    <View style={styles.container}>

      <Container>
        <Image source={{ uri:  localFile?.path || DEFAULT_IMAGE_URI }} style={styles.imageView} />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose image</Text>
        </TouchableOpacity>
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 15,
          }}>
          <Text style={{ fontSize: 17 }}>
            Add to favorites
          </Text>
          <Switch
            trackColor={{ false: 'blue', true: colors.primary }}
            thumbColor={colors.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleValueChange}
            value={form.isFavorite}
          />
        </View>
        <CustomButton
          primary
          title="Submit"
          onPress={onSubmit}
          loading={loading}
          disabled={loading}
        />
      </Container>
      <ImagePickerComponent
        onFileSelected={onFileSelected}
        ref={sheetRef}  />
    </View>
  );
};
