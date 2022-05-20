import React from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Icon } from '../icons/Icon';
import PropTypes from 'prop-types';


export const AppModal = ({
                           visible,
                           setModalVisible,
                           title,
                           modalBody,
                           modalFooter,
                           closeOnTouchOutside,
                         }) => {
  return (
    <Modal visible={visible}>
      <TouchableOpacity style={styles.wrapper}
                        onPress={() => {
                          if (closeOnTouchOutside) {
                            setModalVisible(false);
                          }
                        }}>

        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon type="evil" name="close" size={25} />
              </TouchableOpacity>
              <Text style={styles.title}>{title || 'RN_Contacts'}</Text>
            </View>
            <View style={styles.footerSeparator} />

            <View style={styles.body}>{modalBody}</View>

            {modalFooter}
            {
              !modalFooter &&
              <View>
                <>
                  <View style={styles.footerSeparator} />
                  <View style={styles.footerItems}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>Privacy Policy</Text>
                      <View style={styles.termsView} />
                      <Text style={styles.footerText}>Terms of Service</Text>
                    </View>
                  </View>
                </>
              </View>
            }
          </ScrollView>
        </View>
      </TouchableOpacity>

    </Modal>
  );
};

AppModal.propTypes = {
  closeOnTouchOutside: PropTypes.bool,
};

AppModal.defaultProps = {
  closeOnTouchOutside: true,
};
