import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AboutStack from './AboutStack';
import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();

export default function RootDrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeStack} />
        <Drawer.Screen name='About' component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
