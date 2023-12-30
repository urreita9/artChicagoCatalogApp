import React from 'react';
import {View, ActivityIndicator, Modal} from 'react-native';
import styles from './styles';
import Colors from '../../utils/colors';

interface Props {
  loading: boolean;
}

const Loading = ({loading}: Props) => {
  return (
    <Modal transparent={true} animationType={'none'} visible={loading}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            size={'large'}
            color={Colors.primary}
            animating={loading}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loading;
