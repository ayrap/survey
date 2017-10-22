import React, { Component } from 'react';

class AnswerForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>Respond to Survey</h2>
            <form onSubmit={this.handleSubmit} className="questions"> 
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  ref="title"
                />
              </div>
              <div className="form-group">
                <label>Questions</label>
                <ol>
                  {this.getDefaultQuestions()}
                  {this.renderQuestions()}
                </ol>
              </div>
              <a className="btn btn-primary btn-question" onClick={this.handleClick}>Add Another Question</a>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form> 
          </div>
        </div>
     </div>
    );
  }
}

export default AnswerForm;
