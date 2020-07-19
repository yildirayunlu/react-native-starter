import { combineReducers } from 'redux';

import { PostListReducer } from './list';

export { POST_LIST_STATE } from './list';

export default combineReducers({
  list: PostListReducer,
});
