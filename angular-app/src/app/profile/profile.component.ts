import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import UserSchema from '../../../../server/models/user';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user : UserSchema;
  url : String | ArrayBuffer
  
  userTags = ["rrrr", "err"];

  constructor (private _httpService: HttpService, private router: Router) {}
  fnameFormControl = new FormControl('', [Validators.required,Validators.minLength(3)])
  lnameFormControl = new FormControl('', [Validators.required,Validators.minLength(3)])
  emailFormControl = new FormControl('', [Validators.required,Validators.email])
  avatarFormControl = new FormControl('')

  ngOnInit() {
    // loading user:
    let observable = this._httpService.getUsersID(localStorage.getItem('id'))
    observable.subscribe(data => {
        this.user = data
        this.userTags =  this.user.tags
        console.log('sidebar, got user: ', this.user.tags)
    })
  }

  updated = {first_name: "", last_name: "", email: "", tags:""}

  onSubmit () {
    console.log('updating profile...')
    if (this.updated.first_name.length < 3 || this.updated.last_name.length < 3) {return}
    this.user.first_name = this.updated.first_name
    this.user.last_name = this.updated.last_name
    this.user.email = this.updated.email
    this.user.tags = this.updated.tags
    let observable = this._httpService.putUser(this.user)
    observable.subscribe(data => {
      console.log('done!, data: ',data)
      swal({
        title: "Profile updated!",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        type: "success"
    }).catch(swal.noop)

      this.router.navigate(['/'])
    })
  }

  onSelectFile(event) {
    console.log('choosing photo...')
    // if (event.target.files && event.target.files[0]) {
    //   var reader = new FileReader();

    //   reader.readAsDataURL(event.target.files[0]); // read file as data url

    //   reader.onload = (event) => { // called once readAsDataURL is completed
    //     this.url = event.target.result;
    //   }
    // }
  }

}
