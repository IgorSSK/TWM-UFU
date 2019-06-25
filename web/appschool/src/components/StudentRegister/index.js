import React, { Component } from 'react'

import api from '../../services/api'

class Register extends Component{
  state = {
    studentName: '',
    studentPhone: '',
    status: 1,
    firstResponsibleName: '',
    firstResponsiblePhone: '',
    secondResponsibleName: '',
    secondResponsiblePhone: '',
    address: '',
  }

  registerHandler = async event => {
    event.preventDefault()

    const response = await api.post('/api/students', this.state)

    console.log(response)
  }

  render(){
    return(
      <form onSubmit={ this.registerHandler }>
          <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor='inputName'>Nome Aluno</label>
                <input type='text' className='form-control' id='inputName' placeholder='Nome Aluno' onChange={ event => this.setState({ studentName: event.target.value }) }/>
              </div>
              <div className='form-group col-md-auto'>
                  <label htmlFor='inputPhone'>Telefone do Aluno</label>
                  <input type='text' className='form-control' id='inputPhone' placeholder='(99) 99999-9999' onChange={ event => this.setState({ studentPhone: event.target.value }) }/>
              </div>
          </div>

          <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor='inputMotherName'>Nome da Mãe</label>
                <input type='text' className='form-control' id='inputMotherName' placeholder='Nome da Mãe' onChange={ event => this.setState({ firstResponsibleName: event.target.value }) }/>
              </div>
              <div className='form-group col-md-auto'>
                  <label htmlFor='inputMotherPhone'>Telefone da Mãe</label>
                  <input type='text' className='form-control' id='inputMotherPhone' placeholder='(99) 99999-9999' onChange={ event => this.setState({ firstResponsiblePhone: event.target.value }) }/>
              </div>
          </div>

          <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor='inputFatherName'>Nome do Pai</label>
                <input type='text' className='form-control' id='inputFatherName' placeholder='Nome do Pai' onChange={ event => this.setState({ secondResponsibleName: event.target.value }) }/>
              </div>
              <div className='form-group col-md-auto'>
                  <label htmlFor='inputFatherPhone'>Telefone do Pai</label>
                  <input type='text' className='form-control' id='inputFatherPhone' placeholder='(99) 99999-9999' onChange={ event => this.setState({ secondResponsiblePhone: event.target.value }) }/>
              </div>
          </div>

          <div className='form-group'>
            <label htmlFor='inputAddress'>Endereço</label>
            <input type='text' className='form-control' id='inputAddress' placeholder='Avenida Palmeiras, 123' onChange={ event => this.setState({ address: event.target.value }) }/>
          </div>
          <button type='submit' className='btn btn-primary'>Cadastrar</button>
      </form>
    )
  }
}

export default Register