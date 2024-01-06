import React, {useCallback} from 'react';
import {SafeAreaView, Linking, Pressable} from 'react-native';
import {ARTWORK_SCREEN, HOME_SCREEN} from '../navigation/constants';
import HomeHeader from '../components/HomeHeader';
import {artInstitute, getMapCoords} from '../utils/methods';
import Feed, {RenderItem} from '../components/Feed';
import useArtWorks from '../hooks/useArtWorks';
import {scale} from 'react-native-size-matters';
import Colors from '../utils/colors';
import IconMessage from '../components/IconMessage';
import Card from '../components/Card';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainStackNavigator';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootBottomParamList} from '../navigation/BottomTabNavigator';
import {CompositeScreenProps} from '@react-navigation/native';

type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootBottomParamList, typeof HOME_SCREEN>,
  NativeStackScreenProps<RootStackParamList>
>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const {onArtworkItemPress, error} = useArtWorks({
    screen: HOME_SCREEN,
  });

  const url = getMapCoords();

  const handlePress = useCallback(async () => {
    await Linking.openURL(url);
  }, [url]);

  const renderItem = ({item, index}: RenderItem) => (
    <Pressable
      onPress={() =>
        onArtworkItemPress({
          item,
          index,
          navigateTo: () => navigation.navigate(ARTWORK_SCREEN),
        })
      }>
      <Card
        artWork={{
          ...item,
          image: item.thumbnail?.lqip || '',
          altImage: item.thumbnail?.alt_text || '',
          description: item.artist_title,
        }}>
        <Card.Image />
        <Card.Title />
        <Card.IconButton />
      </Card>
    </Pressable>
  );

  return (
    <>
      <SafeAreaView>
        <HomeHeader
          onMapBtnPress={handlePress}
          address={artInstitute.address}
          city={artInstitute.city}
        />

        <Feed screen={HOME_SCREEN} renderItem={renderItem} />
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
