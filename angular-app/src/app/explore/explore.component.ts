import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import swal from 'sweetalert2';

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
    this.getUserTags();

    this.getArticlesFromService();
    this.getChannelsFromService();
  }


  filterArticles() {
    console.log(this.tags);
    var tags = this.tags;
    var filterTags = []
    for (var i = 0; i < tags.length; i++) {
      if (typeof tags[i] == "string") {
        filterTags.push(tags[i]);
      };
      if (typeof tags[i] == "object") {
        filterTags.push(tags[i].display);
      };
    }
    console.log(filterTags);
    const data = { 'tags': filterTags };
    let observable = this._httpService.filterArticles(data);
    observable.subscribe(data => {
      this.articles = data
    });

  }

  filterChannels() {
    console.log(this.tags);
    var tags = this.tags;
    var filterTags = []
    for (var i = 0; i < tags.length; i++) {
      if (typeof tags[i] == "string") {
        filterTags.push(tags[i]);
      };
      if (typeof tags[i] == "object") {
        filterTags.push(tags[i].display);
      };
    }
    console.log(filterTags);
    const data = { 'tags': filterTags };
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

  getUserTags() {
    let observable = this._httpService.getUsersID(localStorage.getItem('id'));
    observable.subscribe(data => {
      this.user = data;
      this.tags = this.user['tags'];
    });
  }

  subToChannel(id: string, channel: string) {
    console.log("Channel: " + id);
    const data = { "channel_id": id, "user_id": localStorage.getItem('id') };
    console.log(data);
    let observable = this._httpService.subscribeToChannel(data);
    observable.subscribe(data => {
      console.log(data);
      console.log("subbed to channel");
    });
    swal({
      title: "Subsribed to channel!",
      text: `${channel}`,
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      type: "success"
  }).catch(swal.noop)

  }
}