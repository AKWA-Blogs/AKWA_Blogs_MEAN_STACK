import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = "http://localhost:8000";

  constructor(private _http: HttpClient) {
  }

  // Articles CRUD

  getArticles() {
    return this._http.get(this.baseUrl + '/articles')
  };

  getArticleID(id) {
    return this._http.get(this.baseUrl + `/articles/${id}`);
  };

  postArticle(data) {
    return this._http.post(this.baseUrl + '/article', data);
  };

  putArticle(data) {
    return this._http.get(this.baseUrl + `/articles/${data._id}`, data)
  };

  deleteArticle(id) {
    return this._http.delete(this.baseUrl + `/article/${id}`)
  };


  // Comment CRUD

  postComment(data) {
    return this._http.post(this.baseUrl + '/comment', data);
  };

  deleteComment(id) {
    return this._http.delete(this.baseUrl + `/comment/${id}`)
  };


  // Users CRUD

  getUsers() {
    return this._http.get(this.baseUrl + '/users')
  };

  getUsersID(id) {
    return this._http.get(this.baseUrl + `/users/${id}`);
  };

  postSignUp(data) {
    return this._http.post(this.baseUrl + '/user/signup', data);
  }

  postLogin(data) {
    return this._http.post(this.baseUrl + '/user/login', data);
  };

  putUser(data) {
    return this._http.get(this.baseUrl + `/users/${data._id}`, data)
  };

  deleteUser(id) {
    return this._http.delete(this.baseUrl + `/users/${id}`)
  };


  // Channel CRUD

  getChannels() {
    return this._http.get(this.baseUrl + '/articles')
  };

  getChannelID(id) {
    return this._http.get(this.baseUrl + `/channels/${id}`);
  };

  postChannel(data) {
    return this._http.post(this.baseUrl + '/channel', data);
  };

  putChannel(data) {
    return this._http.get(this.baseUrl + `/channels/${data._id}`, data)
  };

  deleteChannel(id) {
    return this._http.delete(this.baseUrl + `/channels/${id}`);
  };

  getSubChannels(id) {
    return this._http.get(this.baseUrl + `/channels/subscribed/${id}`);
  };

}
