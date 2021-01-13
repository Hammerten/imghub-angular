import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/post.model';
import {BackendClientService} from "../../services/backend-client.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts: Post[] = [
  //   new Post('Test', 500, 'https://www.sugarandsoul.co/wp-content/uploads/2018/01/hungarian-goulash-recipe-17.jpg'),
  //   new Post('Test', 500, 'https://i.imgur.com/mTazSal.jpg'),
  //   new Post('Test', 500, 'https://i.imgur.com/mTazSal.jpg'),
  //   new Post('Test', 500, 'https://www.sugarandsoul.co/wp-content/uploads/2018/01/hungarian-goulash-recipe-17.jpg'),
  //   new Post('Test', 500, 'https://www.sugarandsoul.co/wp-content/uploads/2018/01/hungarian-goulash-recipe-17.jpg'),
  //   new Post('Test', 500, 'https://i.imgur.com/mTazSal.jpg'),
  //   new Post('Test', 500, 'https://www.sugarandsoul.co/wp-content/uploads/2018/01/hungarian-goulash-recipe-17.jpg'),
  //   new Post('Test', 500, 'https://www.sugarandsoul.co/wp-content/uploads/2018/01/hungarian-goulash-recipe-17.jpg'),
  //   new Post('Test', 500, 'https://i.imgur.com/mTazSal.jpg'),
  //   new Post('Test', 500, 'https://www.sugarandsoul.co/wp-content/uploads/2018/01/hungarian-goulash-recipe-17.jpg'),
  //   new Post('Test', 500, 'https://i.imgur.com/mTazSal.jpg'),
  // ];
  posts: Post[] = [];

  constructor(private backendClient: BackendClientService) {
  }

  ngOnInit(): void {
    this.fetchProducts(2);
  }

  fetchProducts(sort: number) {
    this.backendClient.getPosts(sort)
      .subscribe(result => this.posts = result);
  }

  sortChangeHandler(sort: number) {
    this.fetchProducts(sort);
  }
}
