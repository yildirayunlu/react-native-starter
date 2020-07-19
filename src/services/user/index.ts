import { Api } from '@utilities/api';
import { User } from '@interfaces';

export const UserService = {
  Login: async (payload: User.LoginRequest) => {
    return Api.get<User.AuthenticatedUser>('/profile', payload);
  },
};
