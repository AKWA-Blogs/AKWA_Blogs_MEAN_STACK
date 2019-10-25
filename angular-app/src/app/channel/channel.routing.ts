import { Routes } from '@angular/router';

import { ViewMyChannelComponent } from './viewMyChannel/viewMyChannel.component';
import { AddArticleComponent } from './addArticle/addArticle.component';

export const ChannelRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'viewMyChannel',
        component: ViewMyChannelComponent
    }]}, {
    path: '',
    children: [ {
      path: 'addArticle',
      component: AddArticleComponent
    }]
    },
];
