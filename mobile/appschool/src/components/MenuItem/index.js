import React from 'react';

import { View, Text, Image, TouchableWithoutFeedback  } from 'react-native';
import styles from './styles';

const MenuItem = ({ btnText, onClick, srcImage }) =>
<View style={ styles.container }>
  <TouchableWithoutFeedback onPress={ onClick }>
    <View style={ styles.button } >
      <Image style={ styles.image } source={ srcImage } resizeMode='cover'/>
      <Text style={ styles.text }>{ btnText }</Text>
    </View>
  </TouchableWithoutFeedback>
</View>

export default MenuItem
