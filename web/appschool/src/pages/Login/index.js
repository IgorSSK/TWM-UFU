import React, { Component } from 'react'
import { View, Text } from 'react-native'

import api from '../../services/api'
import styles from './style'
import Button from '../../components/Button/index'


export default class Login extends Component {

  static navigationOptions = {
    title:'Login'
  }

  componentDidMount(){
    this.signin()
  }

  render() {
    return (
      <View style={ styles.container }>
        <Button btnText='Acesse sua Turma'/>
      </View>
    )
  }

  signin = async () => {
    //let response = await api.get('/')
    //console.warn(response)
  }
}
