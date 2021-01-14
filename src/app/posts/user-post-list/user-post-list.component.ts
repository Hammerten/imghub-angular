import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post.model';
import {BackendClientService} from '../../services/backend-client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-post-list',
  templateUrl: './user-post-list.component.html',
  styleUrls: ['./user-post-list.component.css']
})
export class UserPostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private backendClient: BackendClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.backendClient.getUserPosts().subscribe((result: any) => {
        this.posts = result;
      },
      (error: any) => {console.error(error);
      });
  }

  deletePost(postId: number): void {
    this.backendClient.deleteUserPost(postId).subscribe(() => {
      this.getPosts();
    }, (error: any) => {
      console.error(error);
    });
  }
}
