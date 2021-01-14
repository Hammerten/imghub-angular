import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  error: any;
  submitted = false;
  isLoading = false;
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.error = 'გთხოვთ შეავსოთ ყველა ველი';
      return;
    }
    if (!this.isLoading) {
      this.isLoading = true;
      this.authenticationService
        .login(this.email.value, this.password.value)
        .subscribe(
          (data: any) => {
            this.router.navigate(['/']);
          },
          (error: any) => {
            this.isLoading = false;
            this.error = 'მეილი ან პაროლი არასწორია';
            console.error(error);
          }
        );
    }
  }

  get email(): any {
    return this.loginForm.get('email');
  }

  get password(): any {
    return this.loginForm.get('password');
  }
}
