import { Routes } from '@angular/router';

import { ReadListComponent } from './readList.component';

export const ReadListRoutes: Routes = [
  {

    path: '',
    children: [{
      path: '',
      component: ReadListComponent
    }]
  }
];
