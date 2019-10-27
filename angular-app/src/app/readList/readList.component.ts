import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import swal from 'sweetalert2';


declare var $: any;
declare interface Task {
  title: string;
  checked: boolean;
}
@Component({
  selector: 'app-readList-cmp',
  templateUrl: 'readList.component.html'
})

export class ReadListComponent implements OnInit {
  articles = {}
  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {
    this.getrticlesFromService();
  }

  getrticlesFromService() {
    let observable = this._httpService.getReadList(localStorage.getItem('id'));
    observable.subscribe(articles => {
      console.log("Got  articles list!!", );
      this.articles = articles;
    });
  }
  removeFromList(id: string) {
    swal({
      title: 'Remove?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      confirmButtonText: 'Yes',
      buttonsStyling: false
    }).then((result) => {
      if (result.value) {
        const data = { "article_id": id, "user_id": localStorage.getItem('id') };
        let observable = this._httpService.removeFromReadList(data);
        observable.subscribe(data => {
          console.log(data);
          console.log("unsubbed from channel");
        });
        this.getrticlesFromService();
        swal(
          {
            title: 'Removed!',
            type: 'success',
            confirmButtonClass: "btn btn-success",
            buttonsStyling: false
          }
        )
      }
    })


  }


}
