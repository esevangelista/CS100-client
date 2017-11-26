import { combineReducers } from 'redux';

import auth from './auth/duck';
import fields from './signup/duck';
import navbar from './navbar/duck';

const rootReducer = combineReducers({
  auth,
  navbar,
  fields
});

export default rootReducer;