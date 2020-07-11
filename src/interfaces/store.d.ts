import { IUserListReducer, IAuthReducer } from '@interfaces';

export interface IStore {
  auth: IAuthReducer.State;
  user: {
    list: IUserListReducer.State;
  };
}
