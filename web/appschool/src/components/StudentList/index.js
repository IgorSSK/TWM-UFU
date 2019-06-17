import React from 'react'

import './styles.css'

const StudentList = ({ students }) => {
    
    return(
        <ul className="list-group list-group-flush">
            {
                students.map( student => (
                    <li className="list-group-item" key={ student.id }>{ student.studentName }</li>
                ))
            }
        </ul>
        )
}

export default StudentList