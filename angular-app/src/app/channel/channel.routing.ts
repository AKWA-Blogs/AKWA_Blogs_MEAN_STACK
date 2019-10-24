import { Routes } from '@angular/router';

import { AddArticle } from './addArticle/addArticle.component';

export const FormsRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'AddArticle',
      component: AddArticle
    }]
  },
];
