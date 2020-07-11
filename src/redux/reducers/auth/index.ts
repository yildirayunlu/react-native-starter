import { ActionConsts } from '@redux/actionConsts';
import { IAuthReducer } from '@interfaces';

const INITIAL_STATE: IAuthReducer.State = {
  isLogin: false,
};

export const AUTH_STATE = INITIAL_STATE;

export const AuthReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ActionConsts.auth.login:
      return {
        ...state,
        isLogin: true,
        token: action.payload.token,
        user: action.payload.user,
      };

    case ActionConsts.auth.logout:
      return {
        ...state,
        isLogin: false,
        token: undefined,
        user: undefined,
      };
    default:
      return state;
  }
};
