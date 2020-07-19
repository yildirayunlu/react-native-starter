import { Dispatch } from 'redux';

import { PostService } from '@services';
import { ActionConsts } from '@redux/actionConsts';

export const PostActions = {
  List: () => async (dispatch: Dispatch) => {
    dispatch({
      type: ActionConsts.post.list.request,
    });

    const { ok, data } = await PostService.List();

    if (!ok || !data) {
      dispatch({
        type: ActionConsts.post.list.failed,
        error: 'error',
      });
      return;
    }

    dispatch({
      payload: {
        data,
      },
      type: ActionConsts.post.list.success,
    });
  },
};
