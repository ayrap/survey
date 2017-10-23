import React, { Component } from 'react';

class SurveyItem extends Component {
  constructor(props) {
    super(props);
    this.renderResponses = this.renderResponses.bind(this);
  }

  renderResponses(answers) {
    return answers.map((answer) => {
      return (
        <div key={answer.id}>
          {answer.question}
          <strong> {answer.answer}</strong>
        </div>
      );
    });
  }

  render() {
    let { survey } = this.props;
    return (
      <tbody>
        <tr>
          <td>{survey.id}</td>
          <td>{survey.title}</td>
          <td>{`${window.location.host}/surveys/${survey.slug}`}</td>
        </tr>
        {survey.responses.length > 0 ?
          survey.responses.map((response) => {
            return (
              <tr key={response.id} className="bg-info">
                <td colSpan='3'>
                  <label>Name of Respondent: {response.respondent}</label>
                  {this.renderResponses(response.answers)}
                </td>
              </tr> 
            );
          })
          :
          <tr><td colSpan='3'>No respondents yet.</td></tr>}
      </tbody>
    );
  }
}

export default SurveyItem;