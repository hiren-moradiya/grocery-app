import {Text, View, Image} from 'react-native';
import React from 'react';

export default function CartItem({url, title}) {
  return (
    <View
      style={{
        height: 125,
        width: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: 48,
          marginVertical: 16,
        }}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
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
            source={url}
            style={{height: 45, width: 45, borderRadius: 22.5}}
            resizeMode={'contain'}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', padding: 8}}>
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              lineHeight: 24,
              fontWeight: '600',
            }}>
            {title}
          </Text>
          <Text>Delivery fee: $1.00</Text>
        </View>
        <View
          style={{
            width: 80,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              lineHeight: 24,
              fontWeight: '600',
            }}>
            $5.00
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginLeft: 16,
          color: '#000',
          fontSize: 16,
          lineHeight: 16,
          fontWeight: '400',
        }}>
        add
        <Text style={{color: '#43B028'}}> $14.50 </Text>
        for free delivery
      </Text>
    </View>
  );
}
