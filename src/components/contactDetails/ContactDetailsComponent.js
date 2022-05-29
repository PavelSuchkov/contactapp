import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { ImageComponent } from './ImageComponent';
import { CustomButton } from '../common/button/CustomButton';
import { Icon } from '../common/icons/Icon';
import colors from '../../assets/theme/colors';
import { useNavigation } from '@react-navigation/native';
import { CREATE_CONTACT } from '../../constants/routeNames';
import { DEFAULT_IMAGE_URI } from '../../constants/general';
import { ImagePickerComponent } from '../common/imagePicker/ImagePickerComponent';

export const ContactDetailsComponent = ({
                                          contact,
                                          onFileSelected,
                                          sheetRef,
                                          openSheet,
                                          localFile,
                                          updatingImage,
                                          uploadSucceeded,
                                        }) => {

  const {
    first_name,
    last_name,
    phone_number,
    country_code,
    contact_picture,
  } = contact;


  const { navigate } = useNavigation();

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {(contact_picture || uploadSucceeded) && (<ImageComponent src={contact_picture || localFile?.path} />)}
        {!contact_picture && !uploadSucceeded && (
          <View style={{ alignItems: 'center', paddingVertical: 20 }}>
            <Image source={{ uri: localFile?.path || DEFAULT_IMAGE_URI }}
                   style={styles.imageView} />
            <TouchableOpacity onPress={() => openSheet()}>
              <Text style={{ color: colors.primary }}>{updatingImage ? 'Updating...' : 'Add Picture'}</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.content}>
          <Text style={styles.names}>{first_name + ' ' + last_name}</Text>
        </View>
        <View style={styles.hrLine} />
        <View style={styles.topCallOptions}>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="ionicon"
              name="call-outline"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="materialCommunity"
              name="message-text"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Text</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="materialCommunity"
              name="video"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Video</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.middleCallOptions}>
          <Icon
            type="ionicon"
            name="call-outline"
            color={colors.grey}
            size={27}
          />
          <View style={styles.phoneMobile}>
            <Text>{country_code + ' ' + phone_number}</Text>
            <Text>Mobile</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              type="materialCommunity"
              name="video"
              color={colors.primary}
              size={27}
            />
            <Icon
              type="materialCommunity"
              name="message-text"
              color={colors.primary}
              size={27}
              style={[styles.msgIcon]}
            />
          </View>
        </View>
        <CustomButton
          style={{ alignSelf: 'flex-end', marginRight: 20, width: 200 }}
          primary
          title="Edit Contact"
          onPress={() => {
            navigate(CREATE_CONTACT, { contact, editing: true });
          }}
        />
      </View>
      <ImagePickerComponent onFileSelected={onFileSelected} ref={sheetRef} />
    </ScrollView>
  );
};
