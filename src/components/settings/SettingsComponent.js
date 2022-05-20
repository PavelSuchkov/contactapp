import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/theme/colors';
import { AppModal } from '../common/modal/AppModal';
import { Icon } from '../common/icons/Icon';

export const SettingsComponent = ({
                                    settingsOptions,
                                    setModalVisible,
                                    modalVisible,
                                    prefArr,
                                  }) => {
  return (
    <>
      <AppModal
        visible={modalVisible}
        setModalVisible={setModalVisible}
        title={'Sort by'}
        closeOnTouchOutside={false}
        modalBody={
          <View>
            {prefArr.map(({ name, selected, onPress }) => (
              <TouchableOpacity key={name}
                                onPress={onPress}
                                style={{
                                  flexDirection: 'row',
                                  paddingVertical: 20,
                                  alignItems: 'center',
                                }}>
                {selected && <Icon name="check" type="material" size={17} />}
                <Text style={{
                  fontSize: 17,
                  paddingLeft: selected ? 15 : 30,
                }}>{name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        }
        modalFooter={<></>}
      />
      <ScrollView style={{ backgroundColor: colors.white }}>
        {
          settingsOptions.map(({ title, subTitle, onPress }, index) => (
            <TouchableOpacity key={title} onPress={onPress}>
              <View style={{
                paddingHorizontal: 20,
                paddingBottom: 20,
                paddingTop: 20,
              }}>
                <Text style={{ fontSize: 17 }}>{title}</Text>
                {
                  subTitle &&
                  <Text style={{ fontSize: 14, color: colors.grey, paddingTop: 5, opacity: 0.6 }}>
                    {subTitle}
                  </Text>
                }
              </View>
              <View style={{ height: 0.5, backgroundColor: colors.grey }} />
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </>
  );
};
