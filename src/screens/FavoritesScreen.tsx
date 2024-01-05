import React from 'react';
import {Pressable, SafeAreaView, View} from 'react-native';
import {useStore} from '../app/store';
import {ARTWORK_SCREEN, FAVORITES_SCREEN} from '../navigation/constants';
import Feed, {RenderItem} from '../components/Feed';
import {scale} from 'react-native-size-matters';
import Colors from '../utils/colors';
import IconMessage from '../components/IconMessage';
import useArtWorks from '../hooks/useArtWorks';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootBottomParamList} from '../navigation/BottomTabNavigator';
import {RootStackParamList} from '../navigation/MainStackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Card from '../components/Card';
import {CompositeScreenProps} from '@react-navigation/native';

type FavoriteScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootBottomParamList, typeof FAVORITES_SCREEN>,
  NativeStackScreenProps<RootStackParamList>
>;
const FavoritesScreen = ({navigation}: FavoriteScreenProps) => {
  const {onItemPress, error} = useArtWorks({
    screen: FAVORITES_SCREEN,
    navigateTo: () => {
      navigation.navigate(ARTWORK_SCREEN);
    },
  });
  const {favoriteArtWorks} = useStore();

  const renderItem = ({item, index}: RenderItem) => (
    <Pressable onPress={() => onItemPress({item, index})}>
      <Card
        artWork={{
          ...item,
          image: item.thumbnail?.lqip || '',
          altImage: item.thumbnail?.alt_text || '',
          description: item.artist_title,
        }}>
        <Card.Image />
        <View style={{flex: 1}}>
          <Card.Title />
          <Card.Description />
        </View>

        <Card.IconButton />
      </Card>
    </Pressable>
  );

  return error ? (
    <IconMessage
      icon={{
        name: 'error-outline',
        size: scale(60),
        color: Colors.primary,
      }}
      message={error}
    />
  ) : (
    <SafeAreaView style={{flex: 1}}>
      {favoriteArtWorks.length ? (
        <Feed screen={FAVORITES_SCREEN} renderItem={renderItem} />
      ) : (
        <IconMessage
          icon={{name: 'heart-broken', size: scale(60), color: Colors.primary}}
          message="No favorites :("
          animate
        />
      )}
    </SafeAreaView>
  );
};

export default FavoritesScreen;
