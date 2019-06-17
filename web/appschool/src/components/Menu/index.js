import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import logo_title from '../../images/logoText.png'
import logo_img from '../../images/logoSchool.png'

const Menu = () => (
    <div className="menu-container">
        <nav className="navbar navbar-light">
          <Link className="navbar-brand text-white" to="#">
            <img src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top shadow-lg" alt="" />
              School App
          </Link>

          <div id="navbar">
            <div className="list-group list-group-flush">
              <Link to="/dashboard" className="menu-item list-group-item list-group-item-action text-white">Dashboard</Link>
              <Link to="/students" className="menu-item list-group-item list-group-item-action text-white">Alunos</Link>
              <Link to="/classes" className="menu-item list-group-item list-group-item-action text-white">Turmas</Link>
              <Link to="/news" className="menu-item list-group-item list-group-item-action text-white">Noticias</Link>
              <Link to="/profile" className="menu-item list-group-item list-group-item-action text-white">Perfil</Link>
            </div>
          </div>

          <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">
            LOGOUT
          </button>

        </nav>
    </div>
)

export default Menu