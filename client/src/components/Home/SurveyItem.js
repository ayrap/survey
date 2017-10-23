import React, { Component } from 'react';

class SurveyItem extends Component {
  constructor(props) {
    super(props);
    this.renderResponses = this.renderResponses.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      showResponses: false
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({showResponses: !this.state.showResponses});
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

  renderRecords() {
    return (
      this.props.survey.responses.length > 0 ?
        this.props.survey.responses.map((response) => {
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
        <tr><td colSpan='3'>No respondents yet.</td></tr>
      );
  }

  render() {
    let { survey } = this.props;
    let { showResponses } = this.state;
    
    return (
      <tbody>
        <tr onClick={this.handleClick}>
          <td>{survey.id}</td>
          <td>{survey.title}</td>
          <td>{`${window.location.host}/surveys/${survey.slug}`}</td>
        </tr>
        {showResponses && this.renderRecords()}
      </tbody>
    );
  }
}

export default SurveyItem;