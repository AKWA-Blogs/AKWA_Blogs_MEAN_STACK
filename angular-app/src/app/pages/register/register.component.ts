import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { PasswordValidation } from './password-validator.component';
import { HttpService } from '../../http.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-cmp',
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  private toggleButton: any;
  private sidebarVisible: boolean;
  private nativeElement: Node;

  fnameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  lnameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);
  confirmFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  constructor(private element: ElementRef, private _httpService: HttpService, private router: Router) {
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
  }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('register-page');
    body.classList.add('off-canvas-sidebar');
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('register-page');
    body.classList.remove('off-canvas-sidebar');
  }

  newUser = { first_name: "", last_name: "", email: "", password: "" }

  onSubmit() {
    if (this.passFormControl.value != this.confirmFormControl.value) {return}
    if (this.newUser.first_name.length < 3 || this.newUser.last_name.length < 3) {return}
    console.log("registering...")
    let observable = this._httpService.postSignUp(this.newUser)
    observable.subscribe(data => {
      console.log('done! ', data['token'])
      var user = jwt_decode(data['token'])
      localStorage.setItem('id', user.id)
      console.log('setting "id" in local: ' + localStorage.getItem('id'))
      this.router.navigate(['/'])
    })
  }
}
