import { Routes } from '@angular/router';

import { ExploreComponent } from './explore.component';

export const ExploreRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ExploreComponent
    }]
}
];
