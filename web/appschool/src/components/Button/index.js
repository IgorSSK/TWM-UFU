import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const Button = ({ btnText }) =>
<View style={ styles.container }>
  <TouchableOpacity style={ styles.button } onPress={ () => console.warn('Clicked')}>
    <Text style={ styles.text }>{ btnText }</Text>
  </TouchableOpacity>
</View>

export default Button;
