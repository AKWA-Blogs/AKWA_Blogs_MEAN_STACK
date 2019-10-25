import { Component, OnInit, ElementRef } from '@angular/core';
import { DateAdapter } from '@angular/material';
import { HttpService } from '../../http.service';


declare const require: any;

declare const $: any;

@Component({
  selector: 'app-viewMyChannel-cmp',
  templateUrl: 'viewMyChannel.component.html',
  styleUrls: ['./viewMychannel.component.css']
})

export class ViewMyChannelComponent implements OnInit {
  channel = {}
  articles = {}
  constructor(private _httpService: HttpService) { }


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
