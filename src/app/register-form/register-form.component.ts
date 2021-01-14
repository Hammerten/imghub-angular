import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  submitted = false;
  success: any;
  error: any;
  registerForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
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
    if (this.registerForm.invalid) {
      this.error = 'მოხდა შეცდომა';
      return;
    }

    this.userService.register(this.registerForm.value).subscribe(
      (data: any) => {
        this.success = 'მომხმარებელი დაემატა';
      },
      (error: any) => {
        this.error = error.error;
        console.log(error);
      }
    );
  }

  get email(): any {
    return this.registerForm.get('email');
  }

  get name(): any {
    return this.registerForm.get('name');
  }

  get password(): any {
    return this.registerForm.get('password');
  }
}
