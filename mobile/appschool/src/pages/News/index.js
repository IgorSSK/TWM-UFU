import React, { Component } from 'react'

import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles';

export default class News extends Component {

  state = {
    title:'',
    body:'',
    author:'',
    createdAt:'',
    numberOfLines:4,
    show:false
  }

  render() {
    return(
    <View style={ styles.container }>
      <View style={ styles.header_container }>
        <Text style={ styles.title }>Title</Text>
      </View>
      <View style={ styles.body_container }>
        <Text style={ styles.body } numberOfLines={ this.state.numberOfLines }>Part of Body Part of Body Part of Body Part of Body Part of Body Part
        VPart of Body Part of Body Part of Body Part of Body Part of Body PartPart of Body Part of Body Part of Body Part of Body Part of Body PartPart of Body Part of Body Part of Body Part of Body Part of Body Part of Body Part of Body Part of Body Part of Body Part of BodyPart of Body Part of Body Part of Body Part of Body</Text>
      </View>
      <View>
        <TouchableOpacity style={ styles.button_container } onPress={ () => this.setState({ numberOfLines: !this.state.show ? 8 : 4, show:!this.state.show }) }>
          <Text style={ styles.buttonText }>{ !this.state.show ? 'Read more' : 'Minimize' }</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }
}
