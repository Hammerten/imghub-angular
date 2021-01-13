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
}
