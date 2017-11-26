import { combineReducers } from 'redux';

import auth from './auth/duck';
import fields from './signup/duck';
import home from './home/duck';
import navbar from './navbar/duck';
import profile from './profile/duck';

const rootReducer = combineReducers({
  auth,
  fields,
  home,
  navbar,
  profile
});

export default rootReducer;