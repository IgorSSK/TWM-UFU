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

  componentDidMount(){
    //this.setState(this.props.navigation.getParam('loginType', -1))
    //this.signin()
  }

  render() {
    return (
      <View style={ styles.container }>
            <View style={{ marginBottom:'25%' }}>
              <FormInput placeHolder='exemplo@email.com' inputType='email-address' />
              <FormInput placeHolder='********'/>
            </View>
          <Button srcImage={ require('../../images/check.png') } btnText='Efetuar Login'/>
      </View>
    )
  }

  signin = async () => {
    let response = await api.get('/sayHello')
    console.warn(response.data)
  }
}
