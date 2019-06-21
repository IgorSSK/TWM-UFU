import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import TabMenu from '../../components/TabMenu/index'
import StudentList from '../../components/StudentList/index'
import Register from '../../components/Register/index'
import History from '../../components/History/index'
import './styles.css'

class Classes extends Component {

    state = {
        students: []
    }

    listContent = [{
        id: 'One',
        title: 'Lista Turmas',
        content: (<StudentList students= { this.state.students } />)
    },
    {
        id: 'Two',
        title:'Cadastrar Turma',
        content: (<Register/>)
    },
    {
        id: 'Three',
        title: 'Historico Turmas',
        content: (<History/>)
    }
    ]

    studentsList = async () => {
        const response = await api.get('')

        console.log(response.data)
    }

    componentWillMount(){
        this.studentsList()
    }

    render(){
        return(
            <div className="body-container">
        
            <div class="header-container"></div>
            
            <div class="fluid-container border content-container">
                <TabMenu contentArray = { listContent }/>
            </div>
        </div>
        )
    }
}

export default Classes