import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import Details from '../screen/Details';
import Cart from '../screen/Cart';
import Payment from '../screen/Payment';

export default function AppNavigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Details'} component={Details} />
        <Stack.Screen name={'Cart'} component={Cart} />
        <Stack.Screen name={'Payment'} component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
