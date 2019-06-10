import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import logo_title from '../../images/logoText.png'
import logo_img from '../../images/logoSchool.png'

const Menu = () => (
    <nav className='menu-container'>
        <div className='header-menu'>
            <Link to='/home'>
                <img className='logo-image' src={ logo_img } alt='Logo Image'/>
                <img className='logo-text' src={ logo_title } alt='Logo Text'/>
            </Link>

        </div>
        <div className='body-menu'>
            <div className='navbar-collapse offcanvas-collapse' id='navbarsExampleDefault'>
                <div className='list-group'>
                        <a href='#' className='list-group-item list-group-item-action'>Dashboard</a>
                        <a href='#' className='list-group-item list-group-item-action'>Shortcuts</a>
                        <a href='#' className='list-group-item list-group-item-action'>Overview</a>
                        <a href='#' className='list-group-item list-group-item-action'>Events</a>
                        <a href='#' className='list-group-item list-group-item-action'>Profile</a>
                        <a href='#' className='list-group-item list-group-item-action'>Status</a>
                </div>
            </div>

        </div>
        <div className='footer-menu'>
            <Link className='btn-danger' to='/logout'>
                <span>Log-out</span>
            </Link>
        </div>
    </nav>
)

export default Menu