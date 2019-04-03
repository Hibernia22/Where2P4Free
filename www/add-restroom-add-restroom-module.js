(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-restroom-add-restroom-module"],{

/***/ "./src/app/pages/add-restroom/add-restroom.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-restroom/add-restroom.module.ts ***!
  \***********************************************************/
/*! exports provided: AddRestroomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRestroomPageModule", function() { return AddRestroomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_restroom_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-restroom.page */ "./src/app/pages/add-restroom/add-restroom.page.ts");







var routes = [
    {
        path: '',
        component: _add_restroom_page__WEBPACK_IMPORTED_MODULE_6__["AddRestroomPage"]
    }
];
var AddRestroomPageModule = /** @class */ (function () {
    function AddRestroomPageModule() {
    }
    AddRestroomPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_restroom_page__WEBPACK_IMPORTED_MODULE_6__["AddRestroomPage"]]
        })
    ], AddRestroomPageModule);
    return AddRestroomPageModule;
}());



/***/ }),

/***/ "./src/app/pages/add-restroom/add-restroom.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-restroom/add-restroom.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Restroom</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>Enter details below.</h1>\n  <br>\n\t<form (ngSubmit)=\"addLocation()\">\n    <p><ion-item>\n      <ion-input placeholder=\"Location\" type=\"text\" [(ngModel)]=\"toilet.location\" name=\"location\" clearInput></ion-input>\n    </ion-item></p>\n    <br>\n   <p><ion-item>\n      <ion-input placeholder=\"Description\" type=\"text\" [(ngModel)]=\"toilet.description\" name=\"description\" clearInput></ion-input>\n    </ion-item></p>\n    <br>\n    <p><ion-item>\n        <ion-label>Type</ion-label>\n        <ion-select [(ngModel)]=\"toilet.type\" name=\"type\">\n          <ion-select-option>Male</ion-select-option>\n          <ion-select-option>Female</ion-select-option>\n          <ion-select-option>Male & Female</ion-select-option>\n          <ion-select-option>Disabled</ion-select-option>\n          <ion-select-option>Gender Neutral</ion-select-option>\n        </ion-select>\n      </ion-item></p>\n      <br>\n    <ion-button type=\"submit\" block (click)=\"presentToast()\">Add Toilet</ion-button>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/add-restroom/add-restroom.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-restroom/add-restroom.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1yZXN0cm9vbS9hZGQtcmVzdHJvb20ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/add-restroom/add-restroom.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/add-restroom/add-restroom.page.ts ***!
  \*********************************************************/
/*! exports provided: AddRestroomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRestroomPage", function() { return AddRestroomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var AddRestroomPage = /** @class */ (function () {
    function AddRestroomPage(platform, restService, toastController) {
        this.platform = platform;
        this.restService = restService;
        this.toastController = toastController;
        this.toilet = { "location": "", "description": "", "type": "", "lat": "", "lng": "" };
        this.variable = false;
        if (this.variable == false) {
            this.variable = true;
        }
        else {
            this.addLocation();
            this.presentToast();
        }
    }
    AddRestroomPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Restroom has been added.',
                            duration: 2000,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddRestroomPage.prototype.presentToastWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Click to Close',
                            showCloseButton: true,
                            position: 'middle',
                            closeButtonText: 'Done'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddRestroomPage.prototype.addLocation = function () {
        this.restService.addLocation(this.toilet).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    AddRestroomPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.platform.ready();
                return [2 /*return*/];
            });
        });
    };
    AddRestroomPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-restroom',
            template: __webpack_require__(/*! ./add-restroom.page.html */ "./src/app/pages/add-restroom/add-restroom.page.html"),
            styles: [__webpack_require__(/*! ./add-restroom.page.scss */ "./src/app/pages/add-restroom/add-restroom.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _service_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], AddRestroomPage);
    return AddRestroomPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-restroom-add-restroom-module.js.map