import { combineReducers } from 'redux';


import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import {locations} from './location.reducer';

import activeMenuReducer from './menuReducer';
import formReducer from './formAreaReducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  locations,
  activeMenuItem:activeMenuReducer,
  formAreaVisible:formReducer
});

export default rootReducer;