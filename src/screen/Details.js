import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {icon, image} from '../assets';
import CustomButton from '../component/CustomButton/CustomButton';
import PriceWithButton from '../component/priceWithButton/PriceWithButton';
export default function Details({navigation}) {
  const route = useRoute();
  const data = route?.params?.data;
  const total = data?.price * data?.quantity;

  const onPressCart = () => {
    navigation.navigate('Cart', {info: {data: data, totalPrice: total}});
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image.bgImage}
        style={{flex: 1}}
        resizeMode={'stretch'}>
        <View style={styles.mainWrapper}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.imgWrapper}>
              <Image
                source={data?.img}
                style={styles.img}
                resizeMode={'contain'}
              />
              <View style={styles.likeBtn}>
                {data?.isSelected ? (
                  <Image source={icon.like} />
                ) : (
                  <Image source={icon.disLike} />
                )}
              </View>
            </View>

            <View style={styles.priceWrapper}>
              <View>
                <Text style={styles.title}>Tomatoes Vine</Text>
                <Text style={styles.title}>Large (min 500g)</Text>
              </View>
              <View style={styles.logoWrapper}>
                <Text style={styles.key}>Sold by: </Text>
                <Image source={image.logo} style={styles.logo} />
                <Text style={styles.value}>Harris Farm Markets</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.key}>Status : </Text>
                <Text
                  style={[styles.key, {color: '#43B028', fontWeight: '600'}]}>
                  in Stock
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.key}>Categories : </Text>
                <Text style={styles.value}>Vegetables</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.title, {marginTop: 15}]}>
                  ${data?.price} /{' '}
                </Text>
                <Text
                  style={[
                    styles.value,
                    {marginTop: 18, textDecorationLine: 'none'},
                  ]}>
                  item
                </Text>
              </View>
              <View>
                <Text style={styles.info}>Information</Text>
                <View style={styles.line}></View>
                <Text style={styles.content}>
                  Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                  tellus. Phasellus viverra nulla ut metus varius laoreet.
                  Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                  augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                </Text>
                <PriceWithButton
                  buttonName={'go to cart'}
                  quantity={data?.quantity}
                  onPressCart={onPressCart}
                  total={total}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(256, 256, 256, 0.1)',
  },
  mainWrapper: {
    marginTop: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
  },
  imgWrapper: {
    height: 256,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
  },
  img: {
    height: '100%',
    width: '100%',
  },
  likeBtn: {
    position: 'absolute',
    right: 16,
    bottom: 23,
    height: 42,
    width: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  logoWrapper: {
    flexDirection: 'row',
  },
  logo: {
    height: 42,
    width: 42,
    marginTop: -8,
    marginHorizontal: 5,
  },
  priceWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    color: '#000',
    marginBottom: 16,
  },
  key: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#6D6B6B',
    marginBottom: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#0B0909',
    marginBottom: 16,
    textDecorationLine: 'underline',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#0B0909',
  },
  info: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 16,
    color: '#0B0909',
  },
  line: {
    marginTop: 5,
    height: 1,
    width: '100%',
    backgroundColor: 'rgba(215, 218, 220, 0.8);',
  },
  content: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#6D6B6B',
    textAlign: 'left',
    marginTop: 10,
  },
});
