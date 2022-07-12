import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  View,
} from 'react-native';
import React from 'react';
import {icon} from '../../assets';
import PriceWithButton from '../priceWithButton/PriceWithButton';

export default function CartItemList({details, onPressCart}) {
  const onPressDecrease = () => {
    return;
    // const array = [...itemList];
    // array.map((_, detailsIndex) => {
    //   return index === detailsIndex && array[index].quantity > 1
    //     ? (array[detailsIndex].quantity = array[detailsIndex].quantity - 1)
    //     : null;
    // });
    // setProductList(array);
  };
  const onPressIncrease = () => {
    // const array = [...itemList];
    // array.map((_, detailsIndex) => {
    //   return index === detailsIndex
    //     ? (array[detailsIndex].quantity = array[detailsIndex].quantity + 1)
    //     : null;
    // });
    // setProductList(array);
    return;
  };
  return (
    <>
      <ScrollView>
        <View
          style={{
            height: 125,
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: 60,
              marginVertical: 16,
            }}>
            <View
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
              }}>
              <Image
                source={details?.data?.img}
                style={{height: 45, width: 45, borderRadius: 22.5}}
                resizeMode={'contain'}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                padding: 8,
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 18,
                  lineHeight: 24,
                  fontWeight: '600',
                }}>
                ${details?.data?.price}
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 14,
                  lineHeight: 16,
                  fontWeight: '400',
                }}>
                {details?.data?.title}
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: 5}}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPressDecrease}
                style={{
                  height: 50,
                  width: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 25,
                  backgroundColor: '#43B028',
                }}>
                {details?.quantity === 1 ? (
                  <Image source={icon.delete} />
                ) : (
                  <Image source={icon.minus} />
                )}
              </TouchableOpacity>
              <View
                style={{
                  width: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 20, color: '#000'}}>
                  {details?.data?.quantity}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPressIncrease}
                style={{
                  height: 50,
                  width: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 25,
                  backgroundColor: '#43B028',
                }}>
                <Image source={icon.plusIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 68}}>
            <Image source={icon.pen} />
            <Text
              style={{
                marginLeft: 16,
                fontSize: 16,
                lineHeight: 16,
                fontWeight: '400',
              }}>
              Preferences
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
