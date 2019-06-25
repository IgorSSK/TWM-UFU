import React, { Component } from 'react'

import api from '../../services/api'

class Register extends Component{
  state = {
    className: '',
    module: '',
    codeClass: ''
  }

  registerHandler = async event => {
    event.preventDefault()

    const response = await api.post('/api/classes', this.state)

  }

  render(){
    return(
      <form onSubmit={ this.registerHandler }>
          <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor='inputName'>Class Name</label>
                <input type='text' className='form-control' id='inputName' placeholder='Class Name' onChange={ event => this.setState({ className: event.target.value }) }/>
              </div>
              <div className='form-group col-md-auto'>
                  <label htmlFor='inputModule'>Module</label>
                  <input type='text' className='form-control' id='inputModule' placeholder='Module' onChange={ event => this.setState({ module: event.target.value }) }/>
              </div>
          </div>

          <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor='inputCode'>Class Code</label>
                <input type='text' className='form-control' id='inputCode' placeholder='TRM1A2019' onChange={ event => this.setState({ codeClass: event.target.value }) }/>
              </div>
          </div>
          <button type='submit' className='btn btn-primary'>Cadastrar</button>
      </form>
    )
  }
}

export default Register