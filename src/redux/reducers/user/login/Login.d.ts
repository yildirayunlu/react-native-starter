import { ApiStatus } from '@interfaces/enums';
import { User } from '@interfaces';

declare namespace IUserLoginReducer {
  interface State {
    status: ApiStatus;
    data?: User.AuthenticatedUser;
    error?: string;
  }
}

export { IUserLoginReducer };
