import { Dispatch } from 'redux';

import { UserService } from '@services';
import { ActionConsts } from '@redux/actionConsts';

export const UserActions = {
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
