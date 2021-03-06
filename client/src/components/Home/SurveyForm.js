import React, { Component } from 'react';
import axios from 'axios';

import AnswerText from './AnswerText';

class SurveyForm extends Component {
  constructor(props) {
    super(props);
    this.renderQuestions = this.renderQuestions.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.parseAnswers = this.parseAnswers.bind(this);
    this.validateAnswers = this.validateAnswers.bind(this);
    this.state = {
      survey: null,
      name: null,
      answers: [],
      isSubmitted: false,
      withError: false
    };
  }

  componentDidMount() {
    this.getSurvey();
  }

  getSurvey() {
    let { survey_link } = this.props.match.params;
    axios.get(`/api/surveys/${survey_link}`,
    {
      headers: { 
        'AccessToken': localStorage.getItem('session')
      }
    })
    .then(({ data }) => {
      this.setState({survey: data});
    });
  }

  renderQuestions() {
    return this.state.survey.questions.map((question, index) => {
      return (
        <div key={index}>
          <AnswerText
            index={index}
            question={question}
            updateAnswer={this.updateAnswer}
          />
        </div>
      );
    });
  }

  parseAnswers(answers) {
    return answers.map((answer) => {
      return {
        answer: answer.answer,
        question_id: answer.question_id
      };
    });
  }

  validateAnswers() {
    let emptyAnswer = this.state.answers.filter((answer) => {
      return answer.answer == '';
    });

    if (emptyAnswer.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let questionCount = this.state.survey.questions.length;

    if ((questionCount > this.state.answers.length) || !this.validateAnswers()) {
      this.setState({withError: true});
      return false;
    } else {
      axios.post('/api/responses', { 
        response: {
          web_survey_id: this.state.survey.id, 
          respondent_attributes: {name: this.state.name},
          answers_attributes: this.parseAnswers(this.state.answers)
        }
      },
      {
        headers: { 
          'AccessToken': localStorage.getItem('session')
        }
      })
      .then(({ data }) => {
        this.setState({
          isSubmitted: true,
          withError: false
        });
      });
    }
  }

  handleNameChange(e) {
    e.preventDefault();
    this.setState({name: e.target.value});
  }

  updateAnswer(index, answer, question_id) {
    let { answers } = this.state;
    answers[index] = {
      answer: answer,
      question_id: question_id
    };
    this.setState({answers});
  }

  renderError() {
    return (
      <div className='col-md-12'>
        <div className="alert alert-danger" role="alert">
          <strong>Oh snap!</strong> <a className="alert-link">Please complete the survey!</a>
        </div>
      </div>
    );
  }
  render() {
    let { survey, isSubmitted, withError } = this.state;
    return (
      <div className="container survey-form">
      <div className="row">
        { withError && this.renderError()}
        { isSubmitted ?
          <div className="jumbotron">
            <h2 className="display-4">Thank you for completing the survey.</h2>
          </div>
        :
          <div className="col-md-5">
            <h2>Answer Survey</h2>
            <form onSubmit={this.handleSubmit} className="questions"> 
              <div className="form-group">
                <label>Title: {survey && survey.title}</label>
                <div className="form-group">
                  <label>Respondent Name (optional)</label>
                  <input
                    type="text"
                    className="form-control"
                    ref="name"
                    onChange={this.handleNameChange}
                  />
                </div>
              </div>
              {survey && this.renderQuestions()}
                <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>  
          </div>
        }
      </div>
    </div>
    );
  }
}

export default SurveyForm;