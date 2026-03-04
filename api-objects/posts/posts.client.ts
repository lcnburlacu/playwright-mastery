// api-objects/posts/v1/posts.client.ts
import { BaseAPI } from '../base.api';
import { Post } from './post.model';

export class PostsClient extends BaseAPI {

  async getAllPosts() {
    return this.request.get(this.getBaseUrl('/posts'));
  }

  async getPostById(id: number) {
    return this.request.get(this.getBaseUrl(`/posts/${id}`));
  }

  async getPostsByUser(userId: number) {
    return this.request.get(this.getBaseUrl(`/posts`), { params: { userId } });
  }

  async createPost<T>(post: T) {
    return this.request.post(this.getBaseUrl('/posts'), { data: post });
  }

  async replacePost(id: number, post: Partial<Post>) {
    return this.request.put(this.getBaseUrl(`/posts/${id}`), { data: post });
  }

  async deletePost(id: number) {
    return this.request.delete(this.getBaseUrl(`/posts/${id}`));
  }
}
