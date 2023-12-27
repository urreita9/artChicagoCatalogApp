import React from 'react';
import {View, Text} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainNavigator';
import {ARTWORK_SCREEN} from '../navigation/constants';

type Props = NativeStackScreenProps<RootStackParamList, typeof ARTWORK_SCREEN>;

const ArtWork = ({route, navigation}: Props) => {
  return (
    <View>
      <Text>ArtWork</Text>
    </View>
  );
};

export default ArtWork;
