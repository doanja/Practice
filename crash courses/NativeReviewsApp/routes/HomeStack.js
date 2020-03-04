import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const HomeStack = createStackNavigator();

export default Navigator = () => {
  return (
    <NavigationContainer initialRouteName='Home'>
      <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={Home} options={{ title: 'Home' }} />
        <HomeStack.Screen
          name='ReviewDetails'
          component={ReviewDetails}
          options={{ title: 'Review' }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};
