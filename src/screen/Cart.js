import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import TabBar from '../component/tabBar/TabBar';
import {icon} from '../assets';
import {useRoute} from '@react-navigation/native';

export default function Cart({navigation}) {
  const route = useRoute();
  const data = route?.params?.info;
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={icon.menu} />
      </View>
      <TabBar
        data={data}
        onPressCart={() => {
          navigation.navigate('Payment', {data: data});
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  iconWrapper: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
  },
});
