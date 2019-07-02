import React from 'react';

import { View, Text, TouchableOpacity  } from 'react-native';
import styles from './styles';

const TapButton = ({ keyId, onTap, state }) =>
<View style={ styles.container } key={ keyId }>
  <TouchableOpacity style={ state ? styles.buttonP : styles.buttonF } onPress={ onTap }>
    <Text style={ state ? styles.textP : styles.textF }>{ state ? 'P' : 'F' }</Text>
  </TouchableOpacity>
</View>

export default TapButton
