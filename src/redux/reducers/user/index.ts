import { combineReducers } from 'redux';

import { UserLoginReducer } from './login';

export { USER_LOGIN_STATE } from './login';

export default combineReducers({
  login: UserLoginReducer,
});
