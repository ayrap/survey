import React, { Component } from 'react';
class QuestionText extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.props.updateQuestion(this.props.index, e.target.value);
  }

  render() {
    return (
      <li key={this.props.index}>
        <input
          type="text"
          className="form-control"
          value={this.props.question}
          onChange={this.handleChange}
        />
      </li>
    );
  }
}

export default QuestionText;
