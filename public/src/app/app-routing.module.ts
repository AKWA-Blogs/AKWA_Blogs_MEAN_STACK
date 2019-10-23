import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddArticleComponent } from './Articles/add-article/add-article.component';
import { EditArticleComponent } from './Articles/edit-article/edit-article.component';
import { ShowArticleComponent } from './Articles/show-article/show-article.component';

const routes: Routes = [
  {path: 'addArticle',component: AddArticleComponent},
  {path: 'editArticle',component: EditArticleComponent},
  {path: 'showArticle',component: ShowArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
