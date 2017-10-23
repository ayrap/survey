import React, { Component } from 'react';

class AnswerText extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.props.updateAnswer(this.props.index, e.target.value, this.props.question.id);
  }
  

  render() {
    let { question } = this.props;
    return (
      <p>
        <label>{question.title}</label>
        <input
          type="text"
          className="form-control"
          ref="answer"
          onChange={this.handleChange}
        />
        {question.is_custom === true ? <small>* This question was added by the administrator. </small> : ''}
      </p>
    );
  }
}

export default AnswerText;
