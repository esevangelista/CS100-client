import React, { Component } from 'react';
import './App.css';

import Login from '../features/auth/Login';
import Signup from '../features/signup/Signup';

class App extends Component {
  render() {
    return (
      <div>
      {/* <Login /> */}
      <Signup />
      </div>
    );
  }
}

export default App;
