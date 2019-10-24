(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subfeed-subfeed-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/subfeed/subfeed.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/subfeed/subfeed.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 ml-auto mr-auto\">\r\n        <div class=\"page-categories\">\r\n          <ul class=\"nav nav-pills nav-pills-danger nav-pills-icons justify-content-center\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#link7\" role=\"tablist\">\r\n                Articles Feed\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link8\" role=\"tablist\">\r\n                Subscribed Channels\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <br>\r\n          <br>\r\n          <div class=\"tab-content tab-space tab-subcategories\">\r\n            <div class=\"tab-pane active\" id=\"link7\">\r\n              <div class=\"row\" *ngIf=\"articles.length>0\">\r\n                <div class=\"col-md-4\" *ngFor=\"let article of articles\">\r\n                  <div class=\"card card-product\">\r\n                    <div class=\"card-header card-header-image\" data-header-animation=\"true\">\r\n                      <a href=\"#pablo\">\r\n                        <img class=\"img\" src=\"./assets/img/card-1.jpg\">\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                      <div class=\"card-actions text-center\">\r\n                        <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"View\"\r\n                          [matTooltipPosition]=\"'below'\">\r\n                          <i class=\"material-icons\">art_track</i>\r\n                        </button>\r\n                      </div>\r\n                      <h4 class=\"card-title\">\r\n                        <p>{{article.title}}</p>\r\n                      </h4>\r\n                      <div class=\"card-description\">\r\n                        <p>Created at: {{article.createdAt}}</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                      <div class=\"price\">\r\n                        <p class=\"stats\"><i class=\"material-icons\">person</i>{{article.author.first_name}}</p>\r\n                      </div>\r\n                      <div class=\"stats\">\r\n                        <!-- <a href=\"\">\r\n                          <p>Channel: </p>\r\n                        </a> -->\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"link8\">\r\n              Sub Channels\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
        this.getArticlesFromService();
    };
    SubfeedComponent.prototype.getArticlesFromService = function () {
        var _this = this;
        var observable = this._httpService.getArticles();
        observable.subscribe(function (data) {
            console.log("Got our Articles!!", data);
            _this.articles = data;
        });
    };
    SubfeedComponent.prototype.getChannelsFromService = function () {
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