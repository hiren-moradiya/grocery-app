import {Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CartComponent from '../cartComponent/CartComponent';

export default function TabBar({data, onPressCart}) {
  console.log('data',data)
  const Tab = createMaterialTopTabNavigator();
  const Cart = () => {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <CartComponent details={data} onPressCart={onPressCart} />
      </View>
    );
  };
  const Orders = () => {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text>past Orders</Text>
      </View>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarPosition: 'bottom',
        tabBarActiveTintColor: 'black',
        tabBarPressColor: 'transparent',
        tabBarIndicatorStyle: {
          backgroundColor: '#000',
        },
      }}>
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Orders" component={Orders} />
    </Tab.Navigator>
  );
}
