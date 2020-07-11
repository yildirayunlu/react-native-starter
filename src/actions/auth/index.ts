import { Dispatch } from 'redux';

import { ActionConsts } from '@redux/actionConsts';
import { User } from '@interfaces';

export const AuthActions = {
  Login: (token: string, user: User.UserItem) => async (dispatch: Dispatch) => {
    dispatch({
      payload: {
        token,
        user,
      },
      type: ActionConsts.auth.login,
    });
  },
  Logout: () => async (dispatch: Dispatch) => {
    dispatch({
      type: ActionConsts.auth.logout,
    });
  },
};
