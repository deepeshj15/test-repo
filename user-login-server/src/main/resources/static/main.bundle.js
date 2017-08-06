webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!--<app-login></app-login>-->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });



var routes = [
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_1__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>User Login</h1>\n  <div *ngIf=\"userLogin\">\n    <div class=\"form-group\">\n      <table aliign=\"center\">\n        <tr>\n          <td item-width=\"50%\">User Name: </td>\n          <td item-width=\"50%\"><input type=\"text\" class=\"form-control\" \n            required [(ngModel)]=\"userLogin.userId\" />\n          </td>\n        </tr>\n        <tr>\n          <td item-width=\"50%\">Password: </td>\n          <td item-width=\"50%\"><input type=\"password\" class=\"form-control\" \n            required [(ngModel)]=\"userLogin.password\" />\n          </td>\n        </tr>\n        <tr>\n          <td item-width=\"100%\" colspan=\"2\" align=\"center\">\n            <button (click)=\"onLogin(userLogin)\" class=\"btn btn-success\">Login</button>\n          </td>\n        </tr>\n      </table>\n      <table aliign=\"center\">\n        <tr>\n          <td item-width=\"100%\">Not a registered user? then \n            <a routerLink=\"/registration\" routerLinkActive=\"active\">register here</a>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_login__ = __webpack_require__("../../../../../src/app/model/login.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent() {
        this.userLogin = new __WEBPACK_IMPORTED_MODULE_1__model_login__["a" /* Login */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (userLogin) {
        this.userLogin = userLogin;
        console.log("Data: " + this.userLogin.userId + ", " + this.userLogin.password);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login = (function () {
    function Login() {
    }
    ;
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ "../../../../../src/app/model/registration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registration; });
var Registration = (function () {
    function Registration() {
    }
    ;
    return Registration;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>User Regstration</h1>\n  <div *ngIf=\"errorMsg\">\n    <label class=\"alert alert-danger\">{{errorMsg}}</label>\n  </div>\n  <div *ngIf=\"successMsg\">\n    <label class=\"alert alert-success\">{{successMsg}}</label>\n  </div>\n  <div *ngIf=\"registration\">\n    <div class=\"form-group\">\n      <table aliign=\"center\">\n        <tr>\n          <td item-width=\"50%\">User Id</td>\n          <td item-width=\"50%\">\n            <input type=\"text\" #box required [(ngModel)]=\"registration.userId\" />\n          </td>\n        </tr>\n        <tr>\n          <td item-width=\"50%\">Password</td>\n          <td item-width=\"50%\">\n            <input type=\"password\" class=\"form-control\" required [(ngModel)]=\"registration.password\"\n              />\n          </td>\n        </tr>\n        <tr>\n          <td item-width=\"50%\">User Name</td>\n          <td item-width=\"50%\">\n            <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"registration.userName\"\n              />\n          </td>\n        </tr>\n        <tr>\n          <td item-width=\"50%\">Email</td>\n          <td item-width=\"50%\">\n            <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"registration.email\"\n              />\n          </td>\n        </tr>\n        <tr>\n          <td item-width=\"50%\">City</td>\n          <td item-width=\"50%\">\n            <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"registration.city\"\n              />\n          </td>\n        </tr>\n        <tr>\n          <td item-width=\"50%\">Date Of Birth</td>\n          <td item-width=\"50%\">\n            <input type=\"date\" [(ngModel)]=\"registration.birthdate\" />\n          </td>\n        </tr>\n        <tr>\n          <td item-width=\"50%\">Secret Question</td>\n          <td item-width=\"50%\">\n            <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"registration.secretQuestion\" \n              /> \n          </td>\n        </tr>\n        <tr>\n          <td item-width=\"50%\">Secret Answer</td>\n          <td item-width=\"50%\">\n            <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"registration.secretAnswer\" \n              /> \n          </td>\n        </tr>\n        <tr>\n          <td item-width=\"100%\" colspan=\"2\" align=\"center\">\n            <button (click)=\"onRegister(registration)\" class=\"btn btn-success\">Register</button>\n          </td>\n        </tr>\n      </table>\n      <table>\n        <tr>\n          <td item-width=\"100%\">Proceed to User login \n            <a routerLink=\"/login\" routerLinkActive=\"active\"> here</a>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_registration__ = __webpack_require__("../../../../../src/app/model/registration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_registration_service__ = __webpack_require__("../../../../../src/app/service/registration.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationComponent = (function () {
    function RegistrationComponent(registrationService) {
        this.registrationService = registrationService;
        this.registration = new __WEBPACK_IMPORTED_MODULE_1__model_registration__["a" /* Registration */]();
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.onRegister = function (registration) {
        var _this = this;
        this.registration = registration;
        this.errorMsg = null;
        this.successMsg = null;
        console.log("Data: " + this.registration.userId + ", " + this.registration.password + ", "
            + this.registration.email + ", " + registration.confirmPassword + ", " + this.registration.userName
            + ", " + this.registration.city + ", " + this.registration.birthdate + ", "
            + this.registration.secretQuestion + ", " + registration.secretAnswer);
        this.errorMsg = this.registrationService.validateUserRegistration(this.registration);
        if (this.errorMsg == null) {
            this.registrationService.validateUser(registration).subscribe(function (data) {
                console.log("Response: ", data);
                if (data['statusCode'] == 0) {
                    _this.errorMsg = data['message'];
                }
                else if (data['statusCode'] == 1) {
                    _this.successMsg = data['message'];
                }
            });
        }
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-registration',
        template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_registration_service__["a" /* RegistrationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_registration_service__["a" /* RegistrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_registration_service__["a" /* RegistrationService */]) === "function" && _a || Object])
], RegistrationComponent);

var _a;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/registration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationService = (function () {
    function RegistrationService(http) {
        this.http = http;
    }
    RegistrationService.prototype.validateUserRegistration = function (registration) {
        var error = this.validateTextField(registration.userId, 'User Id');
        if (error == null) {
            error = this.validateTextField(registration.password, 'Password');
        }
        if (error == null) {
            error = this.validateTextField(registration.userName, 'User Name');
        }
        if (error == null) {
            error = this.validateTextField(registration.email, 'Email');
        }
        if (error == null) {
            error = this.validateTextField(registration.city, 'City');
        }
        if (error == null) {
            error = this.validateDateField(registration.birthdate, 'Date of Birth ');
        }
        return error;
    };
    RegistrationService.prototype.validateTextField = function (field, fieldName) {
        if (field == null || field == '') {
            return "The provided " + fieldName + " is either null or empty.";
        }
        return null;
    };
    RegistrationService.prototype.validateDateField = function (field, fieldName) {
        if (field == null) {
            return "The provided " + fieldName + " is either null or empty.";
        }
        return null;
    };
    RegistrationService.prototype.validateUser = function (registration) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post("http://localhost:8080/registration/validateUser", registration, options)
            .map(function (data) { return data.json(); });
        //.catch((err)=>{ return err; });
        //headers.append('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
        //headers.append('Access-Control-Allow-Origin', "*");
        //let options = new RequestOptions({ headers: headers, method: "get" }); 
        /*return this.http.get("http://localhost:8080/registration/validateUser/"
        + registration.userId)
                .map((data)=>{ return data.json() })
                .catch((err)=>{ return err; })*/
    };
    return RegistrationService;
}());
RegistrationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], RegistrationService);

var _a;
//# sourceMappingURL=registration.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map