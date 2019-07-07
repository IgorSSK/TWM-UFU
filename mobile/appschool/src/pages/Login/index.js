import React, { Component } from 'react'
import { View, Modal, Alert } from 'react-native'
import Button from '../../components/Button/index'
import FormInput from '../../components/FormInput/index'

import api from '../../services/api'
import { login, isAuthenticated } from '../../services/auth'

import styles from './style'

export default class Login extends Component {

  state = {
    loginType:-1,
    loginTitle:'',
    email:'',
    password:'',
    className:'',
    codeClass:''
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('loginTitle', ' ')
  })

  componentWillMount(){
    const loginType = this.props.navigation.getParam('loginType', -1)
    this.setState({ loginType })
  }

  render() {
    if(this.state.loginType === 1){
      return(
        <View style={ styles.container }>
          <View style={{ marginBottom:'25%' }}>
            <FormInput placeHolder='Código da Turma' inputType='email-address' onChange={ (className) => this.setState({ className }) } value={ this.state.className }/>
            <FormInput placeHolder='Senha de Acesso' onChange={ (codeClass) => this.setState({ codeClass }) } value={ this.state.codeClass }/>
          </View>
          <Button srcImage={ require('../../images/check.png') } btnText='Acessar Turma' onClick={ () => this.props.navigation.navigate('News') }/>
        </View>
      )
    } else {
      return (
        <View style={ styles.container }>
              <View style={{ marginBottom:'25%' }}>
                <FormInput placeHolder='E-mail' inputType='email-address' onChange={ (email) => this.setState({ email }) } value={ this.state.email }/>
                <FormInput placeHolder='Senha' onChange={ (password) => this.setState({ password }) } value={ this.state.password }/>
              </View>
            <Button srcImage={ require('../../images/check.png') } btnText='Efetuar Login' onClick={ () => this.signin() }/>
        </View>
      )
    }
  }

  signin = async () => {
    //this.state.loginType == 1 ?
    //this.props.navigation.navigate('MainMenu')
    try {

      const { email, password, loginType, className, codeClass } = this.state

      if(loginType === 1){

        //const { data, status } = await api.post('/', { className, codeClass })

        this.props.navigation.navigate('News')

      } else {

        //const { data, status } = await api.post('/auth', { email, password })
//
        //if(status === 200) {
//
        //  const { token } = data
//
        //  login(token)

          //if(isAuthenticated())
          this.props.navigation.navigate('MainMenu')

        //}
      }

    } catch (error) {

      Alert.alert('Sigin', 'Usuário não autenticado! Tente novamente!', [], { cancelable: true })

    }

  }
}
