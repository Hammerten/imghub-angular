import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendClientService {

  constructor(private http: HttpClient) { }

  addPost(data: any): any {
    return this.http.post('localhost:8000/api/image', data);
  }
}
