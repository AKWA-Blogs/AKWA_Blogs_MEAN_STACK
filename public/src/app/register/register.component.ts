import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpService } from '../http.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fnameFormControl = new FormControl('', [Validators.required]);
  lnameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passFormControl = new FormControl('', [Validators.required]);
  confirmFormControl = new FormControl('', [Validators.required]);
  
  constructor(private _httpService : HttpService) {}

  ngOnInit() {
  }

  newUser = {first_name: "", last_name: "", email: "", password: ""}

  onSubmit () {
    console.log("registering...")
    let observable = this._httpService.postSignUp(this.newUser)
    observable.subscribe(data => {
      console.log('done! ', data['token'])
      var user = jwt_decode(user['token'])
      console.log('id: '+user.id)
      
    })
  }
}
