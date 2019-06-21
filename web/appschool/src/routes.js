import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Login from './pages/login/index'
import Dashboard from './pages/dashboard/index'
import Students from './pages/students/index'
import Classes from './pages/classes/index'
import Menu from './components/Menu/index'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render={ props => 
    isAuthenticaded() ? (<Component { ...props } />) : (<Redirect to={{ pathname:'/', state: { from: props.location }}} />)
  } 
  />
)

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={ () => <Login/> } />

      <PrivateRoute path='/dashboard' component={ () => <div className='main-container'><Menu/><Dashboard/></div> } />

      <PrivateRoute path='/students' component={ () => <div className='main-container'><Menu/><Students/></div> } />

      <PrivateRoute path='classes' component={ () => <div className='main-container'><Menu/><Classes/></div> } />

    </Switch>
  </Router>
)


export default Routes
