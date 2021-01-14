import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostListComponent} from './posts/post-list/post-list.component';
import {AddPostComponent} from './posts/add-post/add-post.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';

const routes: Routes = [
  {path: 'post', component: PostListComponent},
  {path: 'post/new', component: AddPostComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: '', redirectTo: 'post', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
