import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
import api from '../../services/api'
import './styles.css'


export default class Login extends Component {

  static navigationOptions = {
    title:'Login'
  }

  componentDidMount(){
    this.signin()
  }

  render() {
    return (
      <div className='login'>
        <form>
          <h3>Login</h3>
          <div>
            <label>E-mail</label>
            <input type='email' name='email' />
          </div>
          <div>
            <label>Password</label>
            <input type='password' />
          </div>
          <div className='login-button'>
            <Link to='/home'>Login</Link>
          </div>
        </form>
      </div>
    )
  }

  signin = async () => {
    //let response = await api.get('/')
    //console.warn(response)
  }
}
