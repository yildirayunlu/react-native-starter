import { ActionConsts } from '@redux/actionConsts';
import { IUserLoginReducer } from '@interfaces';
import { ApiStatus } from '@interfaces/enums';

const INITIAL_STATE: IUserLoginReducer.State = {
  status: ApiStatus.init,
};

export const USER_LOGIN_STATE = INITIAL_STATE;

export const UserLoginReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ActionConsts.user.login.request:
      return {
        ...state,
        status: ApiStatus.loading,
      };
    case ActionConsts.user.login.success:
      return {
        ...state,
        ...action.payload,
        error: undefined,
        status: ApiStatus.loaded,
      };
    case ActionConsts.user.login.failed:
      return {
        ...state,
        error: action.error,
        status: ApiStatus.failed,
      };

    default:
      return state;
  }
};
