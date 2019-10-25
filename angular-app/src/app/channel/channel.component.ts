import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import PerfectScrollbar from 'perfect-scrollbar';
import { HttpService } from '../http.service';


declare const $: any;

@Component({
    selector: 'app-channel-cmp',
    templateUrl: 'channel.component.html'
})

export class ChannelComponent implements OnInit {
    channel = {}
    constructor(private _httpService: HttpService) {

    }
    ngOnInit() {
        this.getUserChannelFromService();
    }
    getUserChannelFromService() {
        let observable = this._httpService.getUserChannel(localStorage.getItem('id'));
        observable.subscribe(channel => {
            console.log("Got subbed channel!!", channel);
            this.channel = channel;
        });
    }
}
