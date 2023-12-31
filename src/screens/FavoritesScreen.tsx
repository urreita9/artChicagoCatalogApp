import React from 'react';
import {SafeAreaView} from 'react-native';
import {useStore} from '../app/store';
import {FAVORITES_SCREEN} from '../navigation/constants';
import Feed from '../components/Feed';
import {scale} from 'react-native-size-matters';
import Colors from '../utils/colors';
import IconMessage from '../components/IconMessage';
import useArtWorks from '../hooks/useArtWorks';

const FavoritesScreen = () => {
  const {error} = useArtWorks({screen: FAVORITES_SCREEN});
  const {favoriteArtWorks} = useStore();

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
