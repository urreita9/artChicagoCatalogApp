import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ARTWORK_SCREEN, CATALOG_SCREEN} from './constants';
import CatalogScreen from '../screens/CatalogScreen';
import ArtWork from '../screens/ArtWorkScreen';

export type RootStackParamList = {
  [CATALOG_SCREEN]: undefined;
  [ARTWORK_SCREEN]: {artWorkId: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={CATALOG_SCREEN} component={CatalogScreen} />
      <Stack.Screen name={ARTWORK_SCREEN} component={ArtWork} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
