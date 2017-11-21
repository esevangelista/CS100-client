import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './App.css';

import Login from '../features/auth/login/LoginContainer';
import Loading from '../features/auth/loader/Loading';
import Home from '../features/home/Home';

class App extends Component {
  componentDidMount() {
    this.props.handleGetSession();
  }

  render() {
    return (
      <Router history={withRouter}>
        {this.props.isGettingSession ? (
          <Loading />
        ) : !this.props.user ? (
          <Switch>
            <Route exact path="/" component={Login} />
            <Redirect to="/" />
          </Switch>
        ) : (
          <div>
            <Home />
          </div>
        )}
      </Router>
    );
  }
}

export default App;
