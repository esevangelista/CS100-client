import { combineReducers } from 'redux';

import auth from './auth/duck';
import fields from './signup/duck';

const rootReducer = combineReducers({
  auth,
  fields
});

export default rootReducer;