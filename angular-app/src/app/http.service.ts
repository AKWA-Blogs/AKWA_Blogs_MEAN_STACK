import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
        // this.getUsers();
        // this.getArticles();
   }

   getUsers(){
    return this._http.get('http://localhost:8000/users');
  };
  getArticles(){
    return this._http.get('http://localhost:8000/articles');
  }

}
