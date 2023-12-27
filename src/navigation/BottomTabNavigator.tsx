import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainNavigator from './MainNavigator';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MainNavigator} />
        <Tab.Screen name="Favorites" component={MainNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
