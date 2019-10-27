import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { observable } from 'rxjs';


@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
})
export class ViewArticleComponent implements OnInit {
  article = {}
  comments = {}

  constructor(private _httpService: HttpService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getArticlesFromService();

  }
  getArticlesFromService() {

    let observable = this._httpService.getArticle(this.activatedRoute.snapshot.params.id);
    console.log("in expArticle", this.activatedRoute.snapshot.params.id)

    observable.subscribe(data => {
      console.log("Got our Article!!", data);
      this.article = data
    })
    var user_id = localStorage.getItem('id');
  }
  comment = { comment: "", commenter: localStorage.getItem('name'), article_id: localStorage.getItem('id') }
  addComment() {
    console.log("add Comment")
    let observable = this._httpService.postComment(this.comment)
    observable.subscribe(data => {
      console.log('done! ', data)

    });

  }
}
