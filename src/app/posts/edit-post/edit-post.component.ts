import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BackendClientService} from '../../services/backend-client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  error: any;
  submitted = false;
  isLoading = false;
  newTag = '';
  tags: any[] = [];
  postForm = this.formBuilder.group({
    title: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private backendClient: BackendClientService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getTags();
  }

  getTags(): void {
    // @ts-ignore
    this.backendClient.getPostTags(+this.route.snapshot.paramMap.get('postId')).subscribe((result: any) => {
      this.tags = result;
    }, (error: any) => {
      console.error(error);
    });
  }

  deleteTag(tagId: number): void {
    // @ts-ignore
    this.backendClient.deletePostTag(+this.route.snapshot.paramMap.get('postId'), tagId).subscribe(() => {
      this.getTags();
    }, (error: any) => {
      console.error(error);
    });
  }

  addNewTag(): void {
    // @ts-ignore
    this.backendClient.attachTagToPost(+this.route.snapshot.paramMap.get('postId'), this.newTag).subscribe(() => {
      this.newTag = '';
      this.getTags();
    }, (error: any) => {
      console.error(error);
    });
  }

  onSubmit(): void {
    this.submitted = true;
  }

  get title(): any {
    return this.postForm.get('title');
  }
}
