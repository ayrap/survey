import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import Header from '../Header';
import { history } from 'react-router';
class Login extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.refs.email.value === '' || this.refs.password.value === '') {
      alert('Email and password required');
    } else {
      axios.post('/api/sessions', { user: { email: this.refs.email.value, password: this.refs.password.value } })
      .then(response => { 
        this.props.loginUser(response.data);
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({error: error.response.data.error});
      });
    }
  }

  renderError(msg) {
    return (
      <div className='col-md-12'>
        <div className="alert alert-danger" role="alert">
          <strong>Error!</strong> <a className="alert-link">{msg}</a>
        </div>
      </div>
    );
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            { this.state.error && this.renderError(this.state.error) }
            <h2>Login</h2>
            <form onSubmit={this.handleSubmit}> 
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  ref="email"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  ref="password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form> 
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);