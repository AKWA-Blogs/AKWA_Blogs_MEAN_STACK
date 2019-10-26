import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from "@angular/router";
import swal from 'sweetalert2';

declare var $: any;

@Component({
    selector: 'app-addArticle-cmp',
    templateUrl: 'addArticle.component.html'
})

export class AddArticleComponent implements OnInit {
    article = {
        title: '',
        body: '',
        author: {},
        channelId: '',
        tags: [],
        comments: []
    };

    regularItems: string[] = [];

    constructor(private _httpService: HttpService, private router: Router) { }

    ngOnInit() {
    }

    AddArticle() {
        var tags = this.regularItems;
        var keys = Object.keys(tags);
        var arr = []
        for (var i = 0, n = keys.length; i < n; i++) {
            var key = keys[i];
            arr[key] = tags[key];
        };
        for (var i = 0, n = arr.length; i < n; i++) {
            this.article.tags.push(arr[i].display)
        }

        let channelID = this._httpService.getUsersChannels(localStorage.getItem('id'))
        channelID.subscribe(data => {
            this.article.channelId += data['_id']

            console.log('id   ', data["_id"])
            // console.log(this.article)

            let user = this._httpService.getUsersID(localStorage.getItem('id'))
            user.subscribe(data => {
                this.article.author = data;
                // console.log("user ", data)
                console.log('######', this.article)
                let observable = this._httpService.postArticle(this.article)
                observable.subscribe(data => {
                    console.log("Article ", data)
                });

            });
        });
        swal({
            title: "Article created!",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success",
            type: "success"
        }).catch(swal.noop)
        this.router.navigate(['channel/viewMyChannel']);

    }

}
