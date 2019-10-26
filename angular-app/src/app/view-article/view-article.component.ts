import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
})
export class ViewArticleComponent implements OnInit {
  article = {}
  comments={}

  constructor(private _httpService: HttpService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getArticlesFromService();
    this.getCommentFromService();

  }
  getCommentFromService() {

    let observable = this._httpService.getComment(this.activatedRoute.snapshot.params.id);
    console.log("in comment")
    console.log(this.activatedRoute.snapshot.params.id);

    observable.subscribe(data => {
      console.log("Got our comments!!", data);
      this.comments = data
    }
    )
  }

  getArticlesFromService() {

    let observable = this._httpService.getArticle(this.activatedRoute.snapshot.params.id);
    console.log("in view article")
    console.log(this.activatedRoute.snapshot.params.id);

    observable.subscribe(data => {
      console.log("Got our Article!!", data);
      this.article = data
    }
    )
  }
}
