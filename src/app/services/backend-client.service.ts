import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendClientService {

  constructor(private http: HttpClient) {
  }

  addPost(data: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/image', data);
  }

  getPosts(sort: number): Observable<any> {
    return this.http.get(`http://localhost:8000/api/image?sort=${sort}`);
  }

  getPost(postId: number): Observable<any> {
    return this.http.get(`http://localhost:8000/api/image/${postId}`);
  }

  getPostTags(postId: number): Observable<any> {
    return this.http.get(`http://localhost:8000/api/tag/${postId}`);
  }

  search(tag: string): Observable<any> {
    return this.http.get(`http://localhost:8000/api/image/search?tag=${tag}`);
  }

  getUserPosts(): Observable<any> {
    return this.http.get('http://localhost:8000/api/user/image');
  }

  getUserPost(postId: number): Observable<any> {
    return this.http.get(`http://localhost:8000/api/image/${postId}`);
  }

  updatePost(postId: number, title: string): Observable<any> {
    const body = {
      id: postId,
      title,
    };
    return this.http.post('http://localhost:8000/api/image/title', body);
  }

  deleteUserPost(postId: number): Observable<any> {
    return this.http.delete(`http://localhost:8000/api/image/${postId}`);
  }

  deletePostTag(postId: number, tagId: number): Observable<any> {
    const body = {
      image_id: postId,
      tag_id: tagId
    };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body
    };
    return this.http.delete(`http://localhost:8000/api/tag`, httpOptions);
  }

  attachTagToPost(postId: number, tag: string): Observable<any> {
    const body = {
      image_id: postId,
      name: tag
    };
    return this.http.post('http://localhost:8000/api/tag', body);
  }
}
