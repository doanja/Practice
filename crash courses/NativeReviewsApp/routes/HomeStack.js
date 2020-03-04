import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const HomeStack = createStackNavigator();

export default Navigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'lightblue'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <HomeStack.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Game Zone'
        }}
      />
      <HomeStack.Screen
        name='ReviewDetails'
        component={ReviewDetails}
        options={{
          title: 'Review Details'
        }}
      />
    </HomeStack.Navigator>
  );
};
