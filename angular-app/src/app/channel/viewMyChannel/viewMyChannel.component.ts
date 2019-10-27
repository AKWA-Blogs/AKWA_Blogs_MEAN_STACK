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
  regularItems = [];
  tags =[]
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
    console.log("Got Articles: "+this.articles);
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
      this.getUserArticlesFromService();
    })
  }

  showEditArticle(data) {
    this.editArticle = data
    this.showEdit = true
    this.regularItems = data.tags
    console.log('deit==== ', data)
  };

  getEditArticle() {
    console.log("Tags: "+this.regularItems);
    this.showEdit = false;
    console.log(this.regularItems)

    for (var i = 0; i < this.regularItems.length; i++) {
      if (typeof this.regularItems[i] == "string") {
        this.tags.push(this.regularItems[i]);
      };
      if (typeof this.regularItems[i] == "object") {
        this.tags.push(this.regularItems[i].display);
      };
    }
    console.log("New tags "+this.tags);
    this.editArticle["tags"] = this.tags;

    // this.editArticle.tags = this.regularItems;
    console.log('update    ', this.editArticle);

    let observable = this._httpService.putArticle(this.editArticle)
    observable.subscribe(data => {
      console.log("Article ", data)
    });
    swal({
      title: "Article updated!",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      type: "success"
    }).catch(swal.noop)
  }
}

