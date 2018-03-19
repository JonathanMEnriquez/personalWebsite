webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container{\n    font-family: 'Avenir Next', Arial, Helvetica, sans-serif;\n    text-align: center;\n}\n\n#container h1{\n    font-weight: bolder;\n    letter-spacing: 0.75vw;\n    padding: 1.5em;\n    text-shadow: 0.5px 0.5px black;\n}\n\n.header{\n    height: 5vw;\n    padding: 1vw;\n    background-color: hsl(1, 24%, 50%);\n    color: white;\n    font-family: 'Abel';\n}\n\n.material-icons.md-48 { \n    font-size: 3em; \n}\n\n.main{\n    /* width: 100%;\n    margin-left: 50%; */\n    vertical-align: top;\n    margin-top: -10%;\n    margin-left: 40%;\n}\n\nmat-grid-tile {\n    vertical-align: top;\n}\n\n.parallax-container{\n    /* The image used */\n    background-image: url(\"/assets/lake_pretty.gif\");\n\n    /* Full height */\n    height: 100%; \n\n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.containerHeader {\n    width: 40vw;\n    height: 40vw;\n    color: white;\n    font-size: 3vw;\n}\n\n#wideLine{\n    margin-top: 5vw;\n    margin-bottom: 5vw;\n}\n\n.aboutContent {\n    font-size: 1.25vw;\n    padding: 10%;\n    font-weight: 500;\n}\n\n#test {\n    z-index: 1;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div class=\"header\">\n    <h5></h5>\n    </div>\n    <h1>ABOUT ME</h1>\n    <mat-grid-list cols=\"10\" rowHeight=\"1:1.5\">\n        <mat-grid-tile [colspan]=\"4\">\n            <div class=\"parallax-container\" materialize=\"parallax\">\n                <h1 class=\"containerHeader\">Coding</h1>\n            </div>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"6\">\n            <p class=\"aboutContent\">{{aboutContent[0]}}</p>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"6\">\n            <p class=\"aboutContent\">{{aboutContent[1]}}</p>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"4\">\n            <div class=\"parallax-container\" materialize=\"parallax\">\n                <h1 class=\"containerHeader\">Social Work</h1>\n            </div>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"4\">\n            <div class=\"parallax-container\" materialize=\"parallax\">\n                <h1 class=\"containerHeader\">Hobbies</h1>\n            </div>\n            </mat-grid-tile>\n            <mat-grid-tile [colspan]=\"6\">\n                <p class=\"aboutContent\">{{aboutContent[2]}}</p>\n        </mat-grid-tile>\n    </mat-grid-list>\n    <mat-divider id=\"wideLine\"></mat-divider>\n    <div class=\"header\">\n        <h5></h5>\n    </div>\n</div>\n<!-- <div class=\"parallax-container\" >\n  <div class=\"parallax\" materialize=\"parallax\"><img class=\"main\" src=\"assets/lake_pretty.gif\"></div>\n</div>\n<div class=\"body\">\n  <h2>About me</h2>\n  <p>Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.\n\n      Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.\n\n      Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.\n\n      Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.\n\n      Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.\n\n      Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.\n\n      Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.\n\n      Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.\n\n      Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.\n\n      Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.\n\n      Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.\n\n    </p>\n</div>\n<div class=\"parallax-container\" >\n    <div class=\"parallax\" materialize=\"parallax\"><img class=\"main\" src=\"assets/waterfall.gif\"></div>\n</div>\n<div class=\"body\">\n    Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.\n\n    Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.\n\n    Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.\n\n    Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.\n\n    Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.\n</div>\n<mat-grid-list cols=\"20\" rowHeight=\"1:1\">\n    <mat-grid-tile [colspan]=\"3\"></mat-grid-tile>\n    <mat-grid-tile><button [routerLink]=\"['']\" mat-icon-button color=\"warn\"><mat-icon class=\"material-icons md-48\">home</mat-icon></button></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"3\"></mat-grid-tile>\n    <mat-grid-tile><button [routerLink]=\"['about']\" mat-icon-button color=\"warn\"><mat-icon class=\"material-icons md-48\">info</mat-icon></button></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"4\"></mat-grid-tile>\n    <mat-grid-tile><button [routerLink]=\"['code']\" mat-icon-button color=\"warn\"><mat-icon class=\"material-icons md-48\">code</mat-icon></button></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"3\"></mat-grid-tile>\n    <mat-grid-tile><button mat-icon-button color=\"warn\"><mat-icon class=\"material-icons md-48\">textsms</mat-icon></button></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"3\"></mat-grid-tile>\n\n    <mat-grid-tile id=\"footer\" [colspan]=\"20\" [rowspan]=\"1\"></mat-grid-tile>\n</mat-grid-list> -->"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.aboutContent = [
            "My coding journey began in June of 2017. I began to learn Swift using Udemy courses. By September, I realized that I wanted this to be my career. I attended Coding Dojo from November till March, 2018. I can now safely say that I love coding!",
            "Received my B.A. in Psychology and I worked in Social Work for the past 8 years. Working with lower-income older adults made me realize the importance of familiarity with modern technologies to avoid social isolation. This is what sparked my desire to go into this field to help address others' social needs.",
            "As you probably have already guessed, I'm a huge basketball fan. I try to get on the court at least twice a week, while I still can. I also catch as many Lakers games as I can. Other than that, I love just relaxing and watching TV with my wife Laura. (We got married by a lake -- hence, the gif)",
        ];
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var ApiService = /** @class */ (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    ApiService.prototype.createNewMessage = function (messageObj) {
        return this._http.post('/api/message', messageObj);
    };
    ApiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var homev2_component_1 = __webpack_require__("../../../../../src/app/homev2/homev2.component.ts");
var about_component_1 = __webpack_require__("../../../../../src/app/about/about.component.ts");
var code_component_1 = __webpack_require__("../../../../../src/app/code/code.component.ts");
var contact_component_1 = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
var page_not_found_component_1 = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
var routes = [
    { path: '', component: homev2_component_1.Homev2Component },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'code', component: code_component_1.CodeComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main{\n    width: 100%;\n    height: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var angular2_materialize_1 = __webpack_require__("../../../../angular2-materialize/dist/index.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var material_module_1 = __webpack_require__("../../../../../src/app/material.module.ts");
var homev2_component_1 = __webpack_require__("../../../../../src/app/homev2/homev2.component.ts");
var about_component_1 = __webpack_require__("../../../../../src/app/about/about.component.ts");
var code_component_1 = __webpack_require__("../../../../../src/app/code/code.component.ts");
var contact_component_1 = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
var api_service_1 = __webpack_require__("../../../../../src/app/api.service.ts");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var page_not_found_component_1 = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                homev2_component_1.Homev2Component,
                about_component_1.AboutComponent,
                code_component_1.CodeComponent,
                contact_component_1.ContactComponent,
                page_not_found_component_1.PageNotFoundComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                angular2_materialize_1.MaterializeModule,
                material_module_1.MaterialModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule
            ],
            providers: [api_service_1.ApiService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/code/code.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon {\n    width: 20%;\n}\n\n.header{\n    height: 5vw;\n    padding: 1vw;\n    background-color: hsl(1, 24%, 50%);\n    color: white;\n    font-family: 'Abel';\n}\n\nmat-tab {\n    height: 4vh;\n    margin-left: -10px;\n}\n\n.tab-content{\n    height: 34vw;\n    padding: 2vw;\n    border: 4px solid #3d4c5a;\n    font-size: 1.5vw;\n    font-family: 'Avenir Next', Arial, Helvetica, sans-serif;\n}\n\n.tab-content p {\n    font-size: 0.75em;\n    text-align: center;\n    padding-left: 16vh;\n    padding-right: 16vh;\n}\n\n.langHeader {\n    padding: 12vh;\n    text-align: center;\n    font-weight: bold;\n    letter-spacing: 1vw;\n    font-size: 3.85vw;\n}\n\nmat-card {\n    margin-bottom: 12vh;\n    background-color: #3d4c5a;\n    color: lightgray;\n}\n\n.journey {\n    font-family: 'Avenir Next', Arial, Helvetica, sans-serif;\n    text-align: center;\n    margin-bottom: 10vh;\n}\n\n.journey h5 {\n    font-size: 3.5em;\n    font-weight: bold;\n    display: inline-block;\n    letter-spacing: 1vw;\n    margin-bottom: 10vh;\n    background: url(\"/assets/journey.png\");\n    background-size: 100% 5vh;\n    background-repeat: no-repeat;\n    padding: 3vh, 10vh, 3vh, 10vh;\n}\n\n.journey h6 {\n    font-size: 2em;\n}\n\n.collapsible-header {\n    /* padding-left: 5%;\n    padding-right: 6vw; */\n}\n\n#dojo {\n    width: 2.25vw;\n}\n\n.stackName {\n    letter-spacing: 1vw;\n}\n\n.stackNum {\n    font-family: 'Abel';\n    font-size: 0.5em;\n    font-weight: bold;\n    letter-spacing: normal;\n    margin-right: 1vw;\n}\n\n.icon {\n    width: 2em;\n    height: 2em;\n}\n\n.divider {\n    height: 1.5vw;\n    padding: 1vw;\n    background-color: #48596b;\n    margin-bottom: 12vh;\n}\n\n.products {\n    /* width: 30vw; */\n    margin: 1em;\n}\n\n#imgContainer {\n    width: 350px;\n    padding: 2vh;\n}\n\n.centered {\n    text-align: center;\n    padding-top: 2vh;\n    font-size: 1.25vw;\n}\n\n.collapsibleContent {\n    font-size: 1.15em;\n}\n\n#fixMargin {\n    margin-left: -76%;\n}\n\n.bold {\n    font-weight: bold;\n}\n\n#fixMarginSmaller {\n    margin-left: -33%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/code/code.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <h5></h5>\n</div>\n<mat-card>\n    <mat-card-content>\n      <h2 class=\"langHeader\">LANGUAGES AND FRAMEWORKS</h2>\n      <mat-tab-group class=\"tab-group\">\n        <mat-tab label=\"Tab 1\">\n            <ng-template mat-tab-label>\n              <img src=\"/assets/ios.png\" class=\"icon\" alt=\"iOS\">\n            </ng-template>\n            <div class=\"tab-content\">\n                {{iosContent}} <br><br>\n                <p>1. <span class=\"bold\"> Runner's HIIE </span> - Running training with intervals app. Users can register, save routes, save workout sessions, and view results! 2nd Dojo Hackathon winner. (Source code is in a private repo on GitLab)</p>\n                <div id=\"imgContainer\">\n                  <a href=\"http://www.youtube.com/watch?v=wesn6CoC790\"><img src=\"/assets/projects/runners.gif\" id=\"fixMargin\"  width=\"850\" alt=\"Runner's HIIE\"></a>\n                </div>\n                <p>2. <span class=\"bold\"> Anonymous Dojo </span> - App using Muli-peer Connectivity to connect with fellow Dojo students. <a href=\"https://github.com/JonathanMEnriquez/anonymousDojo\"> Source Code.</a></p>\n                <div id=\"imgContainer\">\n                  <img src=\"/assets/projects/anon.gif\" id=\"fixMargin\"  width=\"850\" alt=\"Anonymous Dojo\">\n                </div>\n                <p>3. <span class=\"bold\"> Quasar </span> - Survive the onslaught of cute aliens. Control firing and movement by moving the phone. No buttons! <a href=\"https://github.com/JonathanMEnriquez/QuasarGame\"> Source Code.</a></p>\n                <div id=\"imgContainer\">\n                  <img src=\"/assets/projects/quasar.gif\" id=\"fixMargin\"  width=\"850\" alt=\"Quasar\">\n                </div>\n              </div>  \n          </mat-tab>\n        <mat-tab label=\"Tab 2\">\n          <ng-template mat-tab-label>\n              <img src=\"/assets/angular.png\" class=\"icon\" alt=\"Angular\">\n          </ng-template>\n          <div class=\"tab-content\">\n            {{angularContent}}\n            <div class=\"centered\">\n              1. <a href=\"https://github.com/JonathanMEnriquez/personalWebsite.git\"> Link</a> to the source code for this site. <br>\n              2. <a href=\"https://github.com/JonathanMEnriquez/productsFullMean\"> Angular (with a Node server and MongoDB) Assignment \"PPM\" source code</a> <br>\n              <div id=\"imgContainer\">\n                <img src=\"/assets/projects/products.png\" id=\"fixMarginSmaller\" class=\"z-depth-4\" class=\"materialboxed\" width=\"500\" alt=\"PPA Assignment\">\n              </div>\n            </div> \n          </div>\n        </mat-tab>\n        <mat-tab label=\"Tab 3\">\n          <ng-template mat-tab-label>\n            <img src=\"/assets/djangoSimple.png\" class=\"icon\" alt=\"Django\">\n          </ng-template>\n          <div class=\"tab-content\">\n            {{djangoContent}}\n            <div class=\"centered\">\n              1. Django / SQLite Project \"Coders. On Demand\" Live Site. <a href=\"https://github.com/JonathanMEnriquez/rentcoder\"> The Source Code.</a> <br>\n              <div id=\"imgContainer\">\n                <img src=\"/assets/projects/coders.png\" class=\"z-depth-4\" id=\"fixMarginSmaller\" class=\"materialboxed\" width=\"500\" alt=\"Coders. On Demand.\">\n                <img src=\"/assets/projects/models.png\" class=\"z-depth-4\" id=\"fixMarginSmaller\" width=\"500\" alt=\"Models for Coders\">\n              </div>\n            </div> \n          </div>  \n        </mat-tab>\n        <mat-tab label=\"Tab 4\">\n          <ng-template mat-tab-label>\n              <img src=\"/assets/mongoLeaf.png\" class=\"icon\" alt=\"MongoDB\">\n          </ng-template>\n          <div class=\"tab-content\">\n            {{mongoContent}}\n            <div class=\"centered\">\n              1. Book / Authors API Assignment. <a href=\"#\"> Source Code.</a> <br>\n              <div id=\"imgContainer\">\n                <img src=\"/assets/projects/booksApi.png\" id=\"fixMarginSmaller\" class=\"z-depth-4\" class=\"materialboxed\" width=\"500\" alt=\"Coders. On Demand.\">\n              </div>\n            </div> \n          </div>  \n        </mat-tab>\n        <mat-tab label=\"Tab 5\">\n          <ng-template mat-tab-label>\n              <img src=\"/assets/nodejs.png\" class=\"icon\" alt=\"Node\">\n          </ng-template>\n          <div class=\"tab-content\">\n              {{nodeContent}}\n              <div class=\"centered\">\n                1. <a href=\"https://github.com/JonathanMEnriquez/personalWebsite.git\"> Link</a> to the source code for this site. <br>\n                <div id=\"imgContainer\">\n                  <img src=\"/assets/projects/portfolioServer.png\" id=\"fixMarginSmaller\" class=\"z-depth-4\" width=\"500\" alt=\"this.server\">\n                </div>\n              </div> \n            </div> \n        </mat-tab>\n        <mat-tab label=\"Tab 6\">\n          <ng-template mat-tab-label>\n            <img src=\"/assets/materialize.png\" class=\"icon\" alt=\"Materialize\">\n          </ng-template>\n          <div class=\"tab-content\">\n              {{materializeContent}}\n              <div class=\"centered\">\n                  <a href=\"https://github.com/JonathanMEnriquez/personalWebsite.git\"> Link</a> to the source code for this site. <br>\n                </div> \n            </div> \n        </mat-tab>\n        <mat-tab label=\"Tab 7\">\n            <ng-template mat-tab-label>\n              <img src=\"/assets/socket.png\" class=\"icon\" alt=\"Socket io\">\n            </ng-template>\n            <div class=\"tab-content\">\n                {{socketContent}}\n                <div class=\"centered\">\n                    1. <a href=\"https://github.com/JonathanMEnriquez/dojoChatRoom\"> Live chat room source code</a> <br>\n                    <div id=\"imgContainer\">\n                      <img src=\"/assets/projects/dojoChat.png\" id=\"fixMarginSmaller\" class=\"materialboxed\" width=\"500\" alt=\"Chat Assignment\">\n                    </div>\n                  </div> \n              </div> \n          </mat-tab>\n      </mat-tab-group>\n    </mat-card-content>\n  </mat-card>\n<!-- <div class=\"divider\"><h5></h5></div> -->\n<div class=\"journey\">\n  <h5>THE <img src=\"/assets/codingDojo.png\" id=\"dojo\" alt=\"Coding Dojo\"> JOURNEY</h5>\n  <ul materialize=\"collapsible\" class=\"collapsible popout\" data-collapsible=\"accordion\">\n  <li>\n    <div class=\"collapsible-header\" ><h6 class=\"stackName\"><span class=\"stackNum\">FIRST STACK: </span>Python</h6></div>\n    <div class=\"collapsible-body\"><p class=\"collapsibleContent\">{{pythonContent}}</p></div>\n  </li>\n  <li>\n    <div class=\"collapsible-header\"><h6 class=\"stackName\"><span class=\"stackNum\">SECOND STACK: </span>iOS </h6></div>\n    <div class=\"collapsible-body\"><p class=\"collapsibleContent\">{{iOSContent}}</p></div>\n  </li>\n  <li>\n    <div class=\"collapsible-header\"><h6 class=\"stackName\"><span class=\"stackNum\">THIRD STACK: </span>MEAN</h6></div>\n    <div class=\"collapsible-body\"><p class=\"collapsibleContent\">{{meanContent}}</p></div>\n  </li>\n</ul>\n</div>\n<div class=\"header\">\n    <h5></h5>\n</div>"

/***/ }),

/***/ "../../../../../src/app/code/code.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var CodeComponent = /** @class */ (function () {
    function CodeComponent() {
        this.angularContent = "I learned the Angular framework as part of the third stack of my curriculum (MEAN Stack). This front-end of this site was built using Angular, including their Material components (in addition to using Materialize). What I most like about the framework is the structure that allows for multiple front-end contributors. The lightening of the burden on the server is also great.";
        this.djangoContent = "I learned Django during the latter portion of my first stack (Python), in addition to learning to work with SQLite databases. I particularly enjoyed the Modeling portion of the MVC design. I did all of the Models (the Controllers just routed) and the Views for the admin portion of my first group project, which was a tongue-in-cheek pseudo-E-Commerce company to connect ill-prepared Coding Dojo students with experienced coders willing to take their Belt-Exams for them for a fee. Recently, I have joined some Meetup groups focusing on the computer-learning aspects of Python.";
        this.iosContent = "The iOS stack was greatly enjoyable for me. Between the hackathons and the cool tools at my disposal, there were non-stop challenges. We won both of our hackathons, and I also had the chance to present a project using Apple's Multipeer Connectivity, which was great. Following the bootcamp, I have continued working on Runner's HIIE, which is a running interval training app (utilizing a Firebase DB) that we hope to submit for App Store approval in the coming weeks. I will also be working on a party-game app for the Apple Watch in the coming weeks, as well.";
        this.materializeContent = "Materialize was not part of the coursework. It was a framework I decided to incorporate into this project. It does make doing the CSS simpler / more eye-popping and it will be a framework I use in future front-end projects.";
        this.mongoContent = "MongoDB was the first NO-SQL database I encountered, as well as the last one taught during my team at the bootcamp. It served as the backend for this site for storage of the messages sent to me (see below).";
        this.nodeContent = "As part of the MEAN stack, I learned some of the node modules, primarily Express, Body-Parser and Mongoose. As part of the functionality of this site, I also learned how to incorporate NodeMailer. I very much enjoy how intuitive Node feels most of all. Next on the list is refactoring my code to make the server file as clean as possible.";
        this.socketContent = "Sockets are really cool! It was something I first encountered during the MEAN stack and it is definitely a tool I am excited to keep using. In fact, one of the projects on the queue will incorporate it for real-time updates. Below is a little chat room made during my second day using socket.io.";
        this.pythonContent = "After two weeks of learning web fundamentals (HTML, CSS, JS, and JQuery), my cohort began our first stack. We focused on learning the language during the first week. We then learned our first micro-framework: Flask. Following this, we learned how to use our first database, MySQL, as well as SQLite as part of the Django. Along the way, we also learned how to use some tools that would help us do CRUD, including BCrypt, Regex, as well as the knowledge to build backend form validations. A passing grade of 8.0 or higher on the exam was required to advance to the second stack. Learning my first back-end frameworks was definitely a challenge, but I was able to pass with a perfect score.";
        this.iOSContent = "Prior to the Dojo, I had learned some of the fundamentals of Swift through Udemy courses and YouTube videos. This proved to be helpful at the outset of the second stack. As of Thursday of the first week, we were split into groups of three to compete in a 24-hour hackathon. We were tasked with utilizing Core Motion in our app, so we built a Galaga-like game where the user controlled the ships using Yaw and fired by shaking it toward the target. We won the hackathon. The following Thursday, we again competed in a hackathon — this time using Core Location. We built a basic version of our interval-training running app, Runner’s H.I.I.E., and were fortunate to win that hackathon, as well. We again focused on CRUD operations for the exam, which I was able to pass with a perfect score.";
        this.meanContent = "The last of the stacks was MongoDB, Express, Angular, and Node. We began familiarizing ourselves with the intricacies of Javascript, as well as being introuced to TypeScript. During the second week, we began using Express.js, EJS to serve the HTML, and socket.io for some real-time applications. We also were introduced to MongoDB and Mongoose. The third week was dedicated to Angular and full MEAN applications. It was at the conclusion of the third week that were expected to be able to put together a full MEAN project with CRUD operations and deploy it on Amazon AWS in 4.5 hours. I was fortunate to again get a perfect score. The graduation class was 7 out of cohort which began with 20. It was the conclusion of a challenging and fun 14 weeks.";
    }
    CodeComponent.prototype.ngOnInit = function () {
    };
    CodeComponent = __decorate([
        core_1.Component({
            selector: 'app-code',
            template: __webpack_require__("../../../../../src/app/code/code.component.html"),
            styles: [__webpack_require__("../../../../../src/app/code/code.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CodeComponent);
    return CodeComponent;
}());
exports.CodeComponent = CodeComponent;


/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#contact {\n    width: 60%;\n    margin-top: 4vh;\n}\n\n#usImg {\n    width: 60%;\n}\n\n.header{\n    height: 5vw;\n    padding: 1vw;\n    background-color: #9e6261;\n    color: white;\n    font-family: 'Abel';\n}\n\n.contactHeader {\n    background-color: #48596b;\n    height: 2.5vh;\n    padding: 0.5vw;\n    margin-bottom: 2vh;\n}\n\n#footer {\n    background-color: #9e6261;\n    color: white;\n    font-family: 'Abel';\n    text-align: left;\n    vertical-align: top;\n}\n\nmat-grid-tile {\n    vertical-align: top;\n    text-align: left;\n}\n\n#nameLogo {\n    width: 48%;\n}\n\n#copyright {\n    color: black;\n    font-size: 0.75em;\n}\n\nmat-grid-tile a {\n    letter-spacing: 0.25em;\n    color: lightgray;\n    font-size: 1em;\n}\n\nmat-grid-tile h6 {\n    color: lightgray;\n}\n\nmat-form-field {\n    width: 96%;\n    padding-top: 5%;\n    padding-left: 2%;\n    padding-right: 2%;\n}\n\nbutton {\n    margin-left: 2%;\n    margin-top: 6vh;\n}\n\n.success {\n    color: green;\n    text-align: center;\n    font-size: 1em;\n    margin-top: 4vh;\n}\n\ninput {\n    color: black;\n}\n\n.errors {\n    color: red;\n    text-align: center;\n    font-size: 1em;\n    margin-top: 4vh;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <h5></h5>\n</div>\n<div id=\"contact\">\n  <div class=\"contactHeader\">\n      <h5></h5>\n  </div>\n  <div class=\"card\">\n      <div class=\"card-image waves-effect waves-block waves-light\">\n        <img class=\"activator\" id=\"usImg\" src=\"/assets/us.JPG\">\n      </div>\n      <div class=\"card-content\">\n        <span class=\"card-title activator grey-text text-darken-4\">Contact me =><i class=\"material-icons right\">email</i></span>\n        <p><a href=\"/\">Top</a></p>\n      </div>\n      <div class=\"card-reveal\">\n        <span class=\"card-title grey-text text-darken-4\">Send me a message!<i class=\"material-icons right\">close</i></span>\n        <div id=\"form\">\n            <mat-form-field>\n                <input matInput placeholder=\"Enter your email\" name=\"email\" [formControl]=\"email\" required >\n                <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n            </mat-form-field>\n            <mat-form-field>\n              <textarea matInput placeholder=\"Write a Message\" [formControl]=\"message\" ></textarea>\n              <mat-error *ngIf=\"message.invalid\">{{getError()}}</mat-error>\n            </mat-form-field>\n            <button mat-raised-button *ngIf=\"!message.invalid && !email.invalid\" (click)=\"newMessage()\">Send</button>\n        </div>\n        <div *ngIf=\"sending == true\" class=\"progress\">\n            <div class=\"indeterminate\"></div>\n        </div>\n        <p *ngIf=\"success != undefined\" class=\"success\">{{success}}</p>\n        <p *ngIf=\"error != undefined\" class=\"errors\">{{error}}</p>\n      </div>\n  </div>\n</div>\n<div id=\"footer\">\n  <mat-grid-list cols=\"1\" rowHeight=\"24px\"> <mat-grid-tile></mat-grid-tile> </mat-grid-list>\n  <mat-grid-list cols=\"3\" rowHeight=\"5:1\">\n    <mat-grid-tile [colspan]=\"1\"><img id=\"nameLogo\" src=\"/assets/je2.png\" alt=\"Logo\"></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"1\"></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"1\"><a href=\"/assets/jonathanEnriquezResume.pdf\">Resume</a></mat-grid-tile>\n  </mat-grid-list>\n  <mat-grid-list cols=\"3\" rowHeight=\"1.50em\">\n    <mat-grid-tile [colspan]=\"3\"></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"1\"><a href=\"https://github.com/JonathanMEnriquez\">GitHub</a></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"1\"></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"1\"><h6>jonathanmenriquez@yahoo.com</h6></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"1\"><a href=\"https://www.linkedin.com/in/jonathan-enriquez/\">LinkedIn</a></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"1\"></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"1\"><h6>626-252-5678</h6></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"1\"><a href=\"https://twitter.com/JonMEnriquez\">Twitter</a></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"1\"></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"1\"><h6>PO Box 114, 15902 Haliburton Rd. Hacienda Heights, CA</h6></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"3\"></mat-grid-tile>\n  </mat-grid-list>\n  <mat-divider></mat-divider>\n  <br>\n  <mat-grid-list cols=\"4\" rowHeight=\"16px\">\n    <mat-grid-tile [colspan]=\"3\"></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"1\"><p id=\"copyright\">© 2018, Jonathan Enriquez</p></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"4\"></mat-grid-tile>\n  </mat-grid-list>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var api_service_1 = __webpack_require__("../../../../../src/app/api.service.ts");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(_apiService) {
        this._apiService = _apiService;
        this.sending = false;
        this.email = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]);
        this.message = new forms_1.FormControl('', forms_1.Validators.required);
    }
    ContactComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'Please enter a value' : this.email.hasError('email') ? 'Not a valid email address' : "";
    };
    ContactComponent.prototype.getError = function () {
        return this.message.hasError('required') ? 'Please enter a message' : "";
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.newMessage = function () {
        var _this = this;
        this.sending = true;
        var newObj = {
            email: this.email.value,
            message: this.message.value
        };
        var observable = this._apiService.createNewMessage(newObj);
        observable.subscribe(function (responseData) {
            console.log("Response: ", responseData);
            if (!responseData.errors) {
                _this.sending = false;
                _this.success = "Thank you for your message. I will respond as promptly as possible.";
                _this.email = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]);
                _this.message = new forms_1.FormControl('', forms_1.Validators.required);
            }
            else {
                _this.sending = false;
                _this.error = "Message not sent. Please check your network settings.";
            }
        });
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container{\n    width: 100%;\n    height: 100%;\n    padding-top: 4.5%;\n    /* background-image: url(\"http://i66.tinypic.com/25fsism.jpg\"); */\n    background-image: url(\"http://i66.tinypic.com/35i9e8m.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-color: #cccccc;\n    font-family: 'Abel';\n}\n\nmat-grid-tile {\n    /* background: lightblue; */\n  }\n\nh1{\n    font-size: 3em;\n    text-shadow: darkgray 1px 1px;\n    color: white;\n}\n\nh4{\n    font-size: 2em;\n    color: white;\n}\n\nh5 {\n    color: white;\n}\n\n#profile{\n    -webkit-box-shadow: -8px -8px #f9d840;\n            box-shadow: -8px -8px #f9d840;\n    width: 100%;\n}\n\n#opaque {\n    margin-bottom: 2.5%;\n    position: relative;\n    top: 13%;\n    /* left: 5%; */\n    width: 90%;\n    height: 50%;\n    background: rgba(70, 69, 69, 0.75);\n    padding: 20px;\n    vertical-align: top;\n}\n\n#padSpace{\n    /* height: ; */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div id=\"opaque\" (window:resize)=\"onResize($event)\">\n    <mat-divider></mat-divider>\n    <mat-grid-list cols=\"{{test}}\" rowHeight=\"5:1\">\n      <mat-grid-tile\n        [colspan] = 2>\n        <h1>Jonathan Enriquez</h1>  \n      </mat-grid-tile>\n      <mat-grid-tile\n        [rowspan] = 6>\n        <img src=\"/assets/profile.JPG\" id=\"profile\" alt=\"profile\">\n        </mat-grid-tile>\n      <mat-grid-tile\n        [colspan] = 2>\n        <h4>Jr Web/App Developer</h4>  \n      </mat-grid-tile>\n      <mat-grid-tile\n        [colspan] = 2>\n        <h4><a href=\"https://github.com/JonathanMEnriquez\">GitHub</a></h4>\n      </mat-grid-tile>\n      <mat-grid-tile\n      [colspan] = 2>\n      <h5>jonathanmenriquez@yahoo.com</h5>  \n      </mat-grid-tile>\n      <mat-grid-tile\n      [colspan] = 2>\n      <h4><a href=\"https://www.facebook.com/jonathan.enriquez.5496?ref=bookmarks\">Facebook</a></h4>\n    </mat-grid-tile>\n    <mat-grid-tile\n      [colspan] = 2>\n      <h4><a href=\"https://twitter.com/JonMEnriquez\">Twitter</a></h4>\n    </mat-grid-tile>\n    <mat-grid-tile\n      [colspan] = 3>\n      <button mat-raised-button>Basic</button>\n      <button mat-raised-button color=\"accent\">Accent</button>\n      <button mat-raised-button color=\"warn\">Warn</button>\n      <button mat-raised-button disabled>Disabled</button>\n      <a mat-raised-button routerLink=\"\">Link</a>\n      <button mat-icon-button>\n          <mat-icon>home</mat-icon>\n      </button>\n      </mat-grid-tile>\n    </mat-grid-list>\n    <mat-divider></mat-divider>\n  </div>\n  <div id=\"padSpace\">\n    _\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        this.test = 3;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onResize = function (event) {
        console.log(event.target.innerWidth);
        var element = event.target.innerWidth;
        console.log(element);
        if (element < 950) {
            this.test = 2;
        }
        if (element > 950) {
            this.test = 3;
        }
        if (element < 750) {
            this.test = 1;
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/homev2/homev2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container{\n    width: 100%;\n    height: 100%;\n    padding-top: 4.5%;\n    /* background-image: url(\"http://i66.tinypic.com/25fsism.jpg\"); */\n    /* background-image: url(\"http://i66.tinypic.com/35i9e8m.jpg\"); */\n    background-image: url(\"/assets/backgroundOpac.png\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-color: rgb(204, 204, 204, 0.2);\n    font-family: 'Abel';\n    z-index: -1;\n}\n\n#profile{\n    /* border: 3px white;\n    border-style: solid; */\n    border-radius: 100%;\n    /* box-shadow: -8px -8px #f9d840; */\n    width: 48%;\n}\n\n.bottomLine{\n    border-bottom: 5px solid;\n    border-color: #9e6361;\n}\n\n#gitHub{\n    width: 60%;\n    background-color: white;\n    border-radius: 100%;\n}\n\n.icon{\n    width: 73%;\n    /* margin-left: 43.75%; */\n}\n\n#atIcon{\n    width: 55%;\n    margin-top: -5%;\n    border-radius: 100%;\n}\n\n#twitter{\n    width: 85%;\n}\n\n#linkedIn{\n    width: 62%;\n}\n\n#email{\n    font-size: 3vh;\n    font-weight: bolder;\n    color: darkgray;\n}\n\n.material-icons.md-48 { \n    text-align: center;\n    font-size: 3em; \n}\n\n#footer{\n    background: #9e6361;\n}\n\n.opaque {\n    opacity: 0.9;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homev2/homev2.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" >\n  <mat-grid-list cols=\"5\" rowHeight=\"2:1\">\n    <mat-grid-tile [colspan]=\"5\"></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"2\"></mat-grid-tile>\n    <mat-grid-tile>\n      <img src=\"/assets/profileCropped.JPG\" id=\"profile\" alt=\"profile\" class=\"{{profile}}\"  (mouseenter)=\"nameFocus($event)\" (mouseout)=\"lostFocus($event)\">\n    </mat-grid-tile>\n    <mat-grid-tile [colspan]=\"2\"></mat-grid-tile>\n  </mat-grid-list>\n  <mat-grid-list cols=\"5\" rowHeight=\"3:1\" >\n    <mat-grid-tile></mat-grid-tile>\n    <mat-grid-tile class=\"bottomLine\"\n    [colspan] = 3>\n      <h1>{{ nameStr }}</h1>\n    </mat-grid-tile>\n    <mat-grid-tile></mat-grid-tile>\n  </mat-grid-list>\n  <!-- <mat-divider></mat-divider> -->\n  <mat-grid-list cols=\"5\" rowHeight=\"7:1\">\n      <mat-grid-tile></mat-grid-tile>\n      <mat-grid-tile\n        [colspan] = 3>\n        <h5>FULL STACK WEB AND APP DEVELOPER</h5>\n      </mat-grid-tile>\n      <mat-grid-tile></mat-grid-tile>\n      <mat-grid-tile [colspan]=\"5\"></mat-grid-tile>\n  </mat-grid-list>\n  <mat-grid-list cols=\"40\" rowHeight=\"1:1\">\n      <mat-grid-tile [colspan]=\"12\"></mat-grid-tile>\n      <mat-grid-tile> <a class=\"btn btn-floating pulse\" mat-icon-button href=\"https://github.com/JonathanMEnriquez\"> <img src=\"/assets/github.png\" id=\"gitHub\" alt=\"GitHub\"> </a></mat-grid-tile>\n      <mat-grid-tile [colspan]=\"4\"></mat-grid-tile>\n      <mat-grid-tile> <button class=\"btn btn-floating pulse\" mat-icon-button [disableRipple]=\"true\" (click)=\"abracadabra()\"><img id=\"atIcon\" src=\"/assets/at.png\" alt=\"@\"></button></mat-grid-tile>\n      <mat-grid-tile [colspan]=\"4\"></mat-grid-tile>\n      <mat-grid-tile> <a class=\"btn btn-floating pulse\" mat-icon-button href=\"https://www.linkedin.com/in/jonathan-enriquez/\"> <img src=\"/assets/linkedin.png\" id=\"linkedIn\" alt=\"LinkedIn\"> </a></mat-grid-tile>\n      <mat-grid-tile [colspan]=\"4\"></mat-grid-tile>\n      <mat-grid-tile> <a class=\"btn btn-floating pulse\" mat-icon-button href=\"https://twitter.com/JonMEnriquez\"> <img src=\"/assets/twitter.png\" id=\"twitter\" alt=\"Twitter\"> </a></mat-grid-tile>\n      <mat-grid-tile [colspan]=\"12\"></mat-grid-tile>\n      <mat-grid-tile [colspan]=\"15\"></mat-grid-tile>\n      <mat-grid-tile [colspan]=\"10\"> <p id=\"email\"  *ngIf=\"email != undefined\" > {{ email }} </p></mat-grid-tile>\n      <mat-grid-tile [colspan]=\"15\"></mat-grid-tile>\n  </mat-grid-list>\n  <mat-grid-list cols=\"20\" rowHeight=\"1:1\">\n      <mat-grid-tile [colspan]=\"20\"></mat-grid-tile>\n  </mat-grid-list>\n  <mat-divider></mat-divider>\n  <mat-grid-list cols=\"20\" rowHeight=\"1:1\">\n    <mat-grid-tile colspan=\"20\"></mat-grid-tile>\n      <!-- <mat-grid-tile [colspan]=\"3\"></mat-grid-tile>\n      <mat-grid-tile><button [routerLink]=\"['']\" mat-icon-button color=\"warn\"><mat-icon class=\"material-icons md-48\">home</mat-icon></button></mat-grid-tile>\n      <mat-grid-tile [colspan]=\"3\"></mat-grid-tile>\n      <mat-grid-tile><button [routerLink]=\"['about']\" mat-icon-button color=\"warn\"><mat-icon class=\"material-icons md-48\">info</mat-icon></button></mat-grid-tile>\n      <mat-grid-tile [colspan]=\"4\"></mat-grid-tile>\n      <mat-grid-tile><button [routerLink]=\"['code']\" mat-icon-button color=\"warn\"><mat-icon class=\"material-icons md-48\">code</mat-icon></button></mat-grid-tile>\n      <mat-grid-tile [colspan]=\"3\"></mat-grid-tile>\n      <mat-grid-tile><button mat-icon-button color=\"warn\"><mat-icon class=\"material-icons md-48\">textsms</mat-icon></button></mat-grid-tile>\n      <mat-grid-tile [colspan]=\"3\"></mat-grid-tile> -->\n      <mat-grid-tile id=\"footer\" [colspan]=\"20\" [rowspan]=\"1\"></mat-grid-tile>\n  </mat-grid-list>\n</div>\n<app-about></app-about>\n<app-code></app-code>\n<app-contact></app-contact>"

/***/ }),

/***/ "../../../../../src/app/homev2/homev2.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
// import { setInterval } from '../../node_modules/timers-browsify';
var Homev2Component = /** @class */ (function () {
    function Homev2Component() {
        this.nameStr = "Jonathan Enriquez";
        this.profile = "none";
        this.idx = 9;
    }
    Homev2Component.prototype.ngOnInit = function () {
    };
    Homev2Component.prototype.abracadabra = function () {
        if (this.email == undefined) {
            this.email = "jonathanmenriquez@yahoo.com";
        }
        else {
            this.email = undefined;
        }
    };
    Homev2Component.prototype.nameFocus = function (event) {
        // console.log(event);
        this.profile = "opaque";
    };
    Homev2Component.prototype.lostFocus = function (event) {
        this.profile = "none";
    };
    Homev2Component = __decorate([
        core_1.Component({
            selector: 'app-homev2',
            template: __webpack_require__("../../../../../src/app/homev2/homev2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homev2/homev2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Homev2Component);
    return Homev2Component;
}());
exports.Homev2Component = Homev2Component;


/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var form_field_1 = __webpack_require__("../../../material/esm5/form-field.es5.js");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            imports: [material_1.MatButtonModule, material_1.MatIconModule, material_1.MatToolbarModule, material_1.MatGridListModule, material_1.MatDividerModule, material_1.MatCardModule,
                material_1.MatTabsModule, animations_1.BrowserAnimationsModule, platform_browser_1.BrowserModule, form_field_1.MatFormFieldModule, material_1.MatInputModule],
            exports: [material_1.MatButtonModule, material_1.MatIconModule, material_1.MatToolbarModule, material_1.MatGridListModule, material_1.MatDividerModule, material_1.MatCardModule,
                material_1.MatTabsModule, animations_1.BrowserAnimationsModule, platform_browser_1.BrowserModule, form_field_1.MatFormFieldModule, material_1.MatInputModule]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;


/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper {\n    background-color: white;\n    margin: 0 auto;\n}\n\n#center {\n    width: 75%;\n    background-color: white;\n    padding-top: 7vh;\n    text-align: center;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n#center img {\n    width: 20%;\n    /* margin-left: 30%; */\n    border-radius: 10vw;\n}\n\n#center h2 {\n    font-size: 2em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <div id=\"center\">\n    <img src=\"/assets/teddy.JPG\" alt=\"Oh no\">\n    <h2>Oh no! Page not found!</h2>\n    <h3>404</h3>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map