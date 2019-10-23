import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl: string = "http://localhost:8000/";
  constructor(private _http: HttpClient) {
        this.getUsers();
   }

   getUsers(){
    return this._http.get('http://localhost:8000/users');
  };

}
