import { IUserListReducer } from '@interfaces';

export interface IStore {
  user: {
    list: IUserListReducer.State;
  };
}
