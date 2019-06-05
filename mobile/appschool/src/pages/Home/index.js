import React, { Component } from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'

import styles from './style'
import Button from '../../components/Button/index'

export default class Home extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerRight: (
    <TouchableWithoutFeedback
      onPress={ () => navigation.navigate('Login', { loginType: 0, loginTitle: 'Acesso Restrito' }) }>
      <Image style={ styles.imgRight } source={ require('../../images/login_adm.png') } resizeMode='contain'/>
    </TouchableWithoutFeedback>
    )
  })

  render(){
    return (
      <View style={ styles.container }>
          <Image style={ styles.logo }
                 source={ require('../../images/main-logo.png') }
                 resizeMode='contain'/>
          <Button srcImage={ require('../../images/unlock.png') } btnText='Acesse sua Turma' onClick={ () => this.props.navigation.navigate('Login', { loginType: 1, loginTitle: 'Acesse sua Turma' }) }/>
          <Text style={ styles.frase }>
            { `"A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original"\n (Albert Einstein)` }
          </Text>
      </View>
    )
  }
}
