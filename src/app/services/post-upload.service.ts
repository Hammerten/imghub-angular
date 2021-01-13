import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {BackendClientService} from './backend-client.service';

@Injectable({
  providedIn: 'root'
})
export class PostUploadService {
  private basePath = '/uploads';

  constructor(private storage: AngularFireStorage, private backendClient: BackendClientService) { }

  pushImageToStorage(imageUpload: any, Post: any): Observable<number | undefined> {
    const filePath = `${this.basePath}/${imageUpload.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, imageUpload);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(imageUrl => {
          imageUpload.url = imageUrl;
          const data = {
            title: Post.title,
            url: imageUrl,
          };
          this.backendClient.addPost(data);
        });
      })
    ).subscribe();

    return uploadTask?.percentageChanges();
  }
}
