(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subfeed-subfeed-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/subfeed/subfeed.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/subfeed/subfeed.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-8 ml-auto mr-auto\">\n        <div class=\"page-categories\">\n          <ul class=\"nav nav-pills nav-pills-danger nav-pills-icons justify-content-center\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#link7\" role=\"tablist\">\n                Articles Feed\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link8\" role=\"tablist\">\n                Subscribed Channels\n              </a>\n            </li>\n          </ul>\n          <br>\n          <br>\n          <div class=\"tab-content tab-space tab-subcategories\">\n            <div class=\"tab-pane active\" id=\"link7\">\n              <div *ngFor=\"let channel of channels\">\n                <div class=\"row\" *ngIf=\"channel.articles.length>0\">\n                  <div class=\"col-md-4\" *ngFor=\"let article of channel.articles\">\n                    <div class=\"card card-product\">\n                      <div class=\"card-header card-header-image\" data-header-animation=\"true\">\n                          <img class=\"img\" src=\"./assets/img/card-1.jpg\">\n                      </div>\n                      <div class=\"card-body\">\n                        <div class=\"card-actions text-center\">\n                          <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"View\"\n                            [matTooltipPosition]=\"'below'\">\n                            <i class=\"material-icons\">art_track</i>\n                          </button>\n                        </div>\n                        <h4 class=\"card-title\">\n                          <p>{{article.title}}</p>\n                        </h4>\n                        <div class=\"card-description\">\n                          <p>Created at: {{article.createdAt}}</p>\n                        </div>\n                      </div>\n                      <div class=\"card-footer\">\n                        <div class=\"price\">\n                          <p class=\"stats\"><i class=\"material-icons\">person</i>{{article.author.first_name}}\n                            {{article.author.last_name}}</p>\n                        </div>\n                        <div class=\"stats\">\n                          <a href=\"\">\n                            <p>Channel: {{channel.name}}</p>\n                          </a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n            <div class=\"tab-pane\" id=\"link8\">\n              <div class=\"row\" *ngIf=\"channels.length>0\">\n                <div class=\"col-md-4\" *ngFor=\"let channel of channels\">\n                  <div class=\"card card-profile\">\n                    <div class=\"card-header card-avatar\" data-header-animation=\"true\">\n                        <img class=\"img\" style=\"width: 200px;\" src=\"./assets/img/card-1.jpg\">\n                    </div>\n                    <div class=\"card-body\">\n                      <div class=\"card-actions text-center\">\n                        <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"View\"\n                          [matTooltipPosition]=\"'below'\">\n                          <i class=\"material-icons\">art_track</i>\n                        </button>\n                        <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\" matTooltip=\"Unsubscribe\" [matTooltipPosition]=\"'below'\" (click)=\"unsubscribe(channel._id)\">\n                            <i class=\"material-icons\">close</i>\n                          </button>\n                      </div>\n                      <h4 class=\"card-title\">\n                        <p>{{channel.name}}</p>\n                      </h4>\n                      <div class=\"card-description\">\n                        <p>Created at: {{channel.description}}</p>\n                      </div>\n                    </div>\n                    <div class=\"card-footer\">\n                      <div class=\"price\">\n                        <p class=\"stats\"><i class=\"material-icons\">person</i>{{channel.owner.first_name}}\n                          {{channel.owner.last_name}}</p>\n                      </div>\n                    </div>\n                  </div>\n                  \n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/subfeed/subfeed.component.ts":
/*!**********************************************!*\
  !*** ./src/app/subfeed/subfeed.component.ts ***!
  \**********************************************/
/*! exports provided: SubfeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubfeedComponent", function() { return SubfeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubfeedComponent = /** @class */ (function () {
    function SubfeedComponent(_httpService) {
        this._httpService = _httpService;
        this.articles = {};
        this.channels = {};
    }
    SubfeedComponent.prototype.ngOnInit = function () {
        this.getChannelsFromService();
    };
    // getArticlesFromService() {
    //   let observable = this._httpService.getArticles();
    //   observable.subscribe(articles => {
    //     console.log("Got our Articles!!", articles);
    //     this.articles = articles;
    //   });
    // }
    SubfeedComponent.prototype.getChannelsFromService = function () {
        var _this = this;
        var observable = this._httpService.getSubChannels('5daecf2f9b83707a68aae65b');
        observable.subscribe(function (channels) {
            console.log("Got subbed channel!!", channels[0]['articles']);
            _this.channels = channels;
        });
    };
    SubfeedComponent.prototype.unsubscribe = function (id) {
        console.log("Click unsubscribe is working with num param: " + id);
    };
    SubfeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subfeed-cmp',
            template: __webpack_require__(/*! raw-loader!./subfeed.component.html */ "./node_modules/raw-loader/index.js!./src/app/subfeed/subfeed.component.html")
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], SubfeedComponent);
    return SubfeedComponent;
}());



/***/ }),

/***/ "./src/app/subfeed/subfeed.module.ts":
/*!*******************************************!*\
  !*** ./src/app/subfeed/subfeed.module.ts ***!
  \*******************************************/
/*! exports provided: SubfeedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubfeedModule", function() { return SubfeedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _subfeed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subfeed.component */ "./src/app/subfeed/subfeed.component.ts");
/* harmony import */ var _subfeed_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subfeed.routing */ "./src/app/subfeed/subfeed.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SubfeedModule = /** @class */ (function () {
    function SubfeedModule() {
    }
    SubfeedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_subfeed_routing__WEBPACK_IMPORTED_MODULE_6__["SubfeedRoutes"]),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            declarations: [_subfeed_component__WEBPACK_IMPORTED_MODULE_5__["SubfeedComponent"]]
        })
    ], SubfeedModule);
    return SubfeedModule;
}());



/***/ }),

/***/ "./src/app/subfeed/subfeed.routing.ts":
/*!********************************************!*\
  !*** ./src/app/subfeed/subfeed.routing.ts ***!
  \********************************************/
/*! exports provided: SubfeedRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubfeedRoutes", function() { return SubfeedRoutes; });
/* harmony import */ var _subfeed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subfeed.component */ "./src/app/subfeed/subfeed.component.ts");

var SubfeedRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _subfeed_component__WEBPACK_IMPORTED_MODULE_0__["SubfeedComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=subfeed-subfeed-module.js.map