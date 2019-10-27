import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'subfeed',
        pathMatch: 'full',
    }, {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'channel',
                loadChildren: './channel/channel.module#Channel'
            },
            {
                path: 'readList',
                loadChildren: './readList/readList.module#ReadListModule'
            },
            {
                path: 'subfeed',
                loadChildren: './subfeed/subfeed.module#SubfeedModule'
            },
            {
                path: '',
                loadChildren: './userpage/user.module#UserModule'
            },
            {
                path: 'explore',
                loadChildren: './explore/explore.module#ExploreModule'
            }, {
                path: 'profile',
                loadChildren: './profile/profile.module#ProfileModule'
            },
            {
                path: 'ViewArticle/:id',
                loadChildren: './view-article/view-article.module#ViewArticleModule'
            },
            {
                path: 'ViewChannel/:id',
                loadChildren: './view-channel/view-channel.moduls#ViewChannelModule'
            }
        ]
    },
    {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'pages',
            loadChildren: './pages/pages.module#PagesModule'
        }]
    }
];
