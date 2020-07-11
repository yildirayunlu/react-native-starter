import { combineReducers } from 'redux';

import { AuthReducer } from './auth';
import UserReducer from './user';

const RootReducer = combineReducers({
  user: UserReducer,
  auth: AuthReducer,
});

export default RootReducer;
