import React from 'react';
import {ScrollView} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainNavigator';
import {ARTWORK_SCREEN} from '../navigation/constants';
import ArtWorkDetails from '../components/ArtWorkDetails/ArtWorkDetails';

type Props = NativeStackScreenProps<RootStackParamList, typeof ARTWORK_SCREEN>;

const ArtWorkScreen = ({route, navigation}: Props) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ArtWorkDetails />
    </ScrollView>
  );
};

export default ArtWorkScreen;
