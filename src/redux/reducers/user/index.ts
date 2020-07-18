import { combineReducers } from 'redux';

import { UserLoginReducer } from './login';
import { UserListReducer } from './list';

export { USER_LIST_STATE } from './list';

export default combineReducers({
  login: UserLoginReducer,
  list: UserListReducer,
});
