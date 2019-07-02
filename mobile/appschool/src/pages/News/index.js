import React, { Component } from 'react'

import { View, Text, TouchableHighlight } from 'react-native'

import styles from './styles';

export default class News extends Component {
  render() {
    return(
    <View style={ styles.container }>
      <Text style={ styles.title }>Title</Text>
      <Text style={ styles.body }>Part of Body</Text>
      <TouchableHighlight style={ styles.button }>
        <Text style={ styles.buttonText }>Read more</Text>
      </TouchableHighlight>
    </View>
    )
  }
}
