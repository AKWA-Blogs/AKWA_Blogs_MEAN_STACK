import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpService } from '../http.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passFormControl = new FormControl('', [
    Validators.required,
  ]);
  
  constructor(private _httpService : HttpService, private router : Router) { }

  ngOnInit() {
    if (localStorage.getItem('id') != null) {
      this.router.navigate(['/'])
    }
  }

  user = {email: "", password: ""}

  onSubmit () {
    console.log('logging...')
    let observable = this._httpService.postLogin(this.user)
    observable.subscribe(data => {
      console.log('done! ', data['token'])
      var user = jwt_decode(data['token'])
      localStorage.setItem('id', user.id)
      console.log('setting "id" in local: '+localStorage.getItem('id'))
      this.router.navigate(['/'])
    })
  }
}
