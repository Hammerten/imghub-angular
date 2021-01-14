import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/post.model';
import {BackendClientService} from "../../services/backend-client.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [
    new Post('Test', 500, 'https://www.sugarandsoul.co/wp-content/uploads/2018/01/hungarian-goulash-recipe-17.jpg'),
    new Post('Test', 500, 'https://i.imgur.com/mTazSal.jpg'),
    new Post('Test', 500, 'https://i.imgur.com/mTazSal.jpg'),
    new Post('Test', 500, 'https://www.sugarandsoul.co/wp-content/uploads/2018/01/hungarian-goulash-recipe-17.jpg'),
    new Post('Test', 500, 'https://www.sugarandsoul.co/wp-content/uploads/2018/01/hungarian-goulash-recipe-17.jpg'),
    new Post('Test', 500, 'https://i.imgur.com/mTazSal.jpg'),
    new Post('Test', 500, 'https://www.sugarandsoul.co/wp-content/uploads/2018/01/hungarian-goulash-recipe-17.jpg'),
    new Post('Test', 500, 'https://www.sugarandsoul.co/wp-content/uploads/2018/01/hungarian-goulash-recipe-17.jpg'),
    new Post('Test', 500, 'https://i.imgur.com/mTazSal.jpg'),
    new Post('Test', 500, 'https://www.sugarandsoul.co/wp-content/uploads/2018/01/hungarian-goulash-recipe-17.jpg'),
    new Post('Test', 500, 'https://i.imgur.com/mTazSal.jpg'),
  ];
  searchKeywordFC = new FormControl(null, [Validators.minLength(3)]);

  constructor(private backendClient: BackendClientService) {
  }

  ngOnInit(): void {
    this.fetchProducts(2);
  }

  // tslint:disable-next-line:typedef
  fetchProducts(sort: number) {
    this.backendClient.getPosts(sort).subscribe(result => this.posts = result);
  }

  // tslint:disable-next-line:typedef
  sortChangeHandler(sort: number) {
    this.fetchProducts(sort);
  }

  searchHandler(): void {
    if (!this.searchKeywordFC.value) {
      this.fetchProducts(1);
    } else {
      this.backendClient.search(this.searchKeywordFC.value).subscribe(result => this.posts = result);
    }

  }
}
