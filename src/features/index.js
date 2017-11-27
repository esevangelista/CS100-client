import { combineReducers } from 'redux';

import auth from './auth/duck';
import fields from './signup/duck';
import editprofile from './editprofile/duck'
import home from './home/duck';
import navbar from './navbar/duck';

const rootReducer = combineReducers({
  auth,
  fields,
  editprofile,
  home,
  navbar
});

export default rootReducer;