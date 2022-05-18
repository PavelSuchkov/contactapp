import React, { forwardRef } from 'react';
import RBSheet from "react-native-raw-bottom-sheet";
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '../icons/Icon';
import styles from './styles';
import colors from '../../../assets/theme/colors';

export const ImagePicker = forwardRef(({}, ref) => {

  const options = [
    {
      name: 'Take from Camera',
      icon: <Icon name='camera' type='fa5' color={colors.grey} size={21}/>,
      onPress: () => {}
    },
    {
      name: 'Choose from Gallery',
      icon: <Icon name='image' type='fa5' color={colors.grey} size={21}/>,
      onPress: () => {}
    }
  ]

    return (
      <RBSheet
        ref={ref}
        height={300}
        openDuration={250}
        closeOnDragDown
        customStyles={{
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            // justifyContent: "center",
            // alignItems: "center"
          }
        }}
      >
        <View style={styles.optionsWrapper}>
        {options.map(({name, icon, onPress}) => (
          <TouchableOpacity style={styles.pickerOption} key={name}>
            {icon}
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        )) }
        </View>
      </RBSheet>
    )
})
