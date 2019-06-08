import React, { Component } from 'react';
import { createBrowserHistory  } from 'history';
import logoImg from '../images/logoSchool.png'
const history = createBrowserHistory()

class Login extends Component{

    constructor(props){
        super(props);
    }

    envia(event){
        event.preventDefault();

        history.push('/home')
    }

    render(){
        return (
            <div className="text-center">
                <form className="form-signin">
                    <img className="mb-4" src={ logoImg } alt="" width="100" height="100"/>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="true" autofocus="true" name="Email"/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="true" name="Password"/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={ this.envia.bind(this) } style={{'background-color': 'rgba(1, 1, 1, 0.5)', 'border-color':'white', 'margin-top':'25px'}}>Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2019</p>
                </form>
            </div>
        )
    }

}

export default Login;