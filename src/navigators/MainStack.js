/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import HomeScreen from '../screens/Home';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
    <Stack.Screen name="About" component={AboutScreen} />
  </Stack.Navigator>
);
