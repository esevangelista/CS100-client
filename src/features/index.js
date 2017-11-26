import { combineReducers } from 'redux';

import auth from './auth/duck';
import fields from './signup/duck';
import home from './home/duck';
import navbar from './navbar/duck';

const rootReducer = combineReducers({
  auth,
  fields,
  home,
  navbar
});

export default rootReducer;