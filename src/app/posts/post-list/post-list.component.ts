import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post.model';

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

  constructor() { }

  ngOnInit(): void {
  }
}
