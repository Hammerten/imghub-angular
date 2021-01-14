import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostListComponent} from './posts/post-list/post-list.component';
import {AddPostComponent} from './posts/add-post/add-post.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {UserPostListComponent} from './posts/user-post-list/user-post-list.component';
import {EditPostComponent} from './posts/edit-post/edit-post.component';
import {ViewPostComponent} from "./posts/view-post/view-post.component";
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [
  {path: 'edit/:postId', component: EditPostComponent},
  {path: 'post', component: PostListComponent},
  {path: 'post/new', component: AddPostComponent, canActivate: [AuthGuardService]},
  {path: 'post/:id', component: ViewPostComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'user/posts', component: UserPostListComponent},
  {path: '', redirectTo: 'post', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
