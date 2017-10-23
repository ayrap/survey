import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import Header from '../Header';

import QuestionText from './QuestionText';

const MAX_CUSTOM_QUESTIONS = 2;
const default_questions = [
  'What is your favorite book?',
  'Who is your favorite band?',
  'What is your favorite food?'
];

class NewSurveyForm extends Component {
  constructor(props) {
    super(props);
    this.renderQuestions = this.renderQuestions.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.state = {
      questions: []
    };
  }

  getDefaultQuestions() {
    return default_questions.map(question => {
      return (
        <li key={question}>
          <input
            readOnly
            type="text"
            className="form-control"
            value={question}
          />
        </li>
        );
    });
  }

  updateQuestion(index, question) {
    let { questions } = this.state;
    questions[index] = question;
    this.setState({questions});
  }

  renderQuestions() {
    return this.state.questions.map((question, index) => {
      return (
        <div key={index}>
          <QuestionText
            index={index}
            question={question}
            updateQuestion={this.updateQuestion}
          />
        </div>
      );
    });
  }

  handleClick() {
    let { questions } = this.state;
    if (questions.length < MAX_CUSTOM_QUESTIONS) {
      questions.push('');
      this.setState({questions});
    }
  }

  parseQuestions(questions, is_custom) {
    return questions.map((question) => {
      return {
        title: question,
        is_custom: is_custom
      };
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let default_questions_hash = this.parseQuestions(default_questions);
    let questions_hash = this.parseQuestions(this.state.questions, true);

    let questions = [...default_questions_hash, ...questions_hash];
    
    axios.post('/api/surveys', { 
      web_survey: {
        title: this.refs.title.value, 
        questions_attributes: questions 
      }
    },
    {
      headers: { 
        'AccessToken': localStorage.getItem('session')
      }
    })
    .then(() => {
      this.props.history.push('/');
    });
  }

  render() {
    let { isLoggedIn } = this.props;

    return (
      <div>
        <Header isLoggedIn={isLoggedIn} />
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h2>Add Survey</h2>
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
                <a className="btn btn-outline-primary btn-question" onClick={this.handleClick}>Add Another Question</a>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NewSurveyForm);
