import {Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './Styles';

export default function Custombutton({
  onPress,
  buttonName,
  buttonStyle,
  buttontextStyle,
  icon
}) {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
        <View style={[styles.container, buttonStyle]}>
          <Text style={[styles.buttonText, buttontextStyle]}>{buttonName}</Text>
          <Image source={icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
