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
    main: () => <Dashboard/>
  },
  {
    index: 2,
    path: '/students',
    main: () => <Students/>
  },
  {
    index: 3,
    path: '/classes',
    main: () => <Classes/>
  }
]

function Routes() {
  return (
    <Router>

      <div className='main-container'>

        <Menu/>

        {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}

      </div>
      
    </Router>
  );
}


export default Routes
