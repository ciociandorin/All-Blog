import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Post } from './post.model'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  selectedPost: Post | undefined;
  post: Post[] | undefined;
  
  readonly baseURL = 'http://localhost:3000/post';

  constructor(private http: HttpClient) { }

  // Back-end - front-end 
  

  // POST post
  postPost(post: Post) {
    return this.http.post(this.baseURL, post);
    // return this.http.post(environment.apiBaseUrl, post);
  }

  // GET posts
  getPostList() {
    return this.http.get(this.baseURL);
  }

  // PUT posts
  putPost(post: Post) {
    return this.http.put(this.baseURL + `/${post._id}`, post);
  }

  // DELETE post by id
  deletePost(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  // POST comment for post by id
  putComment(post: Post) {
    return this.http.put(this.baseURL + `/comment/${post._id}`, post);
  }

  // GET user posts
  getUserPostList(username: string){
    return this.http.get(this.baseURL + `/list/${username}`);
  }

  // GET post by id
  getPost(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

}
