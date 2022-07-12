import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './Style';
import CartItem from '../cartItem/CartItem';
import {image} from '../../assets';
import CartItemList from '../cartItemList/CartItemList';
import PriceWithButton from '../priceWithButton/PriceWithButton';

export default function CartComponent({details, onPressCart}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text
          style={{
            color: '#000',
            fontSize: 24,
            lineHeight: 32,
            fontWeight: '700',
          }}>
          My cart
        </Text>
        <Text
          style={{
            color: '#43B028',
            fontSize: 16,
            lineHeight: 24,
            fontWeight: '400',
          }}>
          clear all
        </Text>
      </View>
      <CartItem title={'Harris Farm Markets'} url={image.logo} />
      <CartItem title={'YCC Paultry'} url={image.cartItem} />
      <CartItemList details={details} onPressCart={onPressCart} />
      <PriceWithButton
        onPressCart={onPressCart}
        buttonName={'Confirm'}
        quantity={details?.data?.quantity}
        total={details?.totalPrice}
      />
    </View>
  );
}
