export declare namespace Post {
  interface ListResponse {
    data: PostItem[];
  }

  interface PostItem {
    id: number;
    title: string;
    image?: string;
    content: string;
  }
}
