import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import colors from '../../../assets/theme/colors';

export const Message = ({
                          message,
                          onDismiss,
                          retry,
                          retryFn,
                          primary,
                          danger,
                          info,
                          success,
                        }) => {

  const [userDismissed, setDismissed] = useState(false);

  const getBgColor = () => {
    if (info) {
      return colors.secondary;
    }
    if (primary) {
      return colors.primary;
    }
    if (success) {
      return colors.success;
    }
    if (danger) {
      return colors.danger;
    }
  };

  return (
    <>
      {userDismissed
        ? null
        : <TouchableOpacity
          style={[styles.wrapper, { backgroundColor: getBgColor() }]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>

            <Text style={{ color: colors.white }}>{message}</Text>

            {retry && !typeof onDismiss !== 'function' && (
              <TouchableOpacity onPress={retryFn}>
                <Text style={{ color: colors.white }}>Retry</Text>
              </TouchableOpacity>
            )}
            {typeof onDismiss === 'function' && (
              <TouchableOpacity onPress={() => {
                setDismissed(true);
                onDismiss();
              }}>
                <Text style={{ color: colors.white }}>X</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      }
    </>

  );
};
