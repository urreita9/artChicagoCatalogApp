import React, {useCallback} from 'react';
import {SafeAreaView, Linking, View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HOME_SCREEN} from '../navigation/constants';
import HomeHeader from '../components/HomeHeader';
import {artInstitute, getMapCoords} from '../utils/methods';
import {RootBottomParamList} from '../navigation/BottomTabNavigator';
import Feed from '../components/Feed';
import useArtWorks from '../hooks/useArtWorks';
import {scale} from 'react-native-size-matters';
import Colors from '../utils/colors';
import IconMessage from '../components/IconMessage';

const HomeScreen = () => {
  const {error} = useArtWorks({screen: HOME_SCREEN});
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

        <Feed screen={HOME_SCREEN} />
      </SafeAreaView>
      {error && (
        <IconMessage
          icon={{
            name: 'error-outline',
            size: scale(60),
            color: Colors.primary,
          }}
          message={error}
        />
      )}
    </>
  );
};

export default HomeScreen;
