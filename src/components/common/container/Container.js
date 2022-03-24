import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';


export const Container = ({style, children}) => {


  return (
    <ScrollView>
      <View style={[styles.wrapper, style]}>
        {children}
      </View>
    </ScrollView>
  )

}
