//import React from 'react';
//
import React, { Component } from 'react'
import { View, TextInput } from 'react-native';

import styles from './style'

export default class FormInput extends Component {

  state = {
    formOnFocus: false,
    inputValue: ''
  }

  render() {
    return(
    <TextInput
          ref={ this.props.ref }
          style={ styles.formFocusOut }
          placeholder={ this.props.placeHolder }
          placeholderTextColor='#FFF'
          autoCapitalize='none'
          onChangeText={ this.props.onChange }
          value={ this.props.value }
          underlineColorAndroid='transparent'
          keyboardType={ this.props.inputType }
          secureTextEntry={ true }
          returnKeyType='next'
    />)
  }
}
