import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';

require('./styles/styles.less');

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={LoginPage} />
        <Route path='/about' component={AboutPage} />
      </Router>
    )
  }
}

export default App;
