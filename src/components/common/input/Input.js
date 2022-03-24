import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './styles';
import colors from '../../../assets/theme/colors';

export const Input = ({
                        value,
                        changeText,
                        style,
                        label,
                        icon,
                        iconPosition,
                        error,
                        ...props
                      }) => {

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };
  const getBorderColor = () => {
    if (focused){
      return colors.primary
    }
      if (error) {
        return colors.danger;
      } else return colors.grey;
  };

  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}

      <View style={[styles.wrapper,
        {alignItems: icon ? 'center' : 'baseline'},
        {borderColor: getBorderColor(),
        flexDirection: getFlexDirection()}
      ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={changeText}
          value={value}
          onFocus={() => { setFocused(true)}}
          onBlur={() => { setFocused(false)}}
          {...props}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}

    </View>
  );
};
