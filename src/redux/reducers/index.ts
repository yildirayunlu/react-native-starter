import { combineReducers } from 'redux';

import { AuthReducer } from './auth';
import UserReducer from './user';
import PostReducer from './post';

const RootReducer = combineReducers({
  user: UserReducer,
  auth: AuthReducer,
  post: PostReducer,
});

export default RootReducer;
