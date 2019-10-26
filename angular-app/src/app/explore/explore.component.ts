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
  tags ={}
  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {
    this.getArticlesFromService();
    this.getChannelsFromService();
  }
  getArticlesFromService() {
    let observable = this._httpService.expArticle('5daffc8c44476296b93ab61a');
    console.log("in expArticle")

    observable.subscribe(data => {
      console.log("Got our Articles!!", data);
      this.articles = data


/*       for(var x in data ) {
        if (data[x]['_id']=='5daec7cd1e8d9a78b1a355e6'){
          this.selectedArticles = data[x];
          console.log(x,"Go________fvdse____________!!", this.selectedArticles);

        }
        else{
          this.articles[x]= data[x]

        }
      }
      console.log(x,"Go____________________!!", this.articles);
 */
    });
  };

  getChannelsFromService() {
        let observable = this._httpService.expChannel('5daffc8c44476296b93ab61a');
    console.log("in expChannels")

    observable.subscribe(data => {
      console.log("Got our Channels!!", data);
      this.channels = data;

  });
}}