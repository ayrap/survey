import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import NewSurveyForm from './components/Home/NewSurveyForm';
import SurveyForm from './components/Home/SurveyForm';
import Signup from './components/Signup';
import Logout from './components/Logout';

class App extends Component {

  constructor(props) {
    super(props);
    this.loginUser = this.loginUser.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.state = {user: null};
  }

  loginUser(user) {
    this.setState({user});
    localStorage['session'] = localStorage.getItem('session') || user.access_token;
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
        <Switch>
          <Route exact path='/' render={() => (
            this.isLoggedIn() ? (
              <Home isLoggedIn={this.isLoggedIn} />
            ) : (
              <Redirect to="/login"/>
            ))}
          />
          <Route exact path='/surveys/new' render={() => (
            this.isLoggedIn() ? (
              <NewSurveyForm  isLoggedIn={this.isLoggedIn} />
            ) : (
              <Redirect to="/login"/>
            ))}
          />
          <Route path='/login' render={() => (
            <Login loginUser={this.loginUser} />
          )}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/surveys/:survey_link' component={SurveyForm}/>
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;

