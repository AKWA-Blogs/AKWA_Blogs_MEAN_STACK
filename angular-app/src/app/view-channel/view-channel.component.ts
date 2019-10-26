import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-view-channel',
  templateUrl: './view-channel.component.html',
})
export class ViewChannelComponent implements OnInit {
  channel = {}

  constructor(private _httpService: HttpService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getChannelFromService();
  }
    getChannelFromService() {
    
      let observable = this._httpService.getChannel(this.activatedRoute.snapshot.params.id);
      console.log("in view channel",this.activatedRoute.snapshot.params.id)
  
      observable.subscribe(data => {
        console.log("Got our channel!!", data);
        this.channel = data
      }
      )
    }
  }
  