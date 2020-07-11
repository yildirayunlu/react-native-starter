export declare namespace User {
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
}
