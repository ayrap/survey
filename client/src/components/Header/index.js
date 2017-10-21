import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => (
  <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">Survey</a>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            SIGN UP
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            LOG IN
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header