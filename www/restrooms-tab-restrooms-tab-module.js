(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restrooms-tab-restrooms-tab-module"],{

/***/ "./src/app/pages/restrooms-tab/restrooms-tab.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/restrooms-tab/restrooms-tab.module.ts ***!
  \*************************************************************/
/*! exports provided: RestroomsTabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestroomsTabPageModule", function() { return RestroomsTabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _restrooms_tab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restrooms-tab.page */ "./src/app/pages/restrooms-tab/restrooms-tab.page.ts");







var routes = [
    {
        path: '',
        component: _restrooms_tab_page__WEBPACK_IMPORTED_MODULE_6__["RestroomsTabPage"]
    }
];
var RestroomsTabPageModule = /** @class */ (function () {
    function RestroomsTabPageModule() {
    }
    RestroomsTabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_restrooms_tab_page__WEBPACK_IMPORTED_MODULE_6__["RestroomsTabPage"]]
        })
    ], RestroomsTabPageModule);
    return RestroomsTabPageModule;
}());



/***/ }),

/***/ "./src/app/pages/restrooms-tab/restrooms-tab.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/restrooms-tab/restrooms-tab.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\t  <ion-title>Where2P4Free</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"none\" *ngFor=\"let toilet of toilets\">\n    <ion-card>\n      <ion-card-content>\n        <h2>Location: {{toilet.location}}</h2>\n        <p>Description: {{toilet.description}}</p>\n        <p>Type: {{toilet.type}}</p>\n      </ion-card-content>\n    </ion-card>\n  </ion-item>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/restrooms-tab/restrooms-tab.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/restrooms-tab/restrooms-tab.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc3Ryb29tcy10YWIvcmVzdHJvb21zLXRhYi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/restrooms-tab/restrooms-tab.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/restrooms-tab/restrooms-tab.page.ts ***!
  \***********************************************************/
/*! exports provided: RestroomsTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestroomsTabPage", function() { return RestroomsTabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/rest.service */ "./src/app/service/rest.service.ts");



var RestroomsTabPage = /** @class */ (function () {
    function RestroomsTabPage(restService) {
        this.restService = restService;
        this.getLocations();
    }
    RestroomsTabPage.prototype.getLocations = function () {
        var _this = this;
        this.restService.getLocations()
            .then(function (data) {
            _this.toilets = data;
        });
    };
    RestroomsTabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restrooms-tab',
            template: __webpack_require__(/*! ./restrooms-tab.page.html */ "./src/app/pages/restrooms-tab/restrooms-tab.page.html"),
            styles: [__webpack_require__(/*! ./restrooms-tab.page.scss */ "./src/app/pages/restrooms-tab/restrooms-tab.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
    ], RestroomsTabPage);
    return RestroomsTabPage;
}());



/***/ })

}]);
//# sourceMappingURL=restrooms-tab-restrooms-tab-module.js.map