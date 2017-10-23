import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header';
import SurveyList from './SurveyList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surveys: []
    };
  }

  componentDidMount() {
    this.getSurveys();
  }

  getSurveys() {
    axios.get('/api/surveys',
    {
      headers: { 
        'AccessToken': localStorage.getItem('session')
      }
    })
    .then(({ data }) => {
      this.setState({surveys: data});
    });
  }

  render() {
    let { isLoggedIn } = this.props;
    return (
      <div>
        <Header isLoggedIn={isLoggedIn} />
        <SurveyList surveys={this.state.surveys}/>
      </div>
    );
  }
}

export default Home;
