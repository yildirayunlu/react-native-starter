export declare namespace User {
  interface LoginRequest {
    email: string;
    password: string;
  }

  interface UserItem {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }

  interface AuthenticatedUser {
    token: string;
    user: UserItem;
  }
}
