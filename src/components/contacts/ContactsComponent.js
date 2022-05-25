import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { AppModal } from '../common/modal/AppModal';
import { Message } from '../common/message/Message';
import colors from '../../assets/theme/colors';
import { Icon } from '../common/icons/Icon';
import styles from './styles';
import { CONTACT_DETAIL, CREATE_CONTACT } from '../../constants/routeNames';
import { useNavigation, useRoute } from '@react-navigation/native';


export const ContactsComponent = ({
                                    data,
                                    loading,
                                    sortBy,
                                  }) => {

  const { navigate } = useNavigation();

  const ListEmptyComponent = () => {
    return (
      <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
        <Message info message="No contacts to show" />
      </View>
    );
  };
  const renderItem = ({ item }) => {
    const {
      first_name,
      last_name,
      phone_number,
      country_code,
      contact_picture,
    } = item;
    return (
      <TouchableOpacity style={styles.itemContainer}
                        onPress={() => {
                          navigate(CONTACT_DETAIL, { item });
                        }}
      >
        <View style={styles.item}>
          {contact_picture
            ? (<Image
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 100,
                }} source={{ uri: contact_picture }}
              />
            ) : (
              <View
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
                <Text style={[styles.name, { color: colors.white }]}>{first_name?.[0].toUpperCase()}</Text>
                <Text style={[styles.name, { color: colors.white }]}>{last_name?.[0].toUpperCase()}</Text>
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
      <View style={{ backgroundColor: colors.white, height: '100%' }}>
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
              data={
                sortBy
                  ? data.sort((a, b) => {
                    if (sortBy === 'First Name') {
                      if (b.first_name.toUpperCase() > a.first_name.toUpperCase()) {
                        return -1;
                      } else return 1;
                    }
                    if (sortBy === 'Last Name') {
                      if (b.last_name.toUpperCase() > a.last_name.toUpperCase()) {
                        return -1;
                      } else return 1;
                    }
                  })
                  : data
              }
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
