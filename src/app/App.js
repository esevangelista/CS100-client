import React, { Component } from 'react';
import './App.css';

import Login from '../features/auth/Login';
import SignupContainer from '../features/signup/SignupContainer';

class App extends Component {
  render() {
    return (
      <div>
      {/* <Login /> */}
      <SignupContainer />
      </div>
    );
  }
}

export default App;
