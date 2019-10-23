import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AKWA';
  articles = [];
  channels = []
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    var id = localStorage.getItem('id')
    if (id == null) {
      this.router.navigate(['/login'])
    }
    console.log('app.component, getting id: ' + id)
  }

}

