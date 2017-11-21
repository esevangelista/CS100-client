import { combineReducers } from 'redux';

import users from './auth/duck';
import fields from './signup/duck';

const rootReducer = combineReducers({
  users,
  fields,
});

export default rootReducer;