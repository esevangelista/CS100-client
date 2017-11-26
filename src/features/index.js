import { combineReducers } from 'redux';

import auth from './auth/duck';
import fields from './signup/duck';
import editprofile from './editprofile/duck'
import home from './home/duck';

const rootReducer = combineReducers({
  auth,
  fields,
  editprofile,
  home
});

export default rootReducer;