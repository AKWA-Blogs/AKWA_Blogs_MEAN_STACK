(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./node_modules/jwt-decode/lib/atob.js":
/*!*********************************************!*\
  !*** ./node_modules/jwt-decode/lib/atob.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function InvalidCharacterError(message) {
  this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function polyfill (input) {
  var str = String(input).replace(/=+$/, '');
  if (str.length % 4 == 1) {
    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}


module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;


/***/ }),

/***/ "./node_modules/jwt-decode/lib/base64_url_decode.js":
/*!**********************************************************!*\
  !*** ./node_modules/jwt-decode/lib/base64_url_decode.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var atob = __webpack_require__(/*! ./atob */ "./node_modules/jwt-decode/lib/atob.js");

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code;
  }));
}

module.exports = function(str) {
  var output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }

  try{
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
};


/***/ }),

/***/ "./node_modules/jwt-decode/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/jwt-decode/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base64_url_decode = __webpack_require__(/*! ./base64_url_decode */ "./node_modules/jwt-decode/lib/base64_url_decode.js");

function InvalidTokenError(message) {
  this.message = message;
}

InvalidTokenError.prototype = new Error();
InvalidTokenError.prototype.name = 'InvalidTokenError';

module.exports = function (token,options) {
  if (typeof token !== 'string') {
    throw new InvalidTokenError('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos]));
  } catch (e) {
    throw new InvalidTokenError('Invalid token specified: ' + e.message);
  }
};

module.exports.InvalidTokenError = InvalidTokenError;


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/lock/lock.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/lock/lock.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header lock-page header-filter\" style=\"background-image: url('./assets/img/lock.jpg'); background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 ml-auto mr-auto\">\r\n          <div class=\"card card-profile text-center card-hidden\">\r\n            <div class=\"card-header \">\r\n              <div class=\"card-avatar\">\r\n                <a href=\"#pablo\">\r\n                  <img class=\"img\" src=\"./assets/img/faces/avatar.jpg\">\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body \">\r\n              <h4 class=\"card-title\">Tania Andrew</h4>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Enter Password\" type=\"password\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"card-footer justify-content-center\">\r\n              <a href=\"#pablo\" class=\"btn btn-rose btn-round\">Unlock</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <footer class=\"footer \">\r\n    <div class=\"container\">\r\n      <nav class=\"pull-left\">\r\n        <ul>\r\n          <li>\r\n            <a href=\"https://www.creative-tim.com\">\r\n              Creative Tim\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://creative-tim.com/about-us\">\r\n              About Us\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"http://blog.creative-tim.com\">\r\n              Blog\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://www.creative-tim.com/license\">\r\n              Licenses\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n      <div class=\"copyright pull-right\">\r\n        &copy;\r\n          {{test | date: 'yyyy'}}, made with <i class=\"material-icons\">favorite</i> by\r\n        <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header login-page header-filter\" filter-color=\"black\"\r\n    style=\"background-image: url('./assets/img/login.jpg'); background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\r\n    \r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto\">\r\n          <div class=\"card\">\r\n            <form  (submit)= \"onSubmit()\">\r\n              <div class=\"card-header card-header-rose card-header-icon\">\r\n                <div class=\"card-icon\">\r\n                  <i class=\"material-icons\">contacts</i>\r\n                </div>\r\n                <h4 class=\"card-title\">Login Form</h4>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <mat-form-field class=\"full-width\">\r\n                  <input matInput placeholder=\"Email *\" [formControl]=\"emailFormControl\" [(ngModel)]=\"user.email\">\r\n                  <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                    Please enter a valid email address\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                    Email is <strong>required</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n                {{emailFormControl.errors | json}}\r\n                <mat-form-field class=\"full-width\">\r\n                  <input type=\"password\" matInput placeholder=\"Password *\" [formControl]=\"passFormControl\" [(ngModel)]=\"user.password\">\r\n                  <mat-error *ngIf=\"passFormControl.hasError('required')\">\r\n                    Password is <strong>required</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n                <div class=\"category form-category\">* Required fields</div>\r\n              </div>\r\n              <div class=\"card-footer text-right\">\r\n                <div class=\"form-group\">\r\n                  <button mat-raised-button type=\"submit\" class=\"btn btn-rose btn-fill btn-wd\">Login</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pricing/pricing.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pricing/pricing.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header pricing-page header-filter\" style=\"background-image: url('./assets/img/bg-pricing.jpg'); background-size: cover; background-position: top center;\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 ml-auto mr-auto text-center\">\r\n          <h2 class=\"title\">Pick the best plan for you</h2>\r\n          <h5 class=\"description\">You have Free Unlimited Updates and Premium Support on each package.</h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-6\">\r\n          <div class=\"card card-pricing card-plain\">\r\n            <h6 class=\"card-category\"> Freelancer</h6>\r\n            <div class=\"card-body\">\r\n              <div class=\"card-icon icon-white \">\r\n                <i class=\"material-icons\">weekend</i>\r\n              </div>\r\n              <h3 class=\"card-title\">Free</h3>\r\n              <p class=\"card-description\">This is good if your company size is between 2 and 10 Persons.</p>\r\n            </div>\r\n            <div class=\"card-footer justify-content-center \">\r\n              <a href=\"#pablo\" class=\"btn btn-round btn-white\">Choose Plan</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6\">\r\n          <div class=\"card card-pricing \">\r\n            <h6 class=\"card-category\"> Small Company</h6>\r\n            <div class=\"card-body\">\r\n              <div class=\"card-icon icon-rose \">\r\n                <i class=\"material-icons\">home</i>\r\n              </div>\r\n              <h3 class=\"card-title\">29$</h3>\r\n              <p class=\"card-description\">This is good if your company size is between 2 and 10 Persons.</p>\r\n            </div>\r\n            <div class=\"card-footer justify-content-center \">\r\n              <a href=\"#pablo\" class=\"btn btn-round btn-rose\">Choose Plan</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6\">\r\n          <div class=\"card card-pricing card-plain\">\r\n            <h6 class=\"card-category\"> Medium Company</h6>\r\n            <div class=\"card-body\">\r\n              <div class=\"card-icon icon-white \">\r\n                <i class=\"material-icons\">business</i>\r\n              </div>\r\n              <h3 class=\"card-title\">69$</h3>\r\n              <p class=\"card-description\">This is good if your company size is between 11 and 99 Persons.</p>\r\n            </div>\r\n            <div class=\"card-footer justify-content-center \">\r\n              <a href=\"#pablo\" class=\"btn btn-round btn-white\">Choose Plan</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6\">\r\n          <div class=\"card card-pricing card-plain\">\r\n            <h6 class=\"card-category\"> Extra Pack</h6>\r\n            <div class=\"card-body\">\r\n              <div class=\"card-icon icon-white \">\r\n                <i class=\"material-icons\">account_balance</i>\r\n              </div>\r\n              <h3 class=\"card-title\">159$</h3>\r\n              <p class=\"card-description\">This is good if your company size is 99+ Persons.</p>\r\n            </div>\r\n            <div class=\"card-footer justify-content-center \">\r\n              <a href=\"#pablo\" class=\"btn btn-round btn-white\">Choose Plan</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <footer class=\"footer \">\r\n      <div class=\"container\">\r\n        <nav class=\"pull-left\">\r\n          <ul>\r\n            <li>\r\n              <a href=\"https://www.creative-tim.com\">\r\n                Creative Tim\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://creative-tim.com/about-us\">\r\n                About Us\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"http://blog.creative-tim.com\">\r\n                Blog\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://www.creative-tim.com/license\">\r\n                Licenses\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n        <div class=\"copyright pull-right\">\r\n          &copy;\r\n          {{test | date: 'yyyy'}}, made with <i class=\"material-icons\">favorite</i> by\r\n          <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header register-page header-filter\" filter-color=\"black\" style=\"background-image: url('./assets/img/register.jpg'); background-size: cover; background-position: top center;\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-10 ml-auto mr-auto\">\r\n          <div class=\"card card-signup\">\r\n            <h2 class=\"card-title text-center\">Register</h2>\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-5 ml-auto\">\r\n                  <div class=\"info info-horizontal\">\r\n                    <div class=\"icon icon-rose\">\r\n                      <i class=\"material-icons\">timeline</i>\r\n                    </div>\r\n                    <div class=\"description\">\r\n                      <h4 class=\"info-title\">Marketing</h4>\r\n                      <p class=\"description\">\r\n                        We've created the marketing campaign of the website. It was a very interesting collaboration.\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"info info-horizontal\">\r\n                    <div class=\"icon icon-primary\">\r\n                      <i class=\"material-icons\">code</i>\r\n                    </div>\r\n                    <div class=\"description\">\r\n                      <h4 class=\"info-title\">Fully Coded in HTML5</h4>\r\n                      <p class=\"description\">\r\n                        We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"info info-horizontal\">\r\n                    <div class=\"icon icon-info\">\r\n                      <i class=\"material-icons\">group</i>\r\n                    </div>\r\n                    <div class=\"description\">\r\n                      <h4 class=\"info-title\">Built Audience</h4>\r\n                      <p class=\"description\">\r\n                        There is also a Fully Customizable CMS Admin Dashboard for this product.\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-5 mr-auto\">\r\n                  <div class=\"social text-center\">\r\n                    <button mat-raised-button class=\"btn btn-just-icon btn-round btn-twitter\">\r\n                      <i class=\"fa fa-twitter\"></i>\r\n                    </button>\r\n                    <button mat-raised-button class=\"btn btn-just-icon btn-round btn-dribbble\">\r\n                      <i class=\"fa fa-dribbble\"></i>\r\n                    </button>\r\n                    <button mat-raised-button class=\"btn btn-just-icon btn-round btn-facebook\">\r\n                      <i class=\"fa fa-facebook\"> </i>\r\n                    </button>\r\n                    <h4 class=\"mt-3\"> or be classical </h4>\r\n                  </div>\r\n                  <form class=\"form\" method=\"\" action=\"\">\r\n                    <div class=\"form-group has-default\">\r\n                      <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">\r\n                            <i class=\"material-icons\">face</i>\r\n                          </span>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group has-default\">\r\n                      <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">\r\n                            <i class=\"material-icons\">mail</i>\r\n                          </span>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Email...\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group has-default\">\r\n                      <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">\r\n                            <i class=\"material-icons\">lock_outline</i>\r\n                          </span>\r\n                        </div>\r\n                        <input type=\"password\" placeholder=\"Password...\" class=\"form-control\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-check\">\r\n                      <label class=\"form-check-label\">\r\n                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\r\n                        <span class=\"form-check-sign\">\r\n                          <span class=\"check\"></span>\r\n                        </span>\r\n                        I agree to the\r\n                        <a href=\"#something\">terms and conditions</a>.\r\n                      </label>\r\n                    </div>\r\n                    <div class=\"text-center\">\r\n                      <a href=\"#pablo\" class=\"btn btn-primary btn-round mt-4\">Get Started</a>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <footer class=\"footer \">\r\n      <div class=\"container\">\r\n        <nav class=\"pull-left\">\r\n          <ul>\r\n            <li>\r\n              <a href=\"https://www.creative-tim.com\">\r\n                Creative Tim\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://creative-tim.com/about-us\">\r\n                About Us\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"http://blog.creative-tim.com\">\r\n                Blog\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://www.creative-tim.com/license\">\r\n                Licenses\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n        <div class=\"copyright pull-right\">\r\n          &copy;\r\n        {{test | date: 'yyyy'}}, made with <i class=\"material-icons\">favorite</i> by\r\n          <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/lock/lock.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/lock/lock.component.ts ***!
  \**********************************************/
/*! exports provided: LockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockComponent", function() { return LockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LockComponent = /** @class */ (function () {
    function LockComponent() {
        this.test = new Date();
    }
    LockComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('lock-page');
        body.classList.add('off-canvas-sidebar');
        var card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    };
    LockComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('lock-page');
        body.classList.remove('off-canvas-sidebar');
    };
    LockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lock-cmp',
            template: __webpack_require__(/*! raw-loader!./lock.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/lock/lock.component.html")
        })
    ], LockComponent);
    return LockComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: MyErrorStateMatcher, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var LoginComponent = /** @class */ (function () {
    function LoginComponent(element, _httpService, router) {
        this.element = element;
        this._httpService = _httpService;
        this.router = router;
        this.test = new Date();
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.passFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        this.user = { email: "", password: "" };
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // if (localStorage.getItem('id') != null) {
        //     this.router.navigate(['/'])
        // }
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        var card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('logging...');
        var observable = this._httpService.postLogin(this.user);
        observable.subscribe(function (data) {
            console.log('done! ', data['token']);
            var user = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(data['token']);
            localStorage.setItem('id', user.id);
            console.log('setting "id" in local: ' + localStorage.getItem('id'));
            _this.router.navigate(['/']);
        });
    };
    LoginComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        body.classList.remove('off-canvas-sidebar');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-cmp',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages.routing */ "./src/app/pages/pages.routing.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lock/lock.component */ "./src/app/pages/lock/lock.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { FlexLayoutModule } from '@angular/flex-layout';





var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_pages_routing__WEBPACK_IMPORTED_MODULE_5__["PagesRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__["PricingComponent"],
                _lock_lock_component__WEBPACK_IMPORTED_MODULE_8__["LockComponent"],
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routing.ts":
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/*! exports provided: PagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutes", function() { return PagesRoutes; });
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lock/lock.component */ "./src/app/pages/lock/lock.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");




var PagesRoutes = [
    {
        path: '',
        children: [{
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            }, {
                path: 'lock',
                component: _lock_lock_component__WEBPACK_IMPORTED_MODULE_2__["LockComponent"]
            }, {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]
            }, {
                path: 'pricing',
                component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_1__["PricingComponent"]
            }]
    }
];


/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.ts ***!
  \****************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
        this.test = new Date();
    }
    PricingComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('pricing-page');
        body.classList.add('off-canvas-sidebar');
    };
    PricingComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('pricing-page');
        body.classList.remove('off-canvas-sidebar');
    };
    PricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing-cmp',
            template: __webpack_require__(/*! raw-loader!./pricing.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pricing/pricing.component.html")
        })
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        this.test = new Date();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('register-page');
        body.classList.add('off-canvas-sidebar');
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('register-page');
        body.classList.remove('off-canvas-sidebar');
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-cmp',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.component.html")
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map