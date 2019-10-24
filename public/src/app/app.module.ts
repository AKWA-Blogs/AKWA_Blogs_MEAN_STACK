import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExploreComponent } from './explore/explore.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatInputModule, MatButtonModule, MatOptionModule, MatSelectModule} from '@angular/material'

import { AddArticleComponent } from './Articles/add-article/add-article.component';
import { EditArticleComponent } from './Articles/edit-article/edit-article.component';
import { ShowArticleComponent } from './Articles/show-article/show-article.component';

import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AddArticleComponent,
    EditArticleComponent,
    ShowArticleComponent,
    LoginComponent,
    RegisterComponent,
    ExploreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    MatCardModule,
    MatTooltipModule,
    MatTabsModule,
    

    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
