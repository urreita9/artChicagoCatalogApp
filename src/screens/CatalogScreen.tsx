import React from 'react';
import {View, Text} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainNavigator';
import {CATALOG_SCREEN} from '../navigation/constants';

type Props = NativeStackScreenProps<RootStackParamList, typeof CATALOG_SCREEN>;

const CatalogScreen = ({route, navigation}: Props) => {
  return (
    <View>
      <Text>CatalogScreen</Text>
    </View>
  );
};

export default CatalogScreen;
