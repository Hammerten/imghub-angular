import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BackendClientService} from '../../services/backend-client.service';
import {ActivatedRoute, Router} from '@angular/router';

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
  post: any;
  tags: any[] = [];
  postForm = this.formBuilder.group({
    title: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private backendClient: BackendClientService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getTags();
    // @ts-ignore
    this.getPost(+this.route.snapshot.paramMap.get('postId'));
  }

  getTags(): void {
    // @ts-ignore
    this.backendClient.getPostTags(+this.route.snapshot.paramMap.get('postId')).subscribe((result: any) => {
      this.tags = result;
    }, (error: any) => {
      console.error(error);
    });
  }

  getPost(postId: number): void {
    this.backendClient.getUserPost(postId).subscribe((result: any) => {
      this.post = result;
      this.postForm.get('title')?.setValue(result.title);
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

  updatePostTitle(postId: number, title: string): void {
    this.backendClient.updatePost(postId, title).subscribe((result: any) => {
      this.router.navigate(['/user/posts']);
    }, (error: any) => {
      console.error(error);
    });
  }

  onSubmit(): void {
    this.submitted = true;
    // @ts-ignore
    this.updatePostTitle(+this.route.snapshot.paramMap.get('postId'), this.title.value);
  }

  get title(): any {
    return this.postForm.get('title');
  }
}
