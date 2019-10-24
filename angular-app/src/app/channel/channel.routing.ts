import { Routes } from '@angular/router';

import { ChannelComponent } from './channel.component';

export const ChannelRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ChannelComponent
    }]
}
];
