import React from 'react';
import { useRoute } from '@react-navigation/native';
import { ContactDetailsComponent } from '../../components/contactDetails/ContactDetailsComponent';

export const ContactDetails = () => {
  const { params: {item = {}} = {} } = useRoute();

  return (
    <ContactDetailsComponent contact={item}/>
  );
};
