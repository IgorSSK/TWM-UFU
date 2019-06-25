import React, { Component } from 'react'

import api from '../../services/api'
import TabMenu from '../../components/TabMenu/index'
import ClassList from '../../components/ClassList/index'
import Register from '../../components/ClassRegister/index'
import History from '../../components/ClassHistory/index'
import './styles.css'

class Classes extends Component {

    state = {
        classes: []
    }

    listContent = [{
        id: 'One',
        title: 'List Classes',
        content: (<ClassList Class= { this.state.classes } />)
    },
    {
        id: 'Two',
        title:'Register Class',
        content: (<Register/>)
    },
    {
        id: 'Three',
        title: 'Class History',
        content: (<History/>)
    }
    ]

    classList = async () => {
        const response = await api.get('')

        console.log(response.data)
    }

    componentWillMount(){
        this.classList()    
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

export default Classes