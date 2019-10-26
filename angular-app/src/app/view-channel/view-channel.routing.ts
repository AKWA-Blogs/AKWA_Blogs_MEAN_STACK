import { Routes } from '@angular/router';

import { ViewChannelComponent } from './view-channel.component';

export const ViewChannelRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ViewChannelComponent
    }]
}
];
