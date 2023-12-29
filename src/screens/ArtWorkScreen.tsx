import React from 'react';
import {ScrollView} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainNavigator';
import {ARTWORK_SCREEN} from '../navigation/constants';
import ArtWorkDetails from '../components/ArtWorkDetails/ArtWorkDetails';
import FloattingButton from '../components/FloatingButton/FloattingButton';
import {useStore} from '../app/store';

type Props = NativeStackScreenProps<RootStackParamList, typeof ARTWORK_SCREEN>;

const ArtWorkScreen = ({route, navigation}: Props) => {
  const artWork = useStore(state => state.artWorkDetails);
  return (
    <>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ArtWorkDetails artWork={artWork} />
      </ScrollView>
      <FloattingButton
        onPressFav={() => console.log('press fav')}
        onPressShare={() => console.log('press share')}
      />
    </>
  );
};

export default ArtWorkScreen;
