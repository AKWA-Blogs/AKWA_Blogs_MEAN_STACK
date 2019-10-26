import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
})
export class ViewArticleComponent implements OnInit {
  article = {}

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getArticlesFromService();

  }
  getArticlesFromService() {
    let observable = this._httpService.getArticle('5daecc5a3b2a9c7a3e2e5e68');
    console.log("in expArticle")

    observable.subscribe(data => {
      console.log("Got our Articles!!", data);
      this.article = data
    }
    )
  }
}
