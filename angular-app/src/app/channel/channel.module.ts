import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';
import { ChannelRoutes } from './channel.routing';

import { AddArticleComponent } from './addArticle/addArticle.component';
import { ViewMyChannelComponent } from './viewMyChannel/viewMyChannel.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ChannelRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule
  ],
  declarations: [
      AddArticleComponent,
      ViewMyChannelComponent

  ]
})

export class Channel {}
