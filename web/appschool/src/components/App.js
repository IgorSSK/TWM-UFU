import React from 'react';
import '../styles/offcanvas.css'
import logo_title from '../images/logoText.png'
import logo_img from '../images/logoSchool.png'

const App = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg fixed-top navbar-dark bg-dark'>
            <a href='#'>
                <img className='logo-image' src={ logo_img } alt='Logo Image'/>
                <img className='logo-text' src={ logo_title } alt='Logo Text'/>
            </a>
            <p className='mr-auto headerTitle'>School App</p>
            <button className='navbar-toggler p-0 border-0' type='button' data-toggle='offcanvas'>
              <span className='navbar-toggler-icon'></span>
            </button>
        </nav>
        <div className='navbar-collapse offcanvas-collapse border-right' id='navbarsExampleDefault'>
            <div className='list-group list-group-flush'>
                    <a href='#' className='list-group-item list-group-item-action bg-dark text-white'>Dashboard</a>
                    <a href='#' className='list-group-item list-group-item-action bg-dark text-white'>Shortcuts</a>
                    <a href='#' className='list-group-item list-group-item-action bg-dark text-white'>Overview</a>
                    <a href='#' className='list-group-item list-group-item-action bg-dark text-white'>Events</a>
                    <a href='#' className='list-group-item list-group-item-action bg-dark text-white'>Profile</a>
                    <a href='#' className='list-group-item list-group-item-action bg-dark text-white'>Status</a>
            </div>
        </div>
    </div>
  );
}

export default App;
