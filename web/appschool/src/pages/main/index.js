import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Menu from '../../components/Menu/index'
import Home from '../../components/Home/index'
 
import api from '../../services/api'
import './styles.css'


export default class Main extends Component {
    render(){
        return (
            <div className='page-container'>
                <Menu/>
                <div className='content-container'>
                    <Home/>
                </div>
            </div>
        )
    }
}
