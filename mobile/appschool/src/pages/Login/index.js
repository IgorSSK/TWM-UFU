import React, { Component } from 'react'
import { View, Modal } from 'react-native'

import api from '../../services/api'
import styles from './style'
import Button from '../../components/Button/index'
import FormInput from '../../components/FormInput/index'

export default class Login extends Component {

  state = {
    loginType:-1,
    loginTitle:''
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('loginTitle', ' ')
  })

  componentWillMount(){
    const loginType = this.props.navigation.getParam('loginType', -1)
    this.setState({ loginType })
    //this.signin()
  }

  render() {
    if(this.state.loginType === 1){
      return(
        <View style={ styles.container }>
          <View style={{ marginBottom:'25%' }}>
            <FormInput placeHolder='Código da Turma' inputType='email-address' />
            <FormInput placeHolder='Senha de Acesso'/>
          </View>
          <Button srcImage={ require('../../images/check.png') } btnText='Acessar Turma' onClick={ () => this.props.navigation.navigate('News') }/>
        </View>
      )
    }
    return (
      <View style={ styles.container }>
            <View style={{ marginBottom:'25%' }}>
              <FormInput placeHolder='E-mail' inputType='email-address' />
              <FormInput placeHolder='Senha'/>
            </View>
          <Button srcImage={ require('../../images/check.png') } btnText='Efetuar Login' onClick={ () => this.props.navigation.navigate('MainMenu') }/>
      </View>
    )
  }

  signin = async () => {
    let response = await api.get('/sayHello')
    console.warn(response.data)
  }
}
