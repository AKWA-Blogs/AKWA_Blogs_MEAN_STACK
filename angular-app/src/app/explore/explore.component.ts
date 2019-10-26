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
  user={}

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


  filterArticles(){
    console.log("Filter Articles");
    console.log(this.tags);
  }

  filterChannels(){
    console.log("Filter Channels");
    console.log(this.tags);
  }
  getArticlesFromService() {
    let observable = this._httpService.expArticle(localStorage.getItem('id'));
    console.log("in expArticle")

    observable.subscribe(data => {
      console.log("Got our Articles!!", data);
      this.articles = data
    });
  };
  getChannelsFromService() {
    let observable = this._httpService.expChannel(localStorage.getItem('id'));
    console.log("in expChannels")

    observable.subscribe(data => {
      console.log("Got our Channels!!", data);
      this.channels = data;

    });
  }

  getUser(){
    let observable = this._httpService.getUsersID(localStorage.getItem('id'));
    observable.subscribe(data => {
      this.user = data;
      console.log(this.user['tags']);
      this.tags = this.user['tags'];
    });
  }
}