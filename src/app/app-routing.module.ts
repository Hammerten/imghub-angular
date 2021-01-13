import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostListComponent} from "./posts/post-list/post-list.component";
import {AddPostComponent} from "./posts/add-post/add-post.component";

const routes: Routes = [
  {path: 'post', component: PostListComponent},
  {path: 'post/new', component: AddPostComponent},
  {path: '', redirectTo: 'post', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
