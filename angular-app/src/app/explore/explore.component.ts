import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

declare var $: any;
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
  selectedArticles={}
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
      for(var x in data ) {
        if (data[x]['_id']=='5daec7cd1e8d9a78b1a355e6'){
          this.selectedArticles = data[x];
          console.log(x,"Go________fvdse____________!!", this.selectedArticles);

        }
        else{
          this.articles[x]= data[x]

        }
      }
      console.log(x,"Go____________________!!", this.articles);

    });
  }
  getChannelsFromService() {

  }
}