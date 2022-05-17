import React, { useState } from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import colors from '../../../assets/theme/colors';

export const CustomButton = ({
                               title,
                               disabled,
                               loading,
                               primary,
                               secondary,
                               onPress,
                               danger,
                             }) => {

  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (secondary) {
      return colors.secondary;
    }
    if (danger) {
      return colors.danger;
    }
  };

  return (
    <TouchableOpacity disabled={disabled}
                      onPress={onPress}
                      style={[styles.wrapper, { backgroundColor: getBgColor() }]}>
      <View style={[styles.loaderSection]}>
        {loading &&
          <ActivityIndicator color={primary ? colors.white : colors.primary} />}
        {title &&
          <Text style={{
            color: disabled ? 'black' : colors.white,
            paddingLeft: loading ? 5 : 0,
          }}>{loading ? 'Please wait...' : title}</Text>}
      </View>

    </TouchableOpacity>
  );
};
