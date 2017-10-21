import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>Sign Up</h2>
            <form> 
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
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

export default Signup