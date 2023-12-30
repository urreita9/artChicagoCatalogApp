import React, {useCallback} from 'react';
import {SafeAreaView, Linking} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HOME_SCREEN} from '../navigation/constants';
import Catalog from '../components/Catalog';
import HomeHeader from '../components/HomeHeader';
import {artInstitute, getMapCoords} from '../utils/methods';
import {RootBottomParamList} from '../navigation/BottomTabNavigator';

type Props = NativeStackScreenProps<RootBottomParamList, typeof HOME_SCREEN>;

const HomeScreen = ({route, navigation}: Props) => {
  const url = getMapCoords();

  const handlePress = useCallback(async () => {
    await Linking.openURL(url);
  }, [url]);
  return (
    <SafeAreaView>
      <HomeHeader
        onMapBtnPress={handlePress}
        address={artInstitute.address}
        city={artInstitute.city}
      />
      <Catalog screen={HOME_SCREEN} />
    </SafeAreaView>
  );
};

export default HomeScreen;
