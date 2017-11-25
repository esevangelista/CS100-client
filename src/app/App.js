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
import SignUp from '../features/signup/SignupContainer';
import Loading from '../features/auth/loader/Loading';
import NavBar from '../features/navbar/NavBar';
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
            <Route exact path="/signup" component={SignUp} />
            <Redirect to="/" />
          </Switch>
        ) : (
          <div>
            <NavBar logout={this.props.handleLogout} />
            <Switch>
              <Home />
            </Switch>
          </div>
        )}
      </Router>
    );
  }
}

export default App;
