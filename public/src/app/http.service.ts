import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  
  // Articles CRUD

  getArticles(){
    return this._http.get('/articles')
  };

  getArticleID(id){
    return this._http.get(`/articles/${id}`);
  };

  postArticle(data){
    return this._http.post('/article', data);
  };

  putArticle(data){
    return this._http.get(`/articles/${data._id}`, data)
  };

  deleteArticle(id){
    return this._http.delete(`/article/${id}`)
  };


  // Comment CRUD

  postComment(data){
    return this._http.post('/comment', data);
  };

  deleteComment(id){
    return this._http.delete(`/comment/${id}`)
  };


  // Users CRUD

  getUsers(){
    return this._http.get('/users')
  };

  getUsersID(id){
    return this._http.get(`/users/${id}`);
  };

  postSignUp(data) {
    return this._http.post('/user/signup', data);
  }

  postLogin(data){
    return this._http.post('/user/login', data);
  };

  putUser(data){
    return this._http.get(`/users/${data._id}`, data)
  };

  deleteUser(id){
    return this._http.delete(`/users/${id}`)
  };


  // Channel CRUD

  getChannels(){
    return this._http.get('/articles')
  };

  getChannelID(id){
    return this._http.get(`/channels/${id}`);
  };

  postChannel(data){
    return this._http.post('/channel', data);
  };

  putChannel(data){
    return this._http.get(`/channels/${data._id}`, data)
  };

  deleteChannel(id){
    return this._http.delete(`/channels/${id}`);
  };
}
