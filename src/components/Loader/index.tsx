import React from 'react';
import {ActivityIndicator} from 'react-native';
import Colors from '../../utils/colors';
import CustomModal from '../CustomModal';

interface Props {
  loading: boolean;
}

const Loading = ({loading}: Props) => {
  return (
    <CustomModal visible={loading}>
      <ActivityIndicator
        size={'large'}
        color={Colors.primary}
        animating={loading}
      />
    </CustomModal>
  );
};

export default Loading;
