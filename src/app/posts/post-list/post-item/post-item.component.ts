import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../models/post.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: Post | undefined;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  handleRedirect() {
    // @ts-ignore
    this.router.navigate(["/post", this.post.id]);
  }
}
