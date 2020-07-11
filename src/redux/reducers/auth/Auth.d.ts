import { User } from '@interfaces';

declare namespace IAuthReducer {
  interface State {
    isLogin: boolean;
    token?: string;
    user?: User.UserItem;
  }
}

export { IAuthReducer };
