import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import UserSchema from '../../../../server/models/user';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
    {
        path: '/subfeed',
        title: 'Subscription Feed',
        type: 'link',
        icontype: 'view_list'

    },
    {
        path: '/explore',
        title: 'Explore',
        type: 'link',
        icontype: 'apps'

    },

    {
        path: '/channel',
        title: 'Channel',
        type: 'sub',
        icontype: 'content_paste',
        collapse: 'channel',
        children: [
            { path: 'viewMyChannel', title: 'My Channel', ab: 'MC' },
            { path: 'addArticle', title: 'Add Article', ab: 'AA' }
        ]
    },

    {
        path: '/readList',
        title: 'Read List',
        type: 'link',
        icontype: 'book'

    },
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ps: any;
    user: UserSchema;

    constructor(private _httpService: HttpService, private router: Router) { }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            this.ps = new PerfectScrollbar(elemSidebar);
        }
        // loading user:
        let observable = this._httpService.getUsersID(localStorage.getItem('id'))
        observable.subscribe(data => {
            this.user = data
            console.log('sidebar, got user: ', this.user)
        })
    }
    updatePS(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            this.ps.update();
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }

    goToProfile() {
        console.log('going to profile...')
        this.router.navigate(['/profile'])
    }
}
