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
    
    let observable = this._httpService.getArticle('5daecc763b2a9c7a3e2e5e6a');
    console.log("in expArticle")

    observable.subscribe(data => {
      console.log("Got our Article!!", data);
      this.article = data
    }
    )
  }
}
