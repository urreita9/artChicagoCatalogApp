import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FAVORITES_SCREEN, HOME_SCREEN} from './constants';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../utils/colors';
import {Text} from 'react-native';

export type RootBottomParamList = {
  [HOME_SCREEN]: undefined;
  [FAVORITES_SCREEN]: undefined;
};

const Tab = createBottomTabNavigator<RootBottomParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              color={focused ? Colors.primary : Colors.grey}
              size={26}
              name="home"
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? Colors.primary : Colors.grey}}>
              {HOME_SCREEN}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={FAVORITES_SCREEN}
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              color={focused ? Colors.primary : Colors.grey}
              size={26}
              name="favorite"
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? Colors.primary : Colors.grey}}>
              {FAVORITES_SCREEN}
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
