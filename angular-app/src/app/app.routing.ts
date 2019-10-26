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
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },

            {
                path: 'channel',
                loadChildren: './channel/channel.module#Channel'
            },
            {
                path: 'readList',
                loadChildren: './readList/readList.module#ReadListModule'
            },
            {
                path: 'forms',
                loadChildren: './forms/forms.module#Forms'
            },
            {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            },
            {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule'
            }, {
                path: 'subfeed',
                loadChildren: './subfeed/subfeed.module#SubfeedModule'
            },
            // {
            //     path: 'channel',
            //     loadChildren: './channel/channel.module#ChannelModule'
            // },
            {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            }, {
                path: 'calendar',
                loadChildren: './calendar/calendar.module#CalendarModule'
            }, {
                path: '',
                loadChildren: './userpage/user.module#UserModule'
            }, {
                path: '',
                loadChildren: './timeline/timeline.module#TimelineModule'
            },
            {
                path: '',
                loadChildren: './timeline/timeline.module#TimelineModule'
            }, {
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
