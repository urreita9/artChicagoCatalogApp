import React, {createRef} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ARTWORK_SCREEN, HOME_BOTTOM_TAB} from './constants';
import ArtWork from '../screens/ArtWorkScreen';
import {
  NavigationContainer,
  NavigationContainerRef,
  NavigationProp,
} from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';

export type RootStackParamList = {
  [HOME_BOTTOM_TAB]: undefined;
  [ARTWORK_SCREEN]: undefined;
};
export type MainStackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const navigationRef =
  createRef<NavigationContainerRef<RootStackParamList>>();

const MainNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name={HOME_BOTTOM_TAB}
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name={ARTWORK_SCREEN} component={ArtWork} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
