import { Routes } from '@angular/router';

import { ViewArticleComponent } from './view-article.component';

export const ViewArticleRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ViewArticleComponent
    }]
}
];
