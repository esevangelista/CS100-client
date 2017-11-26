import { combineReducers } from 'redux';

import auth from './auth/duck';
import fields from './signup/duck';
import home from './home/duck';

const rootReducer = combineReducers({
  auth,
  fields,
  home
});

export default rootReducer;