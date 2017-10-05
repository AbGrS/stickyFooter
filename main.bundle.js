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

module.exports = "<!--The whole content below can be removed with the new code.-->\n<router-outlet></router-outlet>\n\n"

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sticky_footer_sticky_footer_component__ = __webpack_require__("../../../../../src/app/sticky-footer/sticky-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_app_service_service__ = __webpack_require__("../../../../../src/app/service/app-service.service.ts");
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
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__sticky_footer_sticky_footer_component__["a" /* StickyFooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_4__sticky_footer_sticky_footer_component__["a" /* StickyFooterComponent */]
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__service_app_service_service__["a" /* AppServiceService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/service/app-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppServiceService = (function () {
    function AppServiceService() {
        this.allData = [
            {
                data: "Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
                extraData: "I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around"
            }, {
                data: "Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
                extraData: "I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around"
            }, {
                data: "Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
                extraData: "I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around"
            }, {
                data: "Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
                extraData: "I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around"
            }, {
                data: "Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
                extraData: "I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around"
            }, {
                data: "Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum\
		Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
                extraData: "I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around \
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around\
  		I think she will survive, but she won’t stick around"
            }
        ];
    }
    return AppServiceService;
}());
AppServiceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AppServiceService);

//# sourceMappingURL=app-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/sticky-footer/sticky-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".eachSection{\r\n\tmin-height: 200px;\r\n\ttext-align: left;\r\n\tpadding: 15px;\r\n\tborder-bottom: 2px solid #ccc\r\n}\r\na:hover{\r\n\tcursor: pointer;\r\n}\r\n\r\n.eachSection{\r\n\tposition: relative;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sticky-footer/sticky-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;margin: 0 auto;width: 70%;border:2px solid #ccc;min-height: 500px\"  (scroll)=\"onScroll($event)\">\n\t\n\t<div class=\"eachSection\" *ngFor=\"let i of allData;let z=index\" id=\"extraSection{{z+1}}\">\n\t\t{{i.data}} <br/>\n\t\t<br/>\n\t\t<a (click)=\"showMore('extraSection'+(z+1))\">more</a>\n\t\t<div *ngIf=\"showExtra['extraSection'+(z+1)]\">\n\t\tsdfsdfasfasfasf\n\t\t\t{{i.extraData}}\n\t\t</div>\n\t\t<div id=\"extraSection{{z+1}}Sticky\" style=\"border: 1px solid black;background: pink;padding:20px 10px;bottom:0;width: 100%\">\n\t\t\tSection one Upvote\n\t\t</div>\n\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sticky-footer/sticky-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_app_service_service__ = __webpack_require__("../../../../../src/app/service/app-service.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickyFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var StickyFooterComponent = (function () {
    function StickyFooterComponent(document, appService) {
        this.document = document;
        this.appService = appService;
        this.showExtra = {};
        this.showStrickyFooter = {};
        this.fixedOffset = {};
        this.liOfExpandedIds = [];
        this.topPositions = {};
    }
    StickyFooterComponent.prototype.ngOnInit = function () {
        this.allData = this.appService.allData;
        //window.addEventListener('scroll', this.onScroll, true); //third parameter
        // 	var el1= document.getElementById('extraSection1');
        // this.topPositions['extraSection1']= el1.getBoundingClientRect()['y'];
        // var el1= document.getElementById('extraSection2');
        // this.topPositions['extraSection1']= el1.getBoundingClientRect()['y'];
    };
    StickyFooterComponent.prototype.showMore = function (elementId) {
        this.showExtra[elementId] = true;
        //this.expandedStickyHeaderId= elementId;
        this.liOfExpandedIds.push(elementId);
        // var el1= document.getElementById(elementId);
        // this.topPositions[elementId]= el1.getBoundingClientRect()['y'];
    };
    StickyFooterComponent.prototype.onWindowScroll = function (event) {
        if (this.liOfExpandedIds.length > 0) {
            this.liOfExpandedIds.map(function (item) {
                var el = document.getElementById(item);
                var params = el.getBoundingClientRect();
                var elSticky = document.getElementById(item + 'Sticky');
                if (params['top'] < window.innerHeight / 2 && params['bottom'] > window.innerHeight) {
                    elSticky.style.position = 'fixed';
                    elSticky.style.width = "67%";
                }
                else {
                    elSticky.style.position = 'static';
                    elSticky.style.width = "100%";
                }
                // if(this.topPositions['extraSection1']){
                // 	console.log(item +' - '+ params['top'])
                // 	console.log(window.scrollY)
                // 	console.log(window.innerHeight)
                // 	el.style.position= 'fixed';
                // 	el.style.width= '67%';
                // 	el.style.zIndex='1'
                // }else{
                // 	console.log(item+' -'+params['top'])
                // 	console.log(window.scrollY)
                // 	console.log(window.innerHeight )
                // 	el.style.position= 'static';
                // 	el.style.width= '100%';
                // }
            });
        }
        if ((document.documentElement.scrollTop + window.innerHeight) > (document.body.clientHeight) - 100) {
            this.fetchMoreItems();
        }
        // 	this.expandedStickyHeaderId= Math.min()
        // 	let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        // var el= document.getElementById(this.expandedStickyHeaderId);
        // var params;
        // if(el){
        // 	params= el.getBoundingClientRect();
        // 	var abc= params.toJSON()
        // 	this.fixedOffset= Object.assign({}, abc);
        // 	if(this.fixedOffset && this.fixedOffset['y']){
        // 		if(number-(params.y+this.fixedOffset['y']) <400 && number-(params.y+this.fixedOffset['y'])>-250){
        //  	this.showStrickyFooter[this.expandedStickyHeaderId]= true
        //  }else{
        //  	this.showStrickyFooter[this.expandedStickyHeaderId]= false
        //  }
        // 	}
        // }
        // console.log(number);
        //  console.log(params);
    };
    StickyFooterComponent.prototype.fetchMoreItems = function () {
        this.allData.push({
            data: 'loaded 1',
            extraData: 'Extra'
        });
    };
    StickyFooterComponent.prototype.showExtraTrue = function (param) {
        if (this.showExtra[param] === true) {
            return true;
        }
        else {
            return false;
        }
    };
    return StickyFooterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StickyFooterComponent.prototype, "onWindowScroll", null);
StickyFooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-sticky-footer',
        template: __webpack_require__("../../../../../src/app/sticky-footer/sticky-footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sticky-footer/sticky-footer.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_app_service_service__["a" /* AppServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_app_service_service__["a" /* AppServiceService */]) === "function" && _a || Object])
], StickyFooterComponent);

var _a;
//# sourceMappingURL=sticky-footer.component.js.map

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