import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './styles/app.scss';
import './styles/login.css'
import { Router, Route, browserHistory } from 'react-router'
import { createBrowserHistory } from "history"
import App from './components/App';
import Login from './components/Login';

ReactDOM.render(
(<Router history={ createBrowserHistory() }>
    <Route path='/' component={ Login }/>
    <Route path='/home' component={ App }/>
</Router>)
, document.getElementById('root'));

serviceWorker.unregister();
