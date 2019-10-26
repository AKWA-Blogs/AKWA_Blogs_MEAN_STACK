import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';

import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormBuilder, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { PasswordValidation } from './password-validator.component';
import { HttpService } from '../../http.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

declare var $: any;

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy {
    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    passFormControl = new FormControl('', [
        Validators.required,
    ]);

    constructor(private element: ElementRef, private _httpService: HttpService, private router: Router) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        // if (localStorage.getItem('id') != null) {
        //     this.router.navigate(['/'])
        // }
        var navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    }

    user = { email: "", password: "" }

    onSubmit() {
        console.log('logging... data: ',this.user)
        let observable = this._httpService.postLogin(this.user)
        observable.subscribe(data => {
            console.log('done! ', data['token'])
            var user = jwt_decode(data['token'])
            localStorage.setItem('id', user.id)
            localStorage.setItem('name', user.user_first_name+" "+user.user_last_name)
            console.log('setting "id" in local: ' + localStorage.getItem('id'))
            console.log('setting "name" in local: ' + localStorage.getItem('name'))
            this.router.navigate(['/'])
        })
    }

    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }

    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        body.classList.remove('off-canvas-sidebar');
    }
}
