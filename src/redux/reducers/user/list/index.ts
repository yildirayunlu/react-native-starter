import { ActionConsts } from '@redux/actionConsts';
import { IUserListReducer } from '@interfaces';
import { ApiStatus } from '@interfaces/enums';

const INITIAL_STATE: IUserListReducer.State = {
  status: ApiStatus.init,
  data: [],
  pagination: {
    per_page: 1,
    page: 1,
    total: 0,
    total_pages: 0,
  },
};

export const USER_LIST_STATE = INITIAL_STATE;

export const UserListReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ActionConsts.user.list.request:
      return {
        ...state,
        status: ApiStatus.loading,
      };
    case ActionConsts.user.list.success:
      return {
        ...state,
        ...action.payload,
        status: ApiStatus.loaded,
      };
    case ActionConsts.user.list.failed:
      return {
        ...state,
        error: action.error,
        status: ApiStatus.failed,
      };

    default:
      return state;
  }
};
