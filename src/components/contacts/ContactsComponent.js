import React from 'react';
import { Text, View } from 'react-native';
import { AppModal } from '../common/modal/AppModal';
import { CustomButton } from '../common/button/CustomButton';


export const ContactsComponent = ({modalVisible, setModalVisible}) => {
  return (
     <View>
       <AppModal visible={modalVisible}
                 setModalVisible={setModalVisible}
                 // modalFooter={<></>}
                 modalBody={
                  <View>
                   <Text>Hello from the modal window</Text>
                 </View>}
                 title='My profile'
       />
       <CustomButton onPress={() => setModalVisible(true)} title='button' secondary/>
     </View>
  )
}
