import { Api } from '@utilities/api';
import { User } from '@interfaces';

export const UserService = {
  List: async () => {
    return Api.get<User.ListResponse>('/users');
  },
};
