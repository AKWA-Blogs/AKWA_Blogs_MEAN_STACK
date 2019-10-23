import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AKWA';
  articles = [];
  channels = []
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getArticlesFromService();
    this.getChannelsFromService();
  };

  getArticlesFromService(){
    let observable = this._httpService.getArticles();
    observable.subscribe(data => { 
      console.log("All Articles", data)
      this.articles.push(data)
      
    })
  };

  getChannelsFromService(){
    let observable = this._httpService.getChannels();
    observable.subscribe(data => { 
      console.log("All Channels", data)
      this.channels.push(data)
      
    });
  };

}

