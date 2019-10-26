import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import swal from 'sweetalert2';


declare var $: any;
declare interface Task {
  title: string;
  checked: boolean;
}
@Component({
  selector: 'app-subfeed-cmp',
  templateUrl: 'subfeed.component.html'
})

export class SubfeedComponent implements OnInit {
  articles = {}
  channels = {}
  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {
    this.getChannelsFromService();
  }

  getChannelsFromService() {
    let observable = this._httpService.getSubChannels(localStorage.getItem('id'));
    observable.subscribe(channels => {
      console.log("Got subbed channel!!", channels[0]['articles']);
      this.channels = channels;
    });
  }
  unsubFromChannel(id: string) {
    swal({
      title: 'Unsubribe?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      confirmButtonText: 'Yes',
      buttonsStyling: false
    }).then((result) => {
      if (result.value) {
        const data = { "channel_id": id, "user_id": localStorage.getItem('id') };
        let observable = this._httpService.unsubsribeFromChannel(data);
        observable.subscribe(data => {
          console.log(data);
          console.log("unsubbed from channel");
        });
        this.getChannelsFromService();
        swal(
          {
            title: 'Unsubsribed!',
            type: 'success',
            confirmButtonClass: "btn btn-success",
            buttonsStyling: false
          }
        )
      }
    })


  }


}
