import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  View,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderWithLogo from '../component/HeaderWithLogo/HeaderWithLogo';
import {categoryList, itemList} from '../constant';
import {icon} from '../assets';
import Product from '../component/Product/Product';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {
  const [isFollowed, setIsFollowed] = useState(false);
  const [list, setList] = useState(categoryList);
  const [productList, setProductList] = useState(itemList);
  const [title, setTitle] = useState('Vegetables');

  useEffect(() => {
    AsyncStorage.getItem('likedProductList').then(res => {
      let ary = JSON.parse(res);
      if (ary) {
        setProductList(ary);
      }
    });
  }, []);

  const onPressFollow = () => {
    setIsFollowed(!isFollowed);
  };
  const onPressArrow = () => {
    return;
  };
  const onPressCategory = (item, index) => {
    setTitle(item?.title);
    const array = [...categoryList];
    array.map((_, detailsIndex) => {
      return index === detailsIndex
        ? (array[detailsIndex].isSelected = !array[detailsIndex].isSelected)
        : (array[detailsIndex].isSelected = false);
    });
    setList(array);
  };
  const onPressIcon = index => {
    const array = [...itemList];

    array.map((_, detailsIndex) => {
      return index === detailsIndex
        ? (array[detailsIndex].isSelected = !array[detailsIndex].isSelected)
        : null;
    });
    setProductList(array);
    AsyncStorage.setItem('likedProductList', JSON.stringify(array));
  };
  const onPressItem = item => {
    navigation.navigate('Details', {data: item});
  };

  const onPressAddToCart = index => {
    const array = [...itemList];

    array.map((_, detailsIndex) => {
      return index === detailsIndex
        ? (array[detailsIndex].isQuantity = !array[detailsIndex].isQuantity)
        : null;
    });
    setProductList(array);
  };

  const onPressDecrease = index => {
    const array = [...itemList];

    array.map((_, detailsIndex) => {
      return index === detailsIndex && array[index].quantity > 1
        ? (array[detailsIndex].quantity = array[detailsIndex].quantity - 1)
        : null;
    });
    setProductList(array);
  };
  const onPressIncrease = index => {
    const array = [...itemList];

    array.map((_, detailsIndex) => {
      return index === detailsIndex
        ? (array[detailsIndex].quantity = array[detailsIndex].quantity + 1)
        : null;
    });
    setProductList(array);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.mainWrapper}>
        <HeaderWithLogo
          onPressFollow={onPressFollow}
          isFollowed={isFollowed}
          onPressArrow={onPressArrow}
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.Wrapper}>
            {list.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.7}
                  onPress={() => onPressCategory(item, index)}
                  style={[
                    styles.categoryWrapper,
                    {backgroundColor: item?.isSelected ? 'green' : '#fff'},
                  ]}>
                  <Text
                    style={[
                      styles.title,
                      {color: item?.isSelected ? '#fff' : '#000'},
                    ]}>
                    {item?.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        <View style={styles.filterWrapper}>
          <Text style={styles.name}>{title || 'Vegetables'}</Text>
          <View style={styles.filter}>
            <Image source={icon.filter} />
            <Text style={styles.filterText}>Filter and sort</Text>
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          data={productList}
          renderItem={({item, index}) => {
            return (
              <View style={{flex: 1, paddingTop: 5}}>
                <Product
                  url={item?.img}
                  isLiked={item?.isSelected}
                  onPressIcon={() => onPressIcon(index)}
                  onPressItem={() => onPressItem(item)}
                  title={item?.title}
                  price={item?.price}
                  onPressAddToCart={() => onPressAddToCart(index)}
                  isQuantity={item?.isQuantity}
                  quantity={item?.quantity}
                  onPressDecrease={() => onPressDecrease(index)}
                  onPressIncrease={() => onPressIncrease(index)}
                />
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Wrapper: {
    flexDirection: 'row',
    height: 45,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  categoryWrapper: {
    marginRight: 24,
    padding: 10,
    height: 45,
    borderRadius: 30,
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
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#fff',
  },
  filterWrapper: {
    flexDirection: 'row',
    marginVertical: 5,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    color: '#000',
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#000',
  },
});
