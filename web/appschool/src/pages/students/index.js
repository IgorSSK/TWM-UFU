import React, { Component } from 'react'

import api from '../../services/api'
import TabMenu from '../../components/TabMenu/index'
import StudentList from '../../components/StudentList/index'
import Register from '../../components/StudentRegister/index'
import History from '../../components/StudentHistory/index'
import './styles.css'

class Students extends Component {

    state = {
        students: []
    }

    listContent = [{
        id: 'One',
        title: 'List Student',
        content: (<StudentList students= { this.state.students } />)
    },
    {
        id: 'Two',
        title:'Register Student',
        content: (<Register/>)
    },
    {
        id: 'Three',
        title: 'Student History',
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
                <TabMenu contentArray = { this.listContent }/>
            </div>
        </div>
        )
    }
}

export default Students