(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["characters-characters-module"],{

/***/ "./src/app/character/character-detail/character-detail.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/character/character-detail/character-detail.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-sm-6 img {\n    width: 100%;\n}\n.char-header {\n    margin: 0 0 24px;\n    font-size: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyL2NoYXJhY3Rlci1kZXRhaWwvY2hhcmFjdGVyLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NoYXJhY3Rlci9jaGFyYWN0ZXItZGV0YWlsL2NoYXJhY3Rlci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtc20tNiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmNoYXItaGVhZGVyIHtcbiAgICBtYXJnaW46IDAgMCAyNHB4O1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/character/character-detail/character-detail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/character/character-detail/character-detail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"hasDetailsLoaded\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <img src=\"{{charDetailObj?.thumbnail?.path+'.'+charDetailObj?.thumbnail?.extension}}\"\n          alt=\"Photo of the charDetailObj\">\n      </div>\n      <div class=\"col-sm-6 infor-wrapper\">\n        <div class=\"char-header\">{{charDetailObj?.name}}</div>\n        <ng-container *ngIf=\"charDetailObj?.description; then showDescription; else showSkelton\">\n        </ng-container>\n        <ng-template #showDescription>\n          <p>{{charDetailObj?.description}}</p>\n        </ng-template>\n        <ng-template #showSkelton>\n          <div class=\"warning\">\n            This charDetailObj doesn't want to show personal information to public.\n          </div>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"row\">\n      <mat-tab-group>\n        <mat-tab label=\"Comics they’ve appeared in\">\n          <mat-list role=\"list\">\n            <ng-container *ngFor=\"let comic of comics\">\n              <mat-list-item role=\"listitem\">{{comic.name}}</mat-list-item>\n              <mat-divider></mat-divider>\n            </ng-container>\n          </mat-list>\n        </mat-tab>\n        <mat-tab label=\"series they’ve appeared in\">\n            <mat-list role=\"list\">\n                <ng-container *ngFor=\"let serie of series\">\n                    <mat-list-item role=\"listitem\">{{serie.name}}</mat-list-item>\n                    <mat-divider></mat-divider>\n                  </ng-container>\n            </mat-list>\n        </mat-tab>\n        <mat-tab label=\"stories they’ve appeared in\">\n            <mat-list role=\"list\">\n                <ng-container *ngFor=\"let story of stories\">\n                    <mat-list-item role=\"listitem\">{{story.name}}</mat-list-item>\n                    <mat-divider></mat-divider>\n                  </ng-container>\n            </mat-list>\n\n        </mat-tab>\n      </mat-tab-group>\n    </div>\n  </div>\n</ng-container>\n\n<!-- BEGIN: Showing shared skeleton component when the data is not returned from backend API -->\n<ng-container *ngIf=\"!hasDetailsLoaded\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <app-skeleton-screen></app-skeleton-screen>\n        </div>\n    </div>\n</ng-container>\n<!-- END: Showing shared skeleton component when the data is not returned from backend API -->\n\n    \n"

/***/ }),

/***/ "./src/app/character/character-detail/character-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/character/character-detail/character-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: CharacterDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailComponent", function() { return CharacterDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");




var CharacterDetailComponent = /** @class */ (function () {
    function CharacterDetailComponent(activeRouter, httpService) {
        this.activeRouter = activeRouter;
        this.httpService = httpService;
        this.hasDetailsLoaded = false;
    }
    CharacterDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*subscript to watch the route para changes.
        **************Please make changes inside this subscription. Don't delete it ***************/
        this.subscriptionActiveRouter$ = this.activeRouter.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.httpGetCharDetailsService$ = _this.httpService.getCharDetails(_this.id).subscribe(function (res) {
                console.log(res.data.results[0]);
                _this.charDetailObj = res.data.results[0];
                _this.comics = _this.charDetailObj.comics.items;
                _this.series = _this.charDetailObj.series.items;
                _this.stories = _this.charDetailObj.stories.items;
                _this.hasDetailsLoaded = true;
            }, function (error) { return console.log("Error: ", error); }, function () {
            });
        });
    };
    CharacterDetailComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptionActiveRouter$) {
            this.subscriptionActiveRouter$.unsubscribe();
        }
        if (this.httpGetCharDetailsService$) {
            this.httpGetCharDetailsService$.unsubscribe();
        }
    };
    CharacterDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-character-detail',
            template: __webpack_require__(/*! ./character-detail.component.html */ "./src/app/character/character-detail/character-detail.component.html"),
            styles: [__webpack_require__(/*! ./character-detail.component.css */ "./src/app/character/character-detail/character-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], CharacterDetailComponent);
    return CharacterDetailComponent;
}());



/***/ }),

/***/ "./src/app/character/character.module.ts":
/*!***********************************************!*\
  !*** ./src/app/character/character.module.ts ***!
  \***********************************************/
/*! exports provided: CharacterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterModule", function() { return CharacterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character-detail/character-detail.component */ "./src/app/character/character-detail/character-detail.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");





var CharacterModule = /** @class */ (function () {
    function CharacterModule() {
    }
    CharacterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_3__["CharacterDetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ]
        })
    ], CharacterModule);
    return CharacterModule;
}());



/***/ }),

/***/ "./src/app/characters/all-characters/all-characters.component.css":
/*!************************************************************************!*\
  !*** ./src/app/characters/all-characters/all-characters.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero-card {\n  max-width: 400px;\n}\n\n\n.example-header-image {\n  background-size: cover;\n}\n\n\n.col-sm-4 {\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\n\n*, :after, :before {\n    box-sizing: border-box;\n}\n\n\n.warning    {\n    color: #f44336;\n}\n\n\n.search-field {\n    width: 100%;\n    max-width: 576px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVycy9hbGwtY2hhcmFjdGVycy9hbGwtY2hhcmFjdGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFHQTtFQUNFLHNCQUFzQjtBQUN4Qjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jaGFyYWN0ZXJzL2FsbC1jaGFyYWN0ZXJzL2FsbC1jaGFyYWN0ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVyby1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY29sLXNtLTQge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG4qLCA6YWZ0ZXIsIDpiZWZvcmUge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi53YXJuaW5nICAgIHtcbiAgICBjb2xvcjogI2Y0NDMzNjtcbn1cblxuLnNlYXJjaC1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1NzZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/characters/all-characters/all-characters.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/characters/all-characters/all-characters.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <!-- BEGIN: Name Filters Section-->\n    <div class=\"col-12 center\">\n      <h2>Filter Data by Character Name</h2>\n      <P>The below box filters out the names being displayed.</P>\n      <form #form=\"ngForm\" name=\"form\" novalidate>\n        <input type=\"text\" class=\"search-field\" name=\"group2\" #group2=\"ngModel\" placeholder=\"Search\"\n          [(ngModel)]=\"nameFilter\" #group2=\"ngModel\">\n      </form>\n    </div>\n    <!-- END: Name Filters Section-->\n  </div>\n  <div class=\"row\">\n    <!-- BEGIN: Showing shared skeleton component when the data is not returned from backend API -->\n    <ng-container *ngIf=\"!showChar\">\n      <div *ngFor=\"let skeleton of skeletonRepeatTime; let i = index\" class=\"col-sm-4\">\n        <app-skeleton-screen></app-skeleton-screen>\n      </div>\n    </ng-container>\n    <!-- END: Showing shared skeleton component when the data is not returned from backend API -->\n\n    <ng-container *ngIf=\"(allCharactersEndPoint | SearchFilter: nameFilter)?.length === 0\">\n        <div class=\"col-12\"><p class=\"warning\">No matched result</p></div>\n    </ng-container>\n\n    <!-- BEGIN: Showing list of characters when the data is returned from backend API -->\n    <ng-container *ngIf=\"showChar\">\n      <ng-container *ngFor=\"let character of allCharactersEndPoint  | SearchFilter: nameFilter; let i = index\">\n        <div class=\"col-sm-4\">\n          <mat-card class=\"hero-card hover-wrapper\">\n            <mat-card-header>\n              <mat-card-title>{{character?.name}}</mat-card-title>\n            </mat-card-header>\n            <div class=\"img-wrapper\">\n              <a [routerLink]=\"['character/', character.id]\">\n                <img mat-card-image src=\"{{character?.thumbnail?.path+'.'+character?.thumbnail?.extension}}\"\n                  alt=\"Photo of the character\">\n              </a>\n            </div>\n            <mat-card-actions>\n              <button mat-button (click)=\"goToCharDetails(character?.id)\">View Details</button>\n            </mat-card-actions>\n          </mat-card>\n        </div>\n      </ng-container>\n    </ng-container>\n    <!-- END: Showing list of characters when the data is returned from backend API -->\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/characters/all-characters/all-characters.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/characters/all-characters/all-characters.component.ts ***!
  \***********************************************************************/
/*! exports provided: AllCharactersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCharactersComponent", function() { return AllCharactersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");




var AllCharactersComponent = /** @class */ (function () {
    function AllCharactersComponent(router, store) {
        this.router = router;
        this.store = store;
        this.showChar = false;
    }
    AllCharactersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allCharacters$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(function (state) { return state.characters; }));
        this.subStore$ = this.allCharacters$.subscribe(function (response) {
            console.log(response);
            if (response['rawJSON']) {
                // console.log('get the data from store');
                // console.log(response['rawJSON']);
                _this.allCharactersEndPoint = response['rawJSON'];
                _this.showChar = true;
            }
        }, function (error) { console.error(error); });
        this.skeletonRepeatTime = Array(20).fill(20).map(function (x, i) { return i; });
    };
    AllCharactersComponent.prototype.ngOnDestroy = function () {
        if (this.subStore$) {
            this.subStore$.unsubscribe();
        }
    };
    AllCharactersComponent.prototype.goToCharDetails = function (charId) {
        this.router.navigateByUrl("/characters/character/" + charId);
    };
    AllCharactersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-characters',
            template: __webpack_require__(/*! ./all-characters.component.html */ "./src/app/characters/all-characters/all-characters.component.html"),
            styles: [__webpack_require__(/*! ./all-characters.component.css */ "./src/app/characters/all-characters/all-characters.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AllCharactersComponent);
    return AllCharactersComponent;
}());



/***/ }),

/***/ "./src/app/characters/characters-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/characters/characters-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CharactersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersRoutingModule", function() { return CharactersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _character_character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../character/character-detail/character-detail.component */ "./src/app/character/character-detail/character-detail.component.ts");
/* harmony import */ var _all_characters_all_characters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-characters/all-characters.component */ "./src/app/characters/all-characters/all-characters.component.ts");





var routes = [
    {
        path: '',
        component: _all_characters_all_characters_component__WEBPACK_IMPORTED_MODULE_4__["AllCharactersComponent"],
    },
    {
        path: 'character/:id',
        component: _character_character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_3__["CharacterDetailComponent"],
    }
];
var CharactersRoutingModule = /** @class */ (function () {
    function CharactersRoutingModule() {
    }
    CharactersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CharactersRoutingModule);
    return CharactersRoutingModule;
}());



/***/ }),

/***/ "./src/app/characters/characters.module.ts":
/*!*************************************************!*\
  !*** ./src/app/characters/characters.module.ts ***!
  \*************************************************/
/*! exports provided: CharactersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersModule", function() { return CharactersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _characters_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters-routing.module */ "./src/app/characters/characters-routing.module.ts");
/* harmony import */ var _character_character_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../character/character.module */ "./src/app/character/character.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _all_characters_all_characters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-characters/all-characters.component */ "./src/app/characters/all-characters/all-characters.component.ts");







var CharactersModule = /** @class */ (function () {
    function CharactersModule() {
    }
    CharactersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_all_characters_all_characters_component__WEBPACK_IMPORTED_MODULE_6__["AllCharactersComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _characters_routing_module__WEBPACK_IMPORTED_MODULE_3__["CharactersRoutingModule"],
                _character_character_module__WEBPACK_IMPORTED_MODULE_4__["CharacterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], CharactersModule);
    return CharactersModule;
}());



/***/ })

}]);
//# sourceMappingURL=characters-characters-module.js.map