import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

declare var $: any;
declare interface Task {
  title: string;
  checked: boolean;
}
@Component({
  selector: 'app-subfeed-cmp',
  templateUrl: 'subfeed.component.html'
})

export class SubfeedComponent implements OnInit {
  articles = {}
  channels = {}
  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {
    this.getChannelsFromService();
  }

  getChannelsFromService() {
    let observable = this._httpService.getSubChannels(localStorage.getItem('id'));
    observable.subscribe(channels => {
      console.log("Got subbed channel!!", channels[0]['articles']);
      this.channels = channels;
    });
  }
  unsubFromChannel(id: string) {
    const data = { "channel_id": id, "user_id": localStorage.getItem('id') };
    let observable = this._httpService.unsubsribeFromChannel(data);
    observable.subscribe(data => {
      console.log(data);
      console.log("unsubbed from channel");
    });
    this.getChannelsFromService();
  }


}
