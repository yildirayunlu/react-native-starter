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
      dispatch({
        type: ActionConsts.user.login.failed,
        error: originalError?.response?.data.error,
      });

      return;
    }

    dispatch({
      type: ActionConsts.user.login.success,
    });

    // mock user
    dispatch({
      payload: {
        token: 'testtoken',
        user: {
          id: 1,
          email: 'john@gmail.com',
          first_name: 'John',
          last_name: 'Doe',
          avatar: 'https://ui-avatars.com/api/?name=John+Doe',
        },
      },
      type: ActionConsts.auth.login,
    });
  },
  List: () => async (dispatch: Dispatch) => {
    dispatch({
      type: ActionConsts.user.list.request,
    });

    const { ok, data } = await UserService.List();

    if (!ok || !data) {
      dispatch({
        type: ActionConsts.user.list.failed,
        error: 'error',
      });
      return;
    }

    dispatch({
      payload: {
        data: data.data,
        pagination: {
          page: data.page,
          per_page: data.per_page,
          total: data.total,
          total_pages: data.total_pages,
        },
      },
      type: ActionConsts.user.list.success,
    });
  },
};
