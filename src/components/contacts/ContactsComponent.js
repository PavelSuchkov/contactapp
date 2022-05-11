import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { AppModal } from '../common/modal/AppModal';
import { CustomButton } from '../common/button/CustomButton';
import { Message } from '../common/message/Message';
import colors from '../../assets/theme/colors';
import { Icon } from '../common/icons/Icon';
import styles from './styles';


export const ContactsComponent = ({ modalVisible, setModalVisible, data, loading }) => {

  const ListEmptyComponent = () => {
    return (
      <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
        <Message info message="No contacts to show" />
      </View>

    );
  };

  const renderItem = ({ item }) => {
    console.log(item);
    const { id, first_name, last_name, phone_number, is_favorite, contact_picture } = item;
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
              }}
            />)}

          <View style={{ flexDirection: 'row' }}>
            <Text>{first_name}</Text>
            <Text>{last_name}</Text>
          </View>
          <Text>{phone_number}</Text>
          <Text>Contact</Text>
        </View>
        <Icon name="right" type="ant" />
      </TouchableOpacity>
    );
  };

  return (
    <View>
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
        <View style={{paddingVertical: 20}}>
          <FlatList
            data={[]}
            renderItem={renderItem}
            keyExtractor={(item) => toString(item.id)}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={{height: 150}}/>}
          />
        </View>
      }

    </View>
  );
};
