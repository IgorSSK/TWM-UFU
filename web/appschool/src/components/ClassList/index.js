import React, { Component } from 'react'

import api from '../../services/api'

class ClassList extends Component {
    
    state = {
        classList: []
    }

    async componentWillMount() {
        const response = await api.get('/api/classes')

        this.setState({ classList:response.data })
    }

    render(){
        return(
            <ul className='list-group list-group-flush'>
                {
                    this.state.classList.map( Class => (
                        <li className='list-group-item' key={ Class.id }>{ Class.className }</li>
                    ))
                }
            </ul>
            )
    }
}

export default ClassList