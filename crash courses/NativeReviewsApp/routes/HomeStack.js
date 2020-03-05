import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';

const HomeStack = createStackNavigator();

export default Navigator = ({ navigation }) => {
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
        options={{ headerTitle: () => <Header navigation={navigation} /> }}
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
