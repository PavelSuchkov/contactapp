import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';


export const ImageComponent = ({ src }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onLoadStart = () => {
    setIsLoading(true)
  }
  const onLoadEnd = () => {
    setIsLoading(false)
    setHasError(false)
  }
  const onError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <View style={styles.imageContainer}>
      {isLoading && (<Text style={styles.loading}>Loading Image...</Text>)}
      <Image style={styles.detailPhoto}
             source={{ uri: src }}
             onLoadStart={onLoadStart}
             onLoadEnd={onLoadEnd}
             onError={onError}
      />
    </View>
  );
};
