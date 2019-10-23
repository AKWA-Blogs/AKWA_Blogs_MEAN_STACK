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
    this.getArticlesFromService();
  }
  getArticlesFromService() {
    let observable = this._httpService.getArticles();
    observable.subscribe(data => {
      console.log("Got our Articles!!", data);
      this.articles = data;
    });
  }
  getChannelsFromService() {

  }
}
