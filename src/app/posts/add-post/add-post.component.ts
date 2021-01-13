import { Component, OnInit } from '@angular/core';
import { PostUploadService } from 'src/app/services/post-upload.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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
  postForm = this.formBuilder.group({
    title: ['', [Validators.required]],
  });

  constructor(private uploadService: PostUploadService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  selectFile(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  upload(): void {
    const file = this.selectedFile;
    this.currentFileUpload = file;
    this.selectedFile = undefined;

    this.uploadService.pushImageToStorage(file, this.postForm.value).subscribe(
      (percentage: number | undefined) => {
        if (typeof percentage === 'number') {
          this.percentage = Math.round(percentage);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;
    this.upload();
  }

  get title(): any {
    return this.postForm.get('title');
  }
}
