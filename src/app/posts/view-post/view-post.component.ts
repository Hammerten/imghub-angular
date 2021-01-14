import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BackendClientService} from "../../services/backend-client.service";

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  post: any;
  tags: Object = [];

  constructor(private route: ActivatedRoute,
              private backendClient: BackendClientService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    const postId = +this.route.snapshot.paramMap.get('id');
    this.backendClient.getPost(postId)
      .subscribe(image => this.post = image);
    this.backendClient.getPostTags(postId).subscribe(tags => this.tags = tags);
  }

}
