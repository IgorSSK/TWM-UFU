import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Login from './pages/login/index'
import Dashboard from './pages/dashboard/index'
import Students from './pages/students/index'
import Classes from './pages/classes/index'
import Menu from './components/Menu/index'

const routes = [
  {
    index: 0,
    path: ['/login', '/'],
    exact: true,
    main: () => <Login/> 
  },
  {
    index: 1,
    path: '/dashboard',
    main: () => <div className='main-container'><Menu/><Dashboard/></div>
  },
  {
    index: 2,
    path: '/students',
    main: () => <div className='main-container'><Menu/><Students/></div>
  },
  {
    index: 3,
    path: '/classes',
    main: () => <div className='main-container'><Menu/><Classes/></div>
  }
]

function Routes() {
  return (
    <Router>

        {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}

    </Router>
  );
}


export default Routes
