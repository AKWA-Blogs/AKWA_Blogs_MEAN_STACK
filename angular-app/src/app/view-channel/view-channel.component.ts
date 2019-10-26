import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-view-channel',
  templateUrl: './view-channel.component.html',
})
export class ViewChannelComponent implements OnInit {
  channel = {}

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getChannelFromService();
  }
    getChannelFromService() {
    
      let observable = this._httpService.getChannel('5daec8521e8d9a78b1a355e7');
      console.log("in channel")
  
      observable.subscribe(data => {
        console.log("Got our channel!!", data);
        this.channel = data
      }
      )
    }
  }
  