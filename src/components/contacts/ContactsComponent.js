import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { AppModal } from '../common/modal/AppModal';
import { CustomButton } from '../common/button/CustomButton';
import { Message } from '../common/message/Message';
import colors from '../../assets/theme/colors';


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
    return (
      <View>
        <Text>Contact</Text>
      </View>
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
        <FlatList
                  data={[]}
                  renderItem={renderItem}
                  keyExtractor={(item) => toString(item.id)}
                  ListEmptyComponent={ListEmptyComponent}
        />
      }

    </View>
  );
};
