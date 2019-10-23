import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { HttpService } from '../http.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fnameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  lnameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passFormControl = new FormControl('', [Validators.required]);
  confirmFormControl = new FormControl('', [Validators.required]);
  
  constructor(private _httpService : HttpService, private router : Router) {}

  ngOnInit() {
    if (localStorage.getItem('id') != null) {
      this.router.navigate(['/'])
    }
  }

  newUser = {first_name: "", last_name: "", email: "", password: ""}

  onSubmit () {
    console.log("registering...")
    let observable = this._httpService.postSignUp(this.newUser)
    observable.subscribe(data => {
      console.log('done! ', data['token'])
      var user = jwt_decode(data['token'])
      localStorage.setItem('id', user.id)
      console.log('setting "id" in local: '+localStorage.getItem('id'))
      this.router.navigate(['/'])
    })
  }
}
