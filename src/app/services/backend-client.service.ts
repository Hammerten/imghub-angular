import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendClientService {

  constructor(private http: HttpClient) {
  }

  addPost(data: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/image', data);
  }

  getPosts(sort: number) {
    return this.http.get(`http://localhost:8000/api/image?sort=${sort}`);
  }

  search(tag: string) {
    return this.http.get(`http://localhost:8000/api/image/search?tag=${tag}`);
  }

  attachTagToPost(post_id: number, tag: string) {
    const body = {
      image_id: post_id,
      name: tag
    }
    return this.http.post("http://localhost:8000/api/tag", body);
  }
}
