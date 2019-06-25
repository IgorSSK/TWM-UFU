import React, { Component } from 'react'

import api from '../../services/api'

class History extends Component {
    
    state = {
        id:'',
        student: {}
    }

    searchHandler = async e => {
        e.preventDefault()

        const response = await api.get(`/api/students/${ this.state.id }`)

        this.setState({ student: response.data })

    }

    
    render(){
        const { studentName, firstResponsibleName, secondResponsibleName, address, classId, amountFaults } = this.state.student

        if(Object.values(this.state.student).length > 0)
        {
            return(
            <div className='history-container card' style={{ width: '100%', alignItems:'center' }}>
                <div style={{ width:'100%', padding: '.5rem 2rem 0' }}>
                    <button type="button" class="close float-right" aria-label="Close" onClick={ () => this.setState({ id:'', student:{} }) }>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <img className='card-img-top' style={{ width: '100px',height: '100px','margin-top': '25px' }} src='https://fluxoconsultoria.poli.ufrj.br/wp-content/uploads/2019/01/graduate-diploma.png' alt='Card image cap'/>
                <div className='card-body'>
                    <h5 className='card-title'>{ studentName }</h5>
                    <p className='card-text'>{ `Belongs to the class ${ classId } and haves ${ amountFaults } faults on this period` }</p>
                </div>
                <ul className='list-group list-group-flush'>
                    <div className='row'>
                        <li className='list-group-item'>Mother's name:</li>
                        <li className='list-group-item'>{ firstResponsibleName }</li>
                    </div>
                    <div className='row'>
                        <li className='list-group-item'>Father's name:</li>
                        <li className='list-group-item'>{ secondResponsibleName }</li>
                    </div>
            
                </ul>
            </div>
            )
        } 
        else
        {
            return(
                <div class="row justify-content-center" style={{ width: '100%', alignItems:'center' }}>
                    <div class="col-12 col-md-10 col-lg-8">
                        <form class="card-sm" onSubmit={ this.searchHandler }>
                            <div class="card-body row no-gutters align-items-center">
                                <div class="col-auto">
                                    <i class="fas fa-search h4 text-body"></i>
                                </div>
                                <div class="col">
                                    <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search student by ID" onChange={ e => this.setState({ id: e.target.value }) }/>
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-lg btn-success" type="submit">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }

    }
    
}

export default History