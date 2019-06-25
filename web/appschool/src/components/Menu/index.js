import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { logout } from '../../services/auth'

import './styles.css'
import logo_img from '../../images/logoSchool.png'

class Menu extends Component{

  logoutHandler = () => {
    logout()
    this.props.history.push('/')
  }

  render(){
    return(
        <div className='menu-container'>
            <nav className='navbar navbar-light'>
              <Link className='navbar-brand text-white' to='/'>
                <img src={ logo_img } width='38' height='38' style={{ margin: '0 1rem 0' }} className='d-inline-block align-top shadow-lg' alt='' />
                  School App
              </Link>
    
              <div id='navbar'>
                <div className='list-group list-group-flush'>
                  <Link to='/dashboard' className='menu-item list-group-item list-group-item-action text-white'>Dashboard</Link>
                  <Link to='/students' className='menu-item list-group-item list-group-item-action text-white'>Students</Link>
                  <Link to='/classes' className='menu-item list-group-item list-group-item-action text-white'>Classes</Link>
                  <Link to='/news' className='menu-item list-group-item list-group-item-action text-white'>News</Link>
                  <Link to='/profile' className='menu-item list-group-item list-group-item-action text-white'>Profile</Link>
                </div>
              </div>
    
              <button className='btn btn-outline-danger my-2 my-sm-0' onClick={ this.logoutHandler }>LOGOUT</button>
    
            </nav>
        </div>
    )

  }
} 

export default withRouter(Menu)
