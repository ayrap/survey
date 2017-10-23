import React, { Component } from 'react';
import axios from 'axios';

import SurveyItem from './SurveyItem';
import { Link } from 'react-router-dom';

class SurveyList extends Component {
  constructor(props) {
    super(props);
    this.renderSurveys = this.renderSurveys.bind(this);
  }

  renderSurveys(surveys) {
    return surveys.map(survey => {
      return (
        <SurveyItem
          key={survey.id}
          survey={survey} />
      );
    });
  }

  render() {
    let { surveys } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>List of Surveys</h4>
          </div>
          <div className="col-md-6">
            <Link to='/surveys/new' className="btn btn-primary btn-sm">Add New</Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Shareable Link</th>
              </tr>
            </thead>
            {surveys ? this.renderSurveys(surveys) : <tr><td>No surveys yet. Please add.</td></tr>}
          </table>
        </div>
      </div>
    );
  }
}

export default SurveyList;
