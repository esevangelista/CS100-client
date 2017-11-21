import { connect } from 'react-redux';
import Login from './Login';

import { login, changeEmail, changePassword } from '../duck';

const mapStateToProps = state => {
  const { email, password, hasTriedLoggingIn, loginError } = state.auth;

  return {
    email,
    password,
    hasTriedLoggingIn,
    loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChangeEmail: email => {
      dispatch(changeEmail(email));
    },
    handleChangePassword: password => {
      dispatch(changePassword(password));
    },
    handleLogin: credentials => {
      dispatch(login(credentials));
    }
  }
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;