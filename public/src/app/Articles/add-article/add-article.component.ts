import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit{
  article = {
    title: '',
    body: '',
    author: {},
    channel: {}
  };

  constructor(private _httpService: HttpService) { }
  ngOnInit() {
  }

  AddArticle(){
    let user = this._httpService.getUsersID()

    let observable = this._httpService.postArticle(this.article)
    observable.subscribe(data => { 
      console.log("Article ", data) 
    });
  }

}
