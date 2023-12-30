import React, {useCallback} from 'react';
import {SafeAreaView, Linking, Platform} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainStackNavigator';
import {FAVORITES_SCREEN, HOME_SCREEN} from '../navigation/constants';
import Catalog from '../components/Catalog/Catalog';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import FloattingButton from '../components/FloatingButton/FloattingButton';
import {artInstitute, getMapCoords} from '../utils/methods';

type Props = NativeStackScreenProps<RootStackParamList, typeof HOME_SCREEN>;

const HomeScreen = ({route, navigation}: Props) => {
  const navigateFavorites = () => navigation.navigate(FAVORITES_SCREEN);

  const url = getMapCoords();

  const handlePress = useCallback(async () => {
    await Linking.openURL(url);
  }, [url]);
  return (
    <>
      <SafeAreaView>
        <HomeHeader
          onMapBtnPress={handlePress}
          address={artInstitute.address}
          city={artInstitute.city}
        />
        <Catalog screen={HOME_SCREEN} />
      </SafeAreaView>
      <FloattingButton
        mainIcon={{
          icon: 'favorite-outline',
          iconActive: 'favorite',
          onPress: navigateFavorites,
          isActive: false,
        }}
      />
    </>
  );
};

export default HomeScreen;
