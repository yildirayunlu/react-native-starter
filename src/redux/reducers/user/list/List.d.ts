import { ApiStatus } from '@interfaces/enums';
import { User } from '@interfaces';

declare namespace IUserListReducer {
  interface State {
    status: ApiStatus;
    data?: User.UserItem[];
    pagination: {
      per_page: number;
      page: number;
      total: number;
      total_pages: number;
    };
    error?: string;
  }
}

export { IUserListReducer };
