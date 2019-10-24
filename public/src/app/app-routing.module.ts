import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import { AddArticleComponent } from './Articles/add-article/add-article.component';
import { EditArticleComponent } from './Articles/edit-article/edit-article.component';
import { ShowArticleComponent } from './Articles/show-article/show-article.component';

const routes: Routes = [
  // { path: '**', component: PageNotFoundComponent },
  {path: 'addArticle',component: AddArticleComponent},
  {path: 'editArticle',component: EditArticleComponent},
  {path: 'showArticle',component: ShowArticleComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
