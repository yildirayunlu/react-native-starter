import { Api } from '@utilities/api';
import { User } from '@interfaces';

export const UserService = {
  Login: async (payload: User.LoginRequest) => {
    return Api.post<User.AuthenticatedUser>('/login', payload);
  },
  List: async () => {
    return Api.get<User.ListResponse>('/users');
  },
};
