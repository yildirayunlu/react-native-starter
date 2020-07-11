import { combineReducers } from 'redux';

import { UserListReducer } from './list';

export { USER_LIST_STATE } from './list';

export default combineReducers({
  list: UserListReducer,
});
