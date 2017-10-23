import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
class Logout extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    localStorage.removeItem('session');
    this.props.history.push('/');
  }
  
  render() {
    return (
      <div className="container">
        <div className="starter-template">
          <h1>You've successfully logged out.</h1>
          <p className="lead">Please come back soon!</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Logout);