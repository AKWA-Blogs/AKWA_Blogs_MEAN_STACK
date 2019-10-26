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
  
  tags = ["rrrr", "err"];

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
        this.tags = this.user['tags'];

        console.log('sidebar, got user: ', this.tags);
    })
  }


  onSubmit () {
    console.log('updating profile...'+this.tags)
    if (this.user.first_name.length < 3 || this.user.last_name.length < 3) {return}
    // this.user.tags = this.updated.tags
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
