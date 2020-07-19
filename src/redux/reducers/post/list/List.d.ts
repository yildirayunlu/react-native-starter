import { ApiStatus } from '@interfaces/enums';
import { Post } from '@interfaces';

declare namespace IPostListReducer {
  interface State {
    status: ApiStatus;
    data?: Post.PostItem[];
    error?: string;
  }
}

export { IPostListReducer };
