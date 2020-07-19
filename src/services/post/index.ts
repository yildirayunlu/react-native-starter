import { Api } from '@utilities/api';
import { Post } from '@interfaces';

export const PostService = {
  List: async () => {
    return Api.get<Post.ListResponse>('/posts');
  },
};
