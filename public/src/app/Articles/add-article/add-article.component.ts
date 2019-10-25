import { Component } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  article = {
    title: '',
    body: '',
    author: {},
    channel: {}
  };

  constructor(private _httpService: HttpService) { }
  

  AddArticle(){
    console.log(this.article)
  }

}
