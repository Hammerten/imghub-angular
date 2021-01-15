import { Component, OnInit } from '@angular/core';
import { PostUploadService } from 'src/app/services/post-upload.service';
import {FormBuilder, Validators, FormGroup, FormArray, FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  error: any;
  submitted = false;
  isLoading = false;
  selectedFile: any;
  currentFileUpload: any;
  percentage = 0;
  tags = [];
  uploaded = false;
  postForm = this.formBuilder.group({
    title: ['', [Validators.required]],
  });

  constructor(private uploadService: PostUploadService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  selectFile(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  filterTags(event: any): void {
    let tagStringArray = event.target.value;
    tagStringArray = tagStringArray.replace(/\s+/g, '');
    const tagArray = tagStringArray.split(',');
    this.tags = tagArray.filter((x: any) => {
      return x;
    });
  }

  upload(tags: any, title: string): void {
    const post = {
      title,
      tags,
    };
    const file = this.selectedFile;
    this.currentFileUpload = file;
    this.selectedFile = undefined;

    this.uploadService.pushImageToStorage(file, post).subscribe(
      (percentage: number | undefined) => {
        if (typeof percentage === 'number') {
          this.percentage = Math.round(percentage);
          if (this.percentage === 100) {
            this.uploaded = true;
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;
    this.upload(this.tags, this.title.value);
  }

  get title(): any {
    return this.postForm.get('title');
  }
}
