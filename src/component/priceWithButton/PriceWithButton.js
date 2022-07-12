import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import Custombutton from '../CustomButton/CustomButton';
import {icon} from '../../assets';

export default function PriceWithButton({
  quantity,
  total,
  onPressCart,
  buttonName,
}) {
  return (
    <View style={styles.wrapper}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.item}>{quantity} items</Text>
        <Text style={styles.total}>$ {total}</Text>
      </View>
      <View>
        <Custombutton
          buttonName={buttonName}
          icon={icon.rightArrow}
          buttonStyle={styles.button}
          buttontextStyle={styles.buttontext}
          onPress={onPressCart}
        />
      </View>
    </View>
  );
}
