import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainStackNavigator';
import {FAVORITES_SCREEN, HOME_SCREEN} from '../navigation/constants';
import Catalog from '../components/Catalog/Catalog';
import IconButton from '../components/IconButton/IconButton';
import HomeHeader from '../components/HomeHeader/HomeHeader';

type Props = NativeStackScreenProps<RootStackParamList, typeof HOME_SCREEN>;

const HomeScreen = ({route, navigation}: Props) => {
  const navigateFavorites = () => navigation.navigate(FAVORITES_SCREEN);
  return (
    <SafeAreaView>
      <HomeHeader navBtnPress={navigateFavorites} />
      <Catalog screen={HOME_SCREEN} />
    </SafeAreaView>
  );
};

export default HomeScreen;
