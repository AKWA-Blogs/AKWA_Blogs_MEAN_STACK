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
})
export class ExploreComponent implements OnInit {

  articles = {}
  selectedArticles = {}
  channels = {}
  tags = {}

  public items = [
    { display: 'Pizza', value: 1 },
    { display: 'Pasta', value: 2 },
    { display: 'Parmesan', value: 3 },
  ];
  constructor(private _httpService: HttpService) {

  }
  simpleSlider = 40;
  doubleSlider = [20, 60];

  regularItems = ['Pizza', 'Pasta', 'Parmesan'];



  selectTheme = 'primary';


  ngOnInit() {

    this.getArticlesFromService();
    this.getChannelsFromService();
  }

  myFunc(val: any) {
    // code here
  }
  getArticlesFromService() {
    let observable = this._httpService.expArticle('5daffc8c44476296b93ab61a');
    console.log("in expArticle")

    observable.subscribe(data => {
      console.log("Got our Articles!!", data);
      this.articles = data
    });
  };

  getChannelsFromService() {
    let observable = this._httpService.expChannel('5daffc8c44476296b93ab61a');
    console.log("in expChannels")

    observable.subscribe(data => {
      console.log("Got our Channels!!", data);
      this.channels = data;

    });
  }
}