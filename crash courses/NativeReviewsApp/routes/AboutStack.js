import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';

const AboutStack = createStackNavigator();
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';

export default Navigator = () => {
  return (
    <AboutStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'lightblue'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <AboutStack.Screen
        name='About'
        component={About}
        options={{ headerTitle: () => <Header /> }}
      />
    </AboutStack.Navigator>
  );
};
