import { Dispatch } from 'redux';

import { UserService } from '@services';
import { ActionConsts } from '@redux/actionConsts';
import { User } from '@interfaces';

export const UserActions = {
  Login: (payload: User.LoginRequest) => async (dispatch: Dispatch) => {
    dispatch({
      type: ActionConsts.user.login.request,
    });

    const { ok, data, originalError } = await UserService.Login(payload);

    if (!ok || !data) {
      console.log('originalError', originalError);
      dispatch({
        type: ActionConsts.user.login.failed,
        // error: originalError?.response?.data.error,
        error: 'Invalid Email or password',
      });

      return;
    }

    dispatch({
      type: ActionConsts.user.login.success,
    });

    // set token and user
    dispatch({
      payload: data,
      type: ActionConsts.auth.login,
    });
  },
};
