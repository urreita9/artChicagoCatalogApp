import React from 'react';
import {ScrollView} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainStackNavigator';
import {ARTWORK_SCREEN} from '../navigation/constants';
import ArtWorkDetails from '../components/ArtWorkDetails/ArtWorkDetails';
import FloattingButton from '../components/FloatingButton/FloattingButton';
import {useStore} from '../app/store';

type Props = NativeStackScreenProps<RootStackParamList, typeof ARTWORK_SCREEN>;

const ArtWorkScreen = ({route, navigation}: Props) => {
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
