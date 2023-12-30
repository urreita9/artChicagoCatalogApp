import React from 'react';
import {ScrollView} from 'react-native';
import ArtWorkDetails from '../components/ArtWorkDetails';
import {useStore} from '../app/store';
import FloattingButton from '../components/FloatingButton';

const ArtWorkScreen = () => {
  const {artWorkDetails, addToFavorites, favoriteArtWorks} = useStore();

  return (
    <>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ArtWorkDetails artWork={artWorkDetails} />
      </ScrollView>
      <FloattingButton
        mainIcon={{
          icon: 'add',
          iconActive: 'add',
          onPress: null,
          isActive: false,
        }}
        iconOne={{
          icon: 'favorite-outline',
          iconActive: 'favorite',
          onPress: () => addToFavorites({artWorkId: artWorkDetails.id}),
          isActive: favoriteArtWorks.includes(artWorkDetails.id),
        }}
        iconTwo={{
          icon: 'share',
          iconActive: 'share',
          onPress: () => console.log('press share'),
          isActive: false,
        }}
        animate
      />
    </>
  );
};

export default ArtWorkScreen;
