import React from 'react';
import {Linking, ScrollView} from 'react-native';
import ArtWorkDetails from '../components/ArtWorkDetails';
import {useStore} from '../app/store';
import FloattingButton from '../components/FloatingButton';

const ArtWorkScreen = () => {
  const {artWorkDetails, addToFavorites, favoriteArtWorks} = useStore();

  const buyTickets = async () => {
    await Linking.openURL(`https://sales.artic.edu/admissions`);
  };

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
          icon: 'museum',
          iconActive: 'museum',
          onPress: buyTickets,
          isActive: false,
        }}
        animate
      />
    </>
  );
};

export default ArtWorkScreen;
