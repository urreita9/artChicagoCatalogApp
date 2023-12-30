import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {useStore} from '../app/store';
import {FAVORITES_SCREEN} from '../navigation/constants';
import Feed from '../components/Feed';

const FavoritesScreen = () => {
  const {favoriteArtWorks} = useStore();

  return (
    <SafeAreaView style={{flex: 1}}>
      {favoriteArtWorks.length ? (
        <Feed screen={FAVORITES_SCREEN} />
      ) : (
        <View>
          <Text>Favorites is empty!</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default FavoritesScreen;
