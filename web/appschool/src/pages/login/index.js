import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
import api from '../../services/api'
import './styles.css'


export default class Login extends Component {

  state = {
    login: { email:'', password:'' }
  } 

  mailInputHandler = email => {
    this.setState({ login:{ email } })
  }

  passInputHandler = password => {
    this.setState({ login:{ password } })
  }

  render() {
    return (
      <div className='login'>
        <form onSubmit={ this.signin }>
          <h3>Login</h3>
          <div>
            <label>E-mail</label>
            <input type='email' name='email' onInput={ this.mailInputHandler }/>
          </div>
          <div>
            <label>Password</label>
            <input type='password' onInput={ this.mailInputHandler } />
          </div>
          <div className='login-button'>
           <a onClick={ this.signin }>Login</a> 
          </div>
        </form>
      </div>
    )
  }

  signin = async () => {
    api.post('/auth', {
      "email":"igorsouza.96@hotmail.com",
      "password":"123456"
    }).then(response => console.log(response)).catch(err => console.log(err))

    var res = await api.get('/api/students')

    console.log(res)
  }
}
