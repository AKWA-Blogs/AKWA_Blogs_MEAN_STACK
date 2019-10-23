import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  
  getArticles(){
    return this._http.get('/articles')
  }

  getChannels(){
    return this._http.get('/articles')
  }

}
