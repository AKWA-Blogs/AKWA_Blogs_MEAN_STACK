import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

declare const require: any;

declare var $: any;

declare interface Task {
  title: string;
  checked: boolean;

}

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.component.html',
  styles: [`md-calendar {
      width: 300px;
  }`]
})
export class ExploreComponent implements OnInit {

  articles = {}
  selectedArticles = {}
  channels = {}
  tags = {}
  constructor(private _httpService: HttpService) {

  }
  simpleSlider = 40;
  doubleSlider = [20, 60];

  regularItems = ['Pizza', 'Pasta', 'Parmesan'];
  touch: boolean;

  selectedValue: string;
  currentCity: string[];

  selectTheme = 'primary';
  cities = [
    { value: 'paris-0', viewValue: 'Paris' },
    { value: 'miami-1', viewValue: 'Miami' },
    { value: 'bucharest-2', viewValue: 'Bucharest' },
    { value: 'new-york-3', viewValue: 'New York' },
    { value: 'london-4', viewValue: 'London' },
    { value: 'barcelona-5', viewValue: 'Barcelona' },
    { value: 'moscow-6', viewValue: 'Moscow' },
  ];

  ngOnInit() {

    this.getArticlesFromService();
  }

  myFunc(val: any) {
    // code here
  }
  getArticlesFromService() {
    let observable = this._httpService.expChannel('5daffc8c44476296b93ab61a');
    console.log("in expArticle")

    observable.subscribe(data => {
      console.log("Got our Articles!!", data);
      this.articles = data


      /*       for(var x in data ) {
              if (data[x]['_id']=='5daec7cd1e8d9a78b1a355e6'){
                this.selectedArticles = data[x];
                console.log(x,"Go________fvdse____________!!", this.selectedArticles);
      
              }
              else{
                this.articles[x]= data[x]
      
              }
            }
            console.log(x,"Go____________________!!", this.articles);
       */
    });
  }

  getChannelsFromService() {

  }
}