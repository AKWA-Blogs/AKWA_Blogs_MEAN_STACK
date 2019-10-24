import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
declare var $: any;

@Component({
  selector: 'app-regularforms-cmp',
  templateUrl: 'regularforms.component.html'
})

export class RegularFormsComponent implements OnInit {
  article = {
    title: '',
    body: '',
    author: {},
    channelId: '',
    tags: [],
    comments: []
  };
  regularItems: string[] = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  AddArticle() {
    var tags = this.regularItems;
    var keys = Object.keys(tags);
    var arr = []
    for (var i = 0, n = keys.length; i < n; i++) {
      var key = keys[i];
      arr[key] = tags[key];
    }
    
    for (var i = 0, n = arr.length; i < n; i++) {
      this.article.tags.push(arr[i].display)
    }
    
    let user = this._httpService.getUsersID(localStorage.getItem('id'))
    user.subscribe(data => {
      this.article.author = data;
      // console.log("user ", data) 
    });

    let channelID = this._httpService.getUsersChannels(localStorage.getItem('id'))
    channelID.subscribe(data => {
      this.article.channelId += data._id
      // console.log(data._id)
      console.log(this.article)
    });

    let observable = this._httpService.postArticle(this.article)
    observable.subscribe(data => {
      console.log("Article ", data)
    });
  }
}
