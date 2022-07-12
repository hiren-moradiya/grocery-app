import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import {icon} from '../../assets';
import CustomButton from '../CustomButton/CustomButton';
export default function Product({
  url,
  isLiked,
  title,
  price,
  onPressIcon,
  onPressItem,
  onPressAddToCart,
  isQuantity,
  onPressDecrease,
  onPressIncrease,
  quantity,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPressItem}
        style={styles.wrapper}>
        <Image source={url} />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={onPressIcon}
          style={styles.icon}>
          {isLiked ? (
            <Image source={icon.like} />
          ) : (
            <Image source={icon.disLike} />
          )}
        </TouchableOpacity>
        <View style={styles.priceWrapper}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View>
            <Text style={styles.price}>
              ${price}
              {'   '}
              <Text style={styles.subPrice}>($10.29/KG)</Text>
            </Text>
          </View>
        </View>
        {!isQuantity ? (
          <CustomButton
            buttonName={'+   add to cart'}
            buttonStyle={styles.button}
            buttontextStyle={styles.buttontext}
            onPress={onPressAddToCart}
          />
        ) : (
          <View style={styles.quantityWrapper}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={onPressDecrease}
              style={styles.add}>
              {quantity === 1 ? (
                <Image source={icon.delete} />
              ) : (
                <Image source={icon.minus} />
              )}
            </TouchableOpacity>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 20, color: '#000'}}>{quantity}</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={onPressIncrease}
              style={styles.add}>
              <Image source={icon.plusIcon} />
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}
