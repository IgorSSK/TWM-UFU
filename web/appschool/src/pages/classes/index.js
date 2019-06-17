import React from 'react'
import { Link } from 'react-router-dom'

import TabMenu from '../../components/TabMenu/index'
import StudentList from '../../components/StudentList/index'
import Register from '../../components/Register/index'
import History from '../../components/History/index'
import './styles.css'

const Classes = () => (
    <div className="body-container">
        
        <div class="header-container"></div>
        
        <div class="fluid-container border content-container">
            <TabMenu contentArray = { listContent }/>
        </div>
    </div>
)

const listContent = [{
    id: 'One',
    title: 'Lista Turmas',
    content: (<StudentList students= { [{id: 1, studentName:'Igor de Souza'}, {id: 2, studentName:'Pamella Yorrane'}] } />)
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

export default Classes