import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ContactDetailsComponent } from '../../components/contactDetails/ContactDetailsComponent';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from '../../components/common/icons/Icon';
import colors from '../../assets/theme/colors';

export const ContactDetails = () => {
  const { params: { item = {} } = {} } = useRoute();

  const { setOptions } = useNavigation();

  useEffect(() => {
    if (item) {
      setOptions({
        title: item.first_name + ' ' + item.last_name,
        headerRight: () => {
          return (
            <View style={{flexDirection: 'row', paddingRight: 10}}>
              <TouchableOpacity>
                <Icon name={item.is_favorite ? 'star' : 'star-border'}
                      type="material"
                      size={21}
                      color={colors.grey}
                />
              </TouchableOpacity>
              <TouchableOpacity  style={{paddingLeft: 10}}>
                <Icon name='delete'
                      type="material"
                      size={21}
                      color={colors.grey}
                />
              </TouchableOpacity>
            </View>
          );
        },
        // headerLeft: () => {
        //   return (
        //     <View>
        //       <Text>Hello</Text>
        //     </View>
        //   )
        // }
      });
    }
  }, [item]);
  return (
    <ContactDetailsComponent contact={item} />
  );
};
