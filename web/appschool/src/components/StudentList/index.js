import React, { Component } from 'react'

import api from '../../services/api'

class StudentList extends Component {
    
    state = {
        studentList: []
    }

    async componentWillMount() {
        const response = await api.get('/api/students')

        this.setState({ studentList:response.data })
    }

    render(){
        return(
            <ul className="list-group list-group-flush">
                {
                    this.state.studentList.map( student => (
                        <li className="list-group-item" key={ student.id }>{ student.studentName }</li>
                    ))
                }
            </ul>
            )
    }
}

export default StudentList