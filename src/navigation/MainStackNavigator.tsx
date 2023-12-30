import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ARTWORK_SCREEN, HOME_BOTTOM_TAB} from './constants';
import ArtWork from '../screens/ArtWorkScreen';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';

export type RootStackParamList = {
  [HOME_BOTTOM_TAB]: undefined;
  [ARTWORK_SCREEN]: undefined;
};
export type MainStackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <NavigationContainer>
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
