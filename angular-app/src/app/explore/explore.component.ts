import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

export interface AutoCompleteModel {
  value: any;
  display: string;
}

declare const require: any;

declare const $: any;

declare interface Task {
  title: string;
  checked: boolean;

}

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.component.html',
  styleUrls: ['./explore.component.css']

})
export class ExploreComponent implements OnInit {

  articles = {}
  selectedArticles = {}
  channels = {}
  tags = [];
  user = {}

  constructor(private _httpService: HttpService) {

  }
  simpleSlider = 40;
  doubleSlider = [20, 60];




  selectTheme = 'primary';


  ngOnInit() {
    this.getUser();

    this.getArticlesFromService();
    this.getChannelsFromService();
  }


  filterArticles() {
    console.log(this.tags);
    var tags = this.tags;
    const data = { 'tags': tags };
    let observable = this._httpService.filterArticles(data);
    observable.subscribe(data => {
      console.log(data);
      this.articles = data
    });

  }

  filterChannels() {
    console.log(this.tags);
    var tags = this.tags;
    const data = { 'tags': tags };
    let observable = this._httpService.filterChannels(data);
    observable.subscribe(data => {
      console.log(data);
      this.channels = data
    });

  }
  getArticlesFromService() {
    let observable = this._httpService.expArticle(localStorage.getItem('id'));
    observable.subscribe(data => {
      this.articles = data
    });

  };
  getChannelsFromService() {
    let observable = this._httpService.expChannel(localStorage.getItem('id'));
    observable.subscribe(data => {
      this.channels = data;

    });
  }

  getUser() {
    let observable = this._httpService.getUsersID(localStorage.getItem('id'));
    observable.subscribe(data => {
      this.user = data;
      this.tags = this.user['tags'];
    });
  }
}