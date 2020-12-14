(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./characters/characters.module": [
		"./src/app/characters/characters.module.ts",
		"characters-characters-module"
	],
	"./leader-board/leader-board.module": [
		"./src/app/leader-board/leader-board.module.ts",
		"leader-board-leader-board-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'characters',
    },
    {
        path: 'characters',
        loadChildren: './characters/characters.module#CharactersModule'
    },
    {
        path: 'leader-board-main',
        loadChildren: './leader-board/leader-board.module#LeaderBoardModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-nav></app-top-nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _store_actions_characters_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/actions/characters.actions */ "./src/app/store/actions/characters.actions.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        this.title = 'mavel-heros-portal';
    }
    AppComponent.prototype.ngOnInit = function () {
        // Dispatch LOAD_CHARACTERS action to call the get all character API and then add the list of characters into the global store. 
        this.store.dispatch(new _store_actions_characters_actions__WEBPACK_IMPORTED_MODULE_3__["LoadCharacters"]());
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _store_effects_characters_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/effects/characters.effects */ "./src/app/store/effects/characters.effects.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _store_reducers_characters_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/reducers/characters.reducer */ "./src/app/store/reducers/characters.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/ngrx-effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/ngrx-store-devtools.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forRoot([_store_effects_characters_effects__WEBPACK_IMPORTED_MODULE_8__["CharactersEffects"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({ characters: _store_reducers_characters_reducer__WEBPACK_IMPORTED_MODULE_10__["characterReducer"] }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"].instrument({ maxAge: 25 }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/urls.ts":
/*!********************************!*\
  !*** ./src/app/models/urls.ts ***!
  \********************************/
/*! exports provided: CHAR_API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAR_API_URL", function() { return CHAR_API_URL; });
var CHAR_API_URL = "https://gateway.marvel.com/v1/public/characters";


/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, args) {
        if (!value) {
            return null;
        }
        if (!args) {
            return value;
        }
        args = args.toLowerCase();
        return value.filter(function (item) {
            var source = JSON.stringify(item.name).toLowerCase();
            return source.replace(/[^a-zA-Z0-9]/g, "").includes(args) || source.includes(args);
        });
    };
    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'SearchFilter'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/urls */ "./src/app/models/urls.ts");







var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.PRIVATE_KEY = "c8d7533e3cfeb7f70d3e17a99124c4b563bf1fd5";
        this.PUBLIC_KEY = "f2f8f26aeef1ffc64b3195ec1bbcdef3";
    }
    HttpService.prototype.generateHash = function (privateKey, publicKey, timestamp) {
        return ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5__["Md5"].hashStr("" + timestamp + privateKey + publicKey);
    };
    HttpService.prototype.getParams = function () {
        var timestamp = new Date().getTime().toString();
        var hash = this.generateHash(this.PRIVATE_KEY, this.PUBLIC_KEY, timestamp);
        var params = "?apikey=" + this.PUBLIC_KEY + "&ts=" + timestamp + "&hash=" + hash;
        return params;
    };
    // Fetches lists of characters.
    HttpService.prototype.getAllSuperHerosService = function () {
        return this.http.get("" + _models_urls__WEBPACK_IMPORTED_MODULE_6__["CHAR_API_URL"] + this.getParams()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // Fetches a single character by id.
    HttpService.prototype.getCharDetails = function (charId) {
        return this.http.get(_models_urls__WEBPACK_IMPORTED_MODULE_6__["CHAR_API_URL"] + "/" + charId + this.getParams()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // Call back method for error handling
    HttpService.prototype.errorHandler = function (errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error: ', errorResponse.error.message);
        }
        else {
            console.log('Server Side Error: ', errorResponse);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('There was a problem with the service. we are notified and working on it');
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _skeleton_screen_skeleton_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skeleton-screen/skeleton-screen.component */ "./src/app/shared/skeleton-screen/skeleton-screen.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./top-nav/top-nav.component */ "./src/app/shared/top-nav/top-nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");














var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_skeleton_screen_skeleton_screen_component__WEBPACK_IMPORTED_MODULE_3__["SkeletonScreenComponent"], _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_10__["TopNavComponent"], _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_13__["SearchPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
            ],
            exports: [
                _skeleton_screen_skeleton_screen_component__WEBPACK_IMPORTED_MODULE_3__["SkeletonScreenComponent"],
                _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_10__["TopNavComponent"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_13__["SearchPipe"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/skeleton-screen/skeleton-screen.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/skeleton-screen/skeleton-screen.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 0;\n}\n\n.skeleton-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.post {\n  width: 220px;\n  height: 80px;\n}\n\n.post .avatar {\n  float: left;\n  width: 52px;\n  height: 52px;\n  background-color: #ccc;\n  border-radius: 25%;\n  margin: 8px;\n  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);\n  background-size: 600px;\n  -webkit-animation: shine-avatar 1.6s infinite linear;\n          animation: shine-avatar 1.6s infinite linear;\n}\n\n.post .line {\n  float: left;\n  width: 140px;\n  height: 16px;\n  margin-top: 12px;\n  border-radius: 7px;\n  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);\n  background-size: 600px;\n  -webkit-animation: shine-lines 1.6s infinite linear;\n          animation: shine-lines 1.6s infinite linear;\n}\n\n.post .avatar+.line {\n  margin-top: 11px;\n  width: 100px;\n}\n\n.post .line~.line {\n  background-color: #ddd;\n}\n\n@-webkit-keyframes shine-lines {\n  0% {\n    background-position: -100px;\n  }\n\n  40%,\n  100% {\n    background-position: 140px;\n  }\n}\n\n@keyframes shine-lines {\n  0% {\n    background-position: -100px;\n  }\n\n  40%,\n  100% {\n    background-position: 140px;\n  }\n}\n\n@-webkit-keyframes shine-avatar {\n  0% {\n    background-position: -32px;\n  }\n\n  40%,\n  100% {\n    background-position: 208px;\n  }\n}\n\n@keyframes shine-avatar {\n  0% {\n    background-position: -32px;\n  }\n\n  40%,\n  100% {\n    background-position: 208px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NrZWxldG9uLXNjcmVlbi9za2VsZXRvbi1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCwyRUFBMkU7RUFDM0Usc0JBQXNCO0VBQ3RCLG9EQUE0QztVQUE1Qyw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDJFQUEyRTtFQUMzRSxzQkFBc0I7RUFDdEIsbURBQTJDO1VBQTNDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTs7SUFFRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFUQTtFQUNFO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBOztJQUVFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7O0lBRUUsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBVEE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTs7SUFFRSwwQkFBMEI7RUFDNUI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9za2VsZXRvbi1zY3JlZW4vc2tlbGV0b24tc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2tlbGV0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucG9zdCB7XG4gIHdpZHRoOiAyMjBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ucG9zdCAuYXZhdGFyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcbiAgbWFyZ2luOiA4cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2RkZCAwcHgsICNlOGU4ZTggNDBweCwgI2RkZCA4MHB4KTtcbiAgYmFja2dyb3VuZC1zaXplOiA2MDBweDtcbiAgYW5pbWF0aW9uOiBzaGluZS1hdmF0YXIgMS42cyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbi5wb3N0IC5saW5lIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2RkZCAwcHgsICNlOGU4ZTggNDBweCwgI2RkZCA4MHB4KTtcbiAgYmFja2dyb3VuZC1zaXplOiA2MDBweDtcbiAgYW5pbWF0aW9uOiBzaGluZS1saW5lcyAxLjZzIGluZmluaXRlIGxpbmVhcjtcbn1cblxuLnBvc3QgLmF2YXRhcisubGluZSB7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLnBvc3QgLmxpbmV+LmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG5Aa2V5ZnJhbWVzIHNoaW5lLWxpbmVzIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMDBweDtcbiAgfVxuXG4gIDQwJSxcbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTQwcHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzaGluZS1hdmF0YXIge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHg7XG4gIH1cblxuICA0MCUsXG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwOHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/skeleton-screen/skeleton-screen.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/skeleton-screen/skeleton-screen.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"skeleton-wrapper\">\n    <div class=\"post\">\n      <div class=\"avatar\"></div>\n      <div class=\"line\"></div>\n      <div class=\"line\"></div>\n    </div>\n  \n    <div class=\"post\">\n      <div class=\"avatar\"></div>\n      <div class=\"line\"></div>\n      <div class=\"line\"></div>\n    </div>\n  \n    <div class=\"post\">\n      <div class=\"avatar\"></div>\n      <div class=\"line\"></div>\n      <div class=\"line\"></div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/shared/skeleton-screen/skeleton-screen.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/skeleton-screen/skeleton-screen.component.ts ***!
  \*********************************************************************/
/*! exports provided: SkeletonScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonScreenComponent", function() { return SkeletonScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkeletonScreenComponent = /** @class */ (function () {
    function SkeletonScreenComponent() {
    }
    SkeletonScreenComponent.prototype.ngOnInit = function () {
    };
    SkeletonScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skeleton-screen',
            template: __webpack_require__(/*! ./skeleton-screen.component.html */ "./src/app/shared/skeleton-screen/skeleton-screen.component.html"),
            styles: [__webpack_require__(/*! ./skeleton-screen.component.css */ "./src/app/shared/skeleton-screen/skeleton-screen.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkeletonScreenComponent);
    return SkeletonScreenComponent;
}());



/***/ }),

/***/ "./src/app/shared/top-nav/top-nav.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/top-nav/top-nav.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.logo-wrapper {\n    width: 100%;\n    background: black;\n    text-align: center;\n}\n\n.logo-wrapper img{\n    width: 150px;\n}\n\nnav {\n    margin-bottom: 30px;\n}\n\n@media (min-width: 992px) {\n    .navbar-expand-lg .navbar-collapse {\n        justify-content: center;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RvcC1uYXYvdG9wLW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdG9wLW5hdi90b3AtbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5sb2dvLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ28td3JhcHBlciBpbWd7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG5uYXYge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItY29sbGFwc2Uge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/top-nav/top-nav.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/top-nav/top-nav.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo-wrapper\"><img class=\"trave-back\" [routerLink]=\"['/characters']\"\n    src=\"./assets/images/1280px-MarvelLogo.svg.png\"></div>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button (click)=\"changeMenuStatus()\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\" [class.show]=\"hasMobileNavOpened\">\n    <ul class=\"navbar-nav\">\n        <li *ngFor=\"let item of MENULIST\">\n            <a class=\"nav-link\" [routerLink]=\"item.menuRouter\" routerLinkActive=\"active\">{{item.menuName}}</a> \n        </li>\n    </ul>\n  </div>\n</nav>\n    "

/***/ }),

/***/ "./src/app/shared/top-nav/top-nav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/top-nav/top-nav.component.ts ***!
  \*****************************************************/
/*! exports provided: TopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return TopNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopNavComponent = /** @class */ (function () {
    function TopNavComponent() {
        this.hasMobileNavOpened = false;
        this.MENULIST = [
            {
                menuName: 'Home',
                menuRouter: '/characters',
            },
            {
                menuName: 'Leader Board',
                menuRouter: '/leader-board-main',
            },
        ];
    }
    TopNavComponent.prototype.ngOnInit = function () {
    };
    TopNavComponent.prototype.changeMenuStatus = function () {
        this.hasMobileNavOpened = !this.hasMobileNavOpened;
    };
    TopNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-nav',
            template: __webpack_require__(/*! ./top-nav.component.html */ "./src/app/shared/top-nav/top-nav.component.html"),
            styles: [__webpack_require__(/*! ./top-nav.component.css */ "./src/app/shared/top-nav/top-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopNavComponent);
    return TopNavComponent;
}());



/***/ }),

/***/ "./src/app/store/actions/characters.actions.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/actions/characters.actions.ts ***!
  \*****************************************************/
/*! exports provided: ActionTypes, LoadCharacters, LoadRawJsonCharacters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCharacters", function() { return LoadCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRawJsonCharacters", function() { return LoadRawJsonCharacters; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["LOAD_CHARACTERS"] = "[MAVEL HEROS PORTAL] Load list of characters";
    ActionTypes["LOAD_RAWJSONCHARACTERS_SUCCESS"] = "[MAVEL HEROS PORTAL] Load list of characters SUCCESS";
})(ActionTypes || (ActionTypes = {}));
var LoadCharacters = /** @class */ (function () {
    function LoadCharacters() {
        this.type = ActionTypes.LOAD_CHARACTERS;
    }
    return LoadCharacters;
}());

var LoadRawJsonCharacters = /** @class */ (function () {
    function LoadRawJsonCharacters(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_RAWJSONCHARACTERS_SUCCESS;
    }
    return LoadRawJsonCharacters;
}());



/***/ }),

/***/ "./src/app/store/effects/characters.effects.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/effects/characters.effects.ts ***!
  \*****************************************************/
/*! exports provided: CharactersEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersEffects", function() { return CharactersEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_characters_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/characters.actions */ "./src/app/store/actions/characters.actions.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");







var CharactersEffects = /** @class */ (function () {
    function CharactersEffects(actions$, service, store) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.store = store;
        this.LoadCharacters = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_characters_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].LOAD_CHARACTERS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (action) {
            var rawJSON = {};
            _this.service.getAllSuperHerosService().subscribe(function (res) {
                rawJSON = {
                    rawJSON: res.data.results
                };
                _this.store.dispatch(new _actions_characters_actions__WEBPACK_IMPORTED_MODULE_5__["LoadRawJsonCharacters"](rawJSON));
            }, function (error) { console.error(error); });
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CharactersEffects.prototype, "LoadCharacters", void 0);
    CharactersEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], CharactersEffects);
    return CharactersEffects;
}());



/***/ }),

/***/ "./src/app/store/reducers/characters.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/store/reducers/characters.reducer.ts ***!
  \******************************************************/
/*! exports provided: initialState, characterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "characterReducer", function() { return characterReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_characters_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/characters.actions */ "./src/app/store/actions/characters.actions.ts");


var initialState = {};
function characterReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_characters_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOAD_CHARACTERS:
            return state;
        case _actions_characters_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOAD_RAWJSONCHARACTERS_SUCCESS:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, action.payload);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zhangfenglin/mavel-heros-portal/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map