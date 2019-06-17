import React from 'react'

const Register = () => (
    <form>
        <div className='form-row'>
            <div className='form-group col-md-6'>
              <label for='inputName'>Nome Aluno</label>
              <input type='text' className='form-control' id='inputName' placeholder='Nome Aluno'/>
            </div>
            <div className='form-group col-md-auto'>
                <label for='inputPhone'>Telefone do Aluno</label>
                <input type='text' className='form-control' id='inputPhone' placeholder='(99) 99999-9999'/>
            </div>
        </div>

        <div className='form-row'>
            <div className='form-group col-md-6'>
              <label for='inputMotherName'>Nome da Mãe</label>
              <input type='text' className='form-control' id='inputMotherName' placeholder='Nome da Mãe'/>
            </div>
            <div className='form-group col-md-auto'>
                <label for='inputMotherPhone'>Telefone da Mãe</label>
                <input type='text' className='form-control' id='inputMotherPhone' placeholder='(99) 99999-9999'/>
            </div>
        </div>

        <div className='form-row'>
            <div className='form-group col-md-6'>
              <label for='inputFatherName'>Nome do Pai</label>
              <input type='text' className='form-control' id='inputFatherName' placeholder='Nome do Pai'/>
            </div>
            <div className='form-group col-md-auto'>
                <label for='inputFatherPhone'>Telefone do Pai</label>
                <input type='text' className='form-control' id='inputFatherPhone' placeholder='(99) 99999-9999'/>
            </div>
        </div>

        <div className='form-group'>
          <label for='inputAddress'>Endereço</label>
          <input type='text' className='form-control' id='inputAddress' placeholder='Avenida Palmeiras, 123'/>
        </div>
        <button type='submit' className='btn btn-primary'>Cadastrar</button>
    </form>
)

export default Register