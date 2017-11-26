import * as Api from '../../api';
import { handle } from 'redux-pack';

// Action Types
const LOGIN = 'AUTH/LOGIN';
const LOGOUT = 'AUTH/LOGOUT';
const GET_SESSION = 'AUTH/GET_SESSION';
const CHANGE_EMAIL = 'AUTH/CHANGE_EMAIL';
const CHANGE_PASSWORD = 'AUTH/CHANGE_PASSWORD';

// Action Creators
export const getSession = () => {
  return dispatch => {
    return dispatch({
      type: GET_SESSION,
      promise: Api.getSession()
    });
  };
};

export const login = credentials => {
  return dispatch => {
    return dispatch({
      type: LOGIN,
      promise: Api.login(credentials)
    });
  };
};

export const logout = () => {
  return dispatch => {
    return dispatch({
      type: LOGOUT,
      promise: Api.logout()
    });
  };
};

export const changeEmail = email => {
  return {
    type: CHANGE_EMAIL,
    payload: email
  };
};

export const changePassword = password => {
  return {
    type: CHANGE_PASSWORD,
    payload: password
  };
};

// Initial State
const initialState = {
  user2: {
    name: "Hellooooo"
  },
  user: null,
  email: "hi",
  password: "",
  isGettingSession: false,
  hasTriedLoggingIn: false,
  loginError: null
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingSession: true
        }),
        success: prevState => ({
          ...prevState,
          user: payload.data.data,
          email: '',
          password: '',
          loginError: null
        }),
        failure: prevState => ({
          ...prevState,
          hasTriedLoggingIn: true,
          loginError: payload.response.data
        }),
        finish: prevState => ({
          ...prevState,
          isGettingSession: false
        })
      });

    case LOGOUT:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingSession: true
        }),
        success: prevState => ({
          ...prevState,
          user: null,
          hasTriedLoggingIn: false
        }),
        finish: prevState => ({
          ...prevState,
          isGettingSession: false
        })
      });

    case GET_SESSION:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingSession: true
        }),
        success: prevState => ({
          ...prevState,
          user: payload.data.data
        }),
        finish: prevState => ({
          ...prevState,
          isGettingSession: false
        })
    });

    case CHANGE_EMAIL:
      return {
        ...state,
        email: payload
      };
    
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: payload
      }

  default:
    return state;
  }
}

export default reducer;