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
        onPressFav={() => addToFavorites({artWorkId: artWorkDetails.id})}
        onPressShare={() => console.log('press share')}
        itemIsFav={favoriteArtWorks.includes(artWorkDetails.id)}
      />
    </>
  );
};

export default ArtWorkScreen;
