import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/login/index'
import Main from './pages/main/index'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={['/','/login']} component={ Login } />
      <Route path='/home' component={ Main } />
    </Switch>
  </BrowserRouter>
)

export default Routes