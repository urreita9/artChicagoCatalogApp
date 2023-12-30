import React from 'react';
import {SafeAreaView} from 'react-native';
import {useStore} from '../app/store';
import {FAVORITES_SCREEN} from '../navigation/constants';
import Feed from '../components/Feed';
import {scale} from 'react-native-size-matters';
import Colors from '../utils/colors';
import IconMessage from '../components/IconMessage';

const FavoritesScreen = () => {
  const {favoriteArtWorks} = useStore();

  return (
    <SafeAreaView style={{flex: 1}}>
      {favoriteArtWorks.length ? (
        <Feed screen={FAVORITES_SCREEN} />
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
