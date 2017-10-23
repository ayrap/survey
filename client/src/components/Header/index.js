import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: this.props.isLoggedIn
    };
  }

  render() {
    let { authenticated } = this.state;

    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand">
          Survey
        </Link>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            {authenticated &&
              <li className="nav-item">
                <Link to="/logout" className="nav-link">
                  LOG OUT
                </Link>
              </li>
            }
            {!authenticated &&
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  SIGN UP
                </Link>
              </li>
            }
            {!authenticated &&
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  LOG IN
                </Link>
              </li>
            }
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;