import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ARTWORK_SCREEN, FAVORITES_SCREEN, HOME_SCREEN} from './constants';
import ArtWork from '../screens/ArtWorkScreen';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

export type RootStackParamList = {
  [HOME_SCREEN]: undefined;
  [FAVORITES_SCREEN]: undefined;
  [ARTWORK_SCREEN]: undefined;
};
export type MainStackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={HOME_SCREEN}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={FAVORITES_SCREEN} component={FavoritesScreen} />
        <Stack.Screen name={ARTWORK_SCREEN} component={ArtWork} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
