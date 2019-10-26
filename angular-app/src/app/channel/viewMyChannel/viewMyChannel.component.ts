import { Component, OnInit, ElementRef } from '@angular/core';
import { DateAdapter } from '@angular/material';
import { HttpService } from '../../http.service';


declare const require: any;

declare const $: any;

@Component({
  selector: 'app-viewMyChannel-cmp',
  templateUrl: 'viewMyChannel.component.html',
  styleUrls: ['./viewMychannel.component.css']
})

export class ViewMyChannelComponent implements OnInit {
  channel = {}
  articles = {}
  editArticle = {}
  regularItems: string[] = [];
  showEdit: boolean = false;
  constructor(private _httpService: HttpService) { }


  ngOnInit() {
    this.getUserChannelFromService();
    this.getUserArticlesFromService();
  }

  getUserChannelFromService() {
    let observable = this._httpService.getUserChannel(localStorage.getItem('id'));
    observable.subscribe(channel => {
      this.channel = channel;
    });
  }

  getUserArticlesFromService() {
    let observable = this._httpService.getUserArticles(localStorage.getItem('id'));
    observable.subscribe(articles => {
      this.articles = articles;
    });
  }
  DeleteArticle(id) {
    console.log(id);
    let observable = this._httpService.deleteArticle(id)
    observable.subscribe(data => {
      console.log('deleted', data)
    })
    this.getUserArticlesFromService()
  }

  showEditArticle(data) {
    this.editArticle = data
    this.showEdit = true
    this.regularItems = data.tags
    console.log('deit==== ', data)
  };

  getEditArticle() {
    this.showEdit = false;
    console.log('update    ', this.editArticle);

    let observable = this._httpService.putArticle(this.editArticle)
    observable.subscribe(data => {
      console.log("Article ", data)
    });
  }
}

