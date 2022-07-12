import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {icon, image} from '../assets';
import {useRoute} from '@react-navigation/native';

export default function Payment({navigation}) {
  const route = useRoute();
  const data = route.params?.data?.data;
  const price = route.params?.data?.totalPrice;
  const total = price - 2;
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 50,
            backgroundColor: '#fff',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={icon?.leftArrow} style={{margin: 16}} />
          </TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              marginLeft: 60,
              fontSize: 16,
              fontWeight: '600',
              lineHeight: 24,
              color: '#000',
            }}>
            Order Aug 5, 2021, 3:20 PM
          </Text>
        </View>
        <View style={{width: '100%', height: 130, padding: 16}}>
          <Image source={image.shoppingImg} style={{width: '100%'}} />
        </View>
        <Text style={{marginLeft: 16, marginTop: 20, fontSize: 16}}>
          Receipt №345271
        </Text>
        <View style={{padding: 16}}>
          <Text style={styles.title}>Order summary</Text>
          <View>
            <View style={styles.wrapper}>
              <Text style={styles.text}>Items</Text>
              <Text style={styles.commonText}>{data?.quantity}</Text>
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.text}>Order placed</Text>
              <Text style={styles.commonText}>5 Aug, 2021, 2:00 PM</Text>
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.text}>Order delivered</Text>
              <Text style={styles.commonText}>5 Aug, 2021, 2:00 PM</Text>
            </View>
          </View>
          <Text style={styles.title}>Billing info</Text>
          <Text style={{marginBottom: 20}}>1226 Univercity Road, 45</Text>

          <View>
            <Text style={styles.title}>Order summary</Text>
            <View style={styles.wrapper}>
              <Text style={styles.text}>Subtotal</Text>
              <Text style={styles.commonText}>${price}</Text>
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.text}>Tax</Text>
              <Text style={styles.commonText}>$0</Text>
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.text}>Delivery fee</Text>
              <Text style={styles.commonText}>$1.00</Text>
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.text}>Discount</Text>
              <Text style={styles.commonText}>- $2.00</Text>
            </View>
          </View>

          <View style={styles.wrapper}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total} u>{`${total}`}</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.title}>Payment method</Text>

            <View
              style={{
                marginTop: 23,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={image.visa} />
              <Text>.... 3425</Text>
            </View>

            <View style={[styles.wrapper, {marginVertical: 10}]}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home');
                }}
                style={styles.input}>
                <Image source={icon.leftArrow} style={{marginRight: 10}} />
                <Text style={styles.name}>back to shops</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  alert('order tracked');
                }}
                style={[styles.input, {borderColor: '#43B028'}]}>
                <Text style={[styles.name, {color: '#43B028'}]}>
                  Track Orders
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commonText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#000',
    marginBottom: 16,
  },
  text: {
    marginBottom: 16,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    color: '#000',
  },
  total: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    color: '#000',
  },
  input: {
    flexDirection: 'row',
    width: '45%',
    height: 60,
    borderWidth: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 24,
    color: '#000',
  },
});
