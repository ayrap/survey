import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

class App extends Component {

  constructor(props) {
    super(props);
    this.loginUser = this.loginUser.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.state = {user: null};
  }

  loginUser(user) {
    this.setState({user});
    localStorage['session'] = user.access_token;
  }

  isLoggedIn() {
    if (localStorage.getItem('session')) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={() => (
              this.isLoggedIn() ? (
                <Home />
              ) : (
                <Redirect to="/login"/>
              ))}/>
          <Route path='/login' render={() => (
            <Login loginUser={this.loginUser} />
          )}/>
          <Route path='/register' component={Signup}/>
        </Switch>
      </div>
    )
  }
}

export default App;

