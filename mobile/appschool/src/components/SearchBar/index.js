import React from 'react';

import { View, TouchableOpacity, Image } from 'react-native';
import FormInput from '../../components/FormInput/index'

import styles from './style';

const SearchBar = () => (
  <View style= { styles.container }>
    <FormInput placeHolder='Código do Aluno' inputType='email-address' onChange={ (className) => this.setState({ className }) } value={ null } />
    <TouchableOpacity>
      <Image style={ styles.image } source={ require('../../images/ic_search.png') } resizeMode='contain' />
    </TouchableOpacity>
  </View>
)

export default SearchBar;
