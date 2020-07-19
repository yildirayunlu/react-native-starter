import { IPostListReducer, IUserLoginReducer, IAuthReducer } from '@interfaces';

export interface IStore {
  auth: IAuthReducer.State;
  user: {
    login: IUserLoginReducer.State;
  };
  post: {
    list: IPostListReducer.State;
  };
}
