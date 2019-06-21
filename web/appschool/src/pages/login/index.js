import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
 
import api from '../../services/api'
import './styles.css'


class Login extends Component {

  state = {
    email:'', 
    password:'',
    error:''
  }

  render() {
    return (
      <div className='login'>
        <form onSubmit={ this.signinHandler }>
          <h3>Login</h3>
          { this.state.error && <p>{ this.state.error }</p> }
          <div>
            <label>E-mail</label>
            <input type='email' placeholder='E-mail' name='email' onChange={ e =>  this.setState({ email: e.target.value }) }/>
          </div>
          <div>
            <label>Password</label>
            <input type='password' placeholder='Password' onChange={ e =>  this.setState({ password: e.target.value }) } />
          </div>
          <button className='login-button' type='submit'>Login</button>
        </form>
      </div>
    )
  }

  signinHandler = async event => {
    event.preventDefault()

    const { email, password } = this.state

    if(email === '') this.setState({ error:'Please, fill the e-mail field!' })
    if(password === '') this.setState({ error:'Please, fill the password field!' })

    try {
      
      const response = await api.post('/sigin', { email, password })
      console.log(response.data)
      this.props.history.push('dashboard')

    } catch (error) {
      this.setState({ error })
    }
  }
}

export default withRouter(Login)