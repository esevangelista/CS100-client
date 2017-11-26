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
import NavBar from '../features/navbar/NavBarContainer';
import Home from '../features/home/HomeContainer';
import Profile from '../features/profile/ProfileContainer';
import EditProfile from '../features/editprofile/EditProfileContainer';

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
            <NavBar logout={this.props.handleLogout} image={this.props.user.imageUrl}/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/editprofile" component={EditProfile} />
              <Redirect to="/" />
            </Switch>
          </div>
        )}
      </Router>
    );
  }
}

export default App;
