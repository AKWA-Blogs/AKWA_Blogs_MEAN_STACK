import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  postToServer(route, data) {
    return this._http.post(route, data);
  }
  constructor(private _http: HttpClient) {}
}
