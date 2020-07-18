export declare namespace User {
  interface LoginRequest {
    email: string;
    password: string;
  }
  interface ListResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: UserItem[];
  }

  interface UserItem {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }

  interface AuthenticatedUser extends UserItem {
    token: string;
  }
}
