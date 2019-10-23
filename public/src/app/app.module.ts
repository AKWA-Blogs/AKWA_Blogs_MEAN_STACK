import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatOptionModule, MatSelectModule} from '@angular/material'

import { AddArticleComponent } from './Articles/add-article/add-article.component';
import { EditArticleComponent } from './Articles/edit-article/edit-article.component';
import { ShowArticleComponent } from './Articles/show-article/show-article.component';


@NgModule({
  declarations: [
    AppComponent,
    AddArticleComponent,
    EditArticleComponent,
    ShowArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
