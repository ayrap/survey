import React, { Component } from 'react';

class SurveyItem extends Component {
  render() {
    let { survey } = this.props;

    return (
      <tr>
        <td>{survey.id}</td>
        <td>{survey.title}</td>
        <td>{`${window.location.host}/${survey.slug}`}</td>
      </tr>
    );
  }
}

export default SurveyItem;