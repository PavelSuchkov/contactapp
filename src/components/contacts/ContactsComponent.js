import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { AppModal } from '../common/modal/AppModal';
import { CustomButton } from '../common/button/CustomButton';
import { Message } from '../common/message/Message';
import colors from '../../assets/theme/colors';
import { Icon } from '../common/icons/Icon';
import styles from './styles';
import { CREATE_CONTACT } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';


export const ContactsComponent = ({ modalVisible, setModalVisible, data, loading }) => {

  const { navigate } = useNavigation();
  const phoneNumbers = [
    {
      id: '1',
      first_name: 'PSs',
      last_name: 'Sdsd',
      country_code: '+375',
      phone_number: '34345345435345',
      contact_picture: null,
    },
    {
      id: '2',
      first_name: 'PSs',
      last_name: 'Sdsd',
      country_code: '+375',
      phone_number: '34345345435345',
      contact_picture: null,
    },
    {
      id: '3',
      first_name: 'PSs',
      last_name: 'Sdsd',
      country_code: '+375',
      phone_number: '34345345435345',
      contact_picture: null,
    },
    {
      id: '4',
      first_name: 'PSs',
      last_name: 'Sdsd',
      country_code: '+375',
      phone_number: '34345345435345',
      contact_picture: null,
    },
    {
      id: '5',
      first_name: 'PSs',
      last_name: 'Sdsd',
      country_code: '+375',
      phone_number: '34345345435345',
      contact_picture: null,
    },
    {
      id: '6',
      first_name: 'PSs',
      last_name: 'Sdsd',
      country_code: '+375',
      phone_number: '34345345435345',
      contact_picture: null,
    },
    {
      id: '11',
      first_name: 'PSs',
      last_name: 'Sdsd',
      country_code: '+375',
      phone_number: '34345345435345',
      contact_picture: null,
    },
    {
      id: '12',
      first_name: 'PSs',
      last_name: 'Sdsd',
      country_code: '+375',
      phone_number: '34345345435345',
      contact_picture: null,
    },
    {
      id: '13',
      first_name: 'PSs',
      last_name: 'Sdsd',
      country_code: '+375',
      phone_number: '34345345435345',
      contact_picture: null,
    },
    {
      id: '14',
      first_name: 'PSs',
      last_name: 'Sdsd',
      country_code: '+375',
      phone_number: '34345345435345',
      contact_picture: null,
    },
    {
      id: '15',
      first_name: 'PSs',
      last_name: 'Sdsd',
      country_code: '+375',
      phone_number: '34345345435345',
      contact_picture: null,
    },
    {
      id: '16',
      first_name: 'PSs',
      last_name: 'Sdsd',
      country_code: '+375',
      phone_number: '34345345435345',
      contact_picture: null,
    },
    {
      id: '17',
      first_name: 'PSs',
      last_name: 'Sdsd',
      country_code: '+375',
      phone_number: '34345345435345',
      contact_picture: null,
    },

  ];

  const ListEmptyComponent = () => {
    return (
      <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
        <Message info message="No contacts to show" />
      </View>
    );
  };

  const renderItem = ({ item }) => {
    const {
      id,
      first_name,
      last_name,
      phone_number,
      country_code,
      is_favorite,
      contact_picture,
    } = item;
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {contact_picture
            ? (<Image
              style={{
                width: 45,
                height: 45,
                borderRadius: 100,
              }} source={{ uri: contact_picture }}
            />)
            :
            (<View
              style={{
                width: 45,
                height: 45,
                backgroundColor: colors.grey,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}
            >
              <Text style={[styles.name, { color: colors.white }]}>{first_name[0]}</Text>
              <Text style={[styles.name, { color: colors.white }]}>{last_name[0]}</Text>
            </View>)}

          <View style={{ paddingLeft: 20 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.name}>{first_name}</Text>
              <Text style={styles.name}>{'  '}</Text>
              <Text style={styles.name}>{last_name}</Text>
            </View>
            <Text style={styles.phoneNumber}>{`${country_code} ${phone_number}`}</Text>
          </View>
        </View>
        <Icon name="right" type="ant" size={21} color={colors.grey} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{ backgroundColor: colors.white }}>
        <AppModal visible={modalVisible}
                  setModalVisible={setModalVisible}
                  modalBody={
                    <View>
                      <Text>Hello from the modal window</Text>
                    </View>}
                  title="My profile"
        />
        {/*<CustomButton onPress={() => setModalVisible(true)} title='button' secondary/>*/}
        {
          loading &&
          <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        }
        {
          !loading &&
          <View style={{ paddingVertical: 20 }}>
            <FlatList
              ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: colors.grey }} />}
              data={phoneNumbers}
              renderItem={renderItem}
              keyExtractor={(item) => String(item.id)}
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={<View style={{ height: 150 }} />}
            />
          </View>
        }
      </View>
      <TouchableOpacity style={styles.floatingActionButton}
                        onPress={() => navigate(CREATE_CONTACT)}>
        <Icon name="plus" size={21} color={colors.white} />
      </TouchableOpacity>
    </>
  );
};