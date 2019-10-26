import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {ActivatedRoute} from '@angular/router';
import { observable } from 'rxjs';


@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
})
export class ViewArticleComponent implements OnInit {
  article = {}
  comments={}

  constructor(private _httpService: HttpService , private activatedRoute:ActivatedRoute)  { }

  ngOnInit() {
    this.getArticlesFromService();

  }
  getArticlesFromService() {
    
    let observable = this._httpService.getArticle('5daecc763b2a9c7a3e2e5e6a');
    console.log("in expArticle")

    observable.subscribe(data => {
      console.log("Got our Article!!", data);
      this.article = data
    }
    )
  }
  comment={comment:"",commenter:localStorage.getItem('name'),article_id: localStorage.getItem('id')}
  addComment(){
    console.log("add Comment")
   let observable = this._httpService.postComment(this.comment)
    observable.subscribe(data => {
      console.log('done! ', data)

    });

  }
}
