import { ActionConsts } from '@redux/actionConsts';
import { IPostListReducer } from '@interfaces';
import { ApiStatus } from '@interfaces/enums';

const INITIAL_STATE: IPostListReducer.State = {
  status: ApiStatus.init,
  data: [],
};

export const POST_LIST_STATE = INITIAL_STATE;

export const PostListReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ActionConsts.post.list.request:
      return {
        ...state,
        status: ApiStatus.loading,
      };
    case ActionConsts.post.list.success:
      return {
        ...state,
        ...action.payload,
        status: ApiStatus.loaded,
      };
    case ActionConsts.post.list.failed:
      return {
        ...state,
        error: action.error,
        status: ApiStatus.failed,
      };

    default:
      return state;
  }
};
