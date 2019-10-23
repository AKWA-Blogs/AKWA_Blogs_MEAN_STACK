import { Routes } from '@angular/router';

import { SubfeedComponent } from './subfeed.component';

export const SubfeedRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: SubfeedComponent
    }]
}
];
