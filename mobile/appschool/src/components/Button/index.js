import React from 'react';

import { View, Text, Image, TouchableOpacity  } from 'react-native';
import styles from './style';

const Button = ({ btnText, onClick, srcImage }) =>
<View style={ styles.container }>
  <TouchableOpacity style={ styles.button } onPress={ onClick }>
    <Image style={ styles.image } source={ srcImage } resizeMode='contain'/>
    <Text style={ styles.text }>{ btnText }</Text>
  </TouchableOpacity>
</View>

export default Button
