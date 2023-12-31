import React, {ReactNode} from 'react';
import {View, Text, Modal} from 'react-native';
import styles from './styles';

interface Props {
  visible: boolean;
  children: ReactNode;
}

const CustomModal = ({visible, children}: Props) => {
  return (
    <Modal transparent={true} animationType={'none'} visible={visible}>
      <View style={styles.modalBackground}>
        <View style={styles.contentWrapper}>{children}</View>
      </View>
    </Modal>
  );
};

export default CustomModal;
