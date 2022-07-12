import {
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {icon, image} from '../../assets';
import {styles} from './Styles';
export default function HeaderWithLogo({
  onPressFollow,
  isFollowed,
  onPressArrow,
  style,
}) {
  return (
    <View style={[styles.container, style]}>
      <ImageBackground
        source={image.bgImage}
        imageStyle={{opacity: 0.5}}
        style={styles.ImageBackground}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity activeOpacity={0.7} onPress={onPressArrow}>
            <Image source={icon.leftArrow} />
          </TouchableOpacity>
          <View style={styles.logoWrapper}>
            <Image
              source={image.logo}
              style={styles.logo}
              resizeMode={'contain'}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPressFollow}
            style={styles.followBtn}>
            {!isFollowed && <Image source={icon.plusIcon} />}
            <Text style={styles.btnText}>
              {isFollowed ? 'Followed' : 'Follow'}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Harris Farm Markets</Text>
        <Text style={styles.subText}>Castle Hill, Sydney</Text>
        <Text style={styles.info}>View Info</Text>
        <View style={styles.inputWrapper}>
          <Image source={icon.search} />
          <TextInput
            placeholder="Search Harris Farm Markets..."
            style={styles.input}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
