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
  // getArticlesFromService() {
  //   let observable = this._httpService.getArticles();
  //   observable.subscribe(articles => {
  //     console.log("Got our Articles!!", articles);
  //     this.articles = articles;
  //   });
  // }
  getChannelsFromService() {
    let observable = this._httpService.getSubChannels('5daecf2f9b83707a68aae65b');
    observable.subscribe(channels => {
      console.log("Got subbed channel!!", channels[0]['articles']);
      this.channels = channels;
    });
  }
  unsubscribe(id: string): void {
    console.log(`Click unsubscribe is working with num param: ${id}`);

  }
}
