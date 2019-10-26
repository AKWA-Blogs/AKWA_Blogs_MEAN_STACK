import { Component, OnInit, ElementRef } from '@angular/core';
import { DateAdapter } from '@angular/material';
import { HttpService } from '../../http.service';
import swal from 'sweetalert2';


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
    swal({
      title: 'Delete article?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      confirmButtonText: 'Yes, delete it!',
      buttonsStyling: false
    }).then((result) => {
      console.log(id);
      let observable = this._httpService.deleteArticle(id)
      observable.subscribe(data => {
        console.log('deleted', data)
      })
      this.getUserArticlesFromService();
      if (result.value) {
        swal(
          {
            title: 'Deleted!',
            text: 'Your article has been deleted.',
            type: 'success',
            confirmButtonClass: "btn btn-success",
            buttonsStyling: false
          }
        )
      }
    })
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

