(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(route) {
        this.route = route;
        this.title = 'ofa-client';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.route.navigate(['/login']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_5__["LoginModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customer/customer-add/customer-add.component.css":
/*!******************************************************************!*\
  !*** ./src/app/customer/customer-add/customer-add.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ca_formfield {\r\n    width: 25%;\r\n    padding-right: 25rem;\r\n}"

/***/ }),

/***/ "./src/app/customer/customer-add/customer-add.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/customer/customer-add/customer-add.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"customerFormGroup\">\n  <mat-card class=\"common-mat-card\">\n    <mat-card-header>\n      <mat-card-title>Customer Add</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-form-field  class=\"ca_formfield\" class=\"common-mat-input\">\n        <mat-label>First Name</mat-label>\n        <input matInput placeholder=\"First Name\"  id=\"a_c_firstname\" formControlName=\"first_name\" >\n      </mat-form-field>\n  \n      <mat-form-field class=\"ca_formfield\" class=\"common-mat-input\">\n        <mat-label>Last Name</mat-label>\n        <input matInput placeholder=\"Last Name\" id=\"a_c_lastname\" formControlName=\"last_name\" >\n      </mat-form-field>\n  \n      <mat-form-field class=\"ca_formfield\" class=\"common-mat-input\">\n        <mat-label>Email</mat-label>\n        <input matInput placeholder=\"Email\" id=\"a_c_email\" formControlName=\"email\" >\n      </mat-form-field>\n\n      <mat-form-field class=\"ca_formfield\" class=\"common-mat-input\">\n        <mat-label>Phone</mat-label>\n        <input matInput placeholder=\"Phone\" id=\"a_c_phonenumber\" formControlName=\"phone_number\" >\n      </mat-form-field>\n\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button id=\"a_customersave\" (click) = \"saveCustomer(customerFormGroup.value)\">Save</button>\n      <button mat-button id=\"a_customercancel\" (click) = \"cancel()\">Cancel</button>\n    </mat-card-actions>\n  </mat-card>\n</form>"

/***/ }),

/***/ "./src/app/customer/customer-add/customer-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/customer/customer-add/customer-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: CustomerAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAddComponent", function() { return CustomerAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customer_add_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-add.service */ "./src/app/customer/customer-add/customer-add.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerAddComponent = /** @class */ (function () {
    function CustomerAddComponent(customerAddService) {
        this.customerAddService = customerAddService;
        this.goBack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CustomerAddComponent.prototype.ngOnInit = function () {
        this.customerFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    };
    CustomerAddComponent.prototype.saveCustomer = function (customer) {
        var _this = this;
        this.customerAddService.saveCustomer(customer)
            .subscribe(function (data) { console.log('customer add success, ', data); _this.goBack.emit('customerDetails'); }, function (error) { console.error('customer add error, ', error); });
    };
    CustomerAddComponent.prototype.cancel = function () {
        this.goBack.emit('customerDetails');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomerAddComponent.prototype, "goBack", void 0);
    CustomerAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-add',
            template: __webpack_require__(/*! ./customer-add.component.html */ "./src/app/customer/customer-add/customer-add.component.html"),
            styles: [__webpack_require__(/*! ./customer-add.component.css */ "./src/app/customer/customer-add/customer-add.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_add_service__WEBPACK_IMPORTED_MODULE_2__["CustomerAddService"]])
    ], CustomerAddComponent);
    return CustomerAddComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-add/customer-add.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/customer/customer-add/customer-add.service.ts ***!
  \***************************************************************/
/*! exports provided: CustomerAddService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAddService", function() { return CustomerAddService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_rest_headers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rest-headers.service */ "./src/app/rest-headers.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerAddService = /** @class */ (function () {
    function CustomerAddService(restHeaderService, httpClient) {
        this.restHeaderService = restHeaderService;
        this.httpClient = httpClient;
    }
    CustomerAddService.prototype.saveCustomer = function (customer) {
        var requestBody = {
            email: customer.email,
            first_name: customer.first_name,
            last_name: customer.last_name,
            phone_number: customer.phone_number
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host + 'customer', requestBody, this.restHeaderService.httpHeader);
    };
    CustomerAddService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_rest_headers_service__WEBPACK_IMPORTED_MODULE_1__["RestHeadersService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CustomerAddService);
    return CustomerAddService;
}());



/***/ }),

/***/ "./src/app/customer/customer-details/customer-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/customer/customer-details/customer-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cd_table {\r\n    width: 100% !important; \r\n}\r\n\r\n.cd_card {\r\n    margin-left: 22rem;\r\n    margin-top: 2rem;\r\n    width: 50%;\r\n}\r\n\r\n.cd_buttons {\r\n    padding: 0rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.cd_addButton {\r\n    margin-left: 37rem;\r\n    background-color: rgb(0, 128, 0);\r\n}"

/***/ }),

/***/ "./src/app/customer/customer-details/customer-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/customer/customer-details/customer-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n    <div *ngIf=\"display == 'customerDetails'\">\n        <mat-card class=\"cd_card common_table_card\" *ngIf=\"customerDetails.data.length > 0\">\n            <mat-card-header class=\"common_table_header\">\n                <mat-card-title>Customer</mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <span>\n                    <mat-form-field>\n                      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                    </mat-form-field>\n                  </span>\n      \n                  <span>\n                    <button mat-raised-button color=\"primary\" class=\"cd_addButton\" id=\"a_customeradd\" (click)=\"addCustomer()\">Add</button>\n                  </span>\n              \n                  <div>\n                      <table mat-table [dataSource]=\"customerDetails\" class=\"cd_table\"  matSort>\n                \n                          <!-- FristName Column -->\n                          <ng-container matColumnDef=\"first_name\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> First Name </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.first_name}} </td>\n                          </ng-container>\n                        \n                          <!-- LastName Column -->\n                          <ng-container matColumnDef=\"last_name\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.last_name}} </td>\n                          </ng-container>\n                        \n                          <!-- Email Column -->\n                          <ng-container matColumnDef=\"email\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n                          </ng-container>\n                      \n                          <!-- PhoneNumber Column -->\n                          <ng-container matColumnDef=\"phone_number\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Phone </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.phone_number}} </td>\n                          </ng-container>\n              \n                          <ng-container matColumnDef=\"actions\">\n                            <th mat-header-cell  *matHeaderCellDef > Actions </th>\n                            <td mat-cell *matCellDef=\"let element\" >\n                              <button mat-raised-button color=\"primary\" (click)=\"editCustomer(element)\" class=\"cd_buttons\">Edit</button>\n                              <button mat-raised-button color=\"warn\" id=\"a_customerdelete\" (click)=\"deleteCustomer(element)\" class=\"cd_buttons\">Delete</button>\n                            </td>\n                          </ng-container>\n                      \n                          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                        </table>\n                  \n                        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n                  </div>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    \n    <app-customer-edit *ngIf=\"display == 'customerEdit'\" [customer] = 'customer' (goBack)='open($event)'></app-customer-edit>\n    <app-customer-add *ngIf=\"display == 'customerAdd'\" (goBack)='open($event)'></app-customer-add>\n</div>"

/***/ }),

/***/ "./src/app/customer/customer-details/customer-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/customer/customer-details/customer-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-details.service */ "./src/app/customer/customer-details/customer-details.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent(customerDetailsService) {
        this.customerDetailsService = customerDetailsService;
        this.displayedColumns = ['first_name', 'last_name', 'email', 'phone_number', 'actions'];
        this.display = 'customerDetails';
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
        console.log('================> CustomerDetailsComponent ngOnInit');
        this.getCustomers();
    };
    CustomerDetailsComponent.prototype.getCustomers = function () {
        var _this = this;
        this.customerDetailsService.getCustomer().subscribe(function (data) {
            if (data.length > 0) {
                console.log('customer data ', data);
                _this.customerDetails = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](Array.from(data.values()));
                _this.customerDetails.paginator = _this.paginator;
                _this.customerDetails.sort = _this.sort;
            }
        }, function (error) {
            console.log('something wrong went will making customer get call');
        });
    };
    CustomerDetailsComponent.prototype.ngAfterViewInit = function () {
        console.log('customer details ng after view init');
        this.customerDetails.paginator = this.paginator;
        this.customerDetails.sort = this.sort;
    };
    CustomerDetailsComponent.prototype.applyFilter = function (filterValue) {
        this.customerDetails.filter = filterValue.trim().toLowerCase();
        if (this.customerDetails.paginator) {
            this.customerDetails.paginator.firstPage();
        }
    };
    CustomerDetailsComponent.prototype.editCustomer = function (customer) {
        console.log('edit customer');
        this.display = 'customerEdit';
        this.customer = customer;
    };
    CustomerDetailsComponent.prototype.deleteCustomer = function (customer) {
        var _this = this;
        this.customerDetailsService.deleteCustomer(customer).subscribe(function (data) {
            _this.getCustomers();
        }, function (error) {
            console.error('delete Customer ', error);
        });
    };
    CustomerDetailsComponent.prototype.addCustomer = function () {
        this.display = 'customerAdd';
    };
    CustomerDetailsComponent.prototype.open = function (display) {
        this.display = display;
        this.getCustomers();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], CustomerDetailsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], CustomerDetailsComponent.prototype, "sort", void 0);
    CustomerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-details',
            template: __webpack_require__(/*! ./customer-details.component.html */ "./src/app/customer/customer-details/customer-details.component.html"),
            styles: [__webpack_require__(/*! ./customer-details.component.css */ "./src/app/customer/customer-details/customer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_details_service__WEBPACK_IMPORTED_MODULE_1__["CustomerDetailsService"]])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-details/customer-details.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/customer/customer-details/customer-details.service.ts ***!
  \***********************************************************************/
/*! exports provided: CustomerDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsService", function() { return CustomerDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_rest_headers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rest-headers.service */ "./src/app/rest-headers.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerDetailsService = /** @class */ (function () {
    function CustomerDetailsService(httpClient, restHeadersService) {
        this.httpClient = httpClient;
        this.restHeadersService = restHeadersService;
    }
    CustomerDetailsService.prototype.getCustomer = function () {
        return this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].host + 'customer', this.restHeadersService.httpHeader);
    };
    CustomerDetailsService.prototype.getCustomerById = function (id) {
        return this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].host + 'customer/' + id, this.restHeadersService.httpHeader);
    };
    CustomerDetailsService.prototype.deleteCustomer = function (customer) {
        return this.httpClient.delete(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].host + 'customer/' + customer.id, this.restHeadersService.httpHeader);
    };
    CustomerDetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_rest_headers_service__WEBPACK_IMPORTED_MODULE_1__["RestHeadersService"]])
    ], CustomerDetailsService);
    return CustomerDetailsService;
}());



/***/ }),

/***/ "./src/app/customer/customer-edit/customer-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/customer/customer-edit/customer-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ce_formfield {\r\n    width: 25%;\r\n    padding-right: 25rem;\r\n}"

/***/ }),

/***/ "./src/app/customer/customer-edit/customer-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/customer/customer-edit/customer-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"customerFormGroup\" *ngIf = \"customerFormGroup?.controls != null\">\n    <mat-card class=\"common-mat-card common_table_card\">\n      <mat-card-header class=\"common_table_header\">\n        <mat-card-title>Customer Edit</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <mat-form-field  class=\"ce_formfield\" class=\"common-mat-input\">\n          <mat-label>First Name</mat-label>\n          <input matInput placeholder=\"First Name\" formControlName=\"first_name\" >\n        </mat-form-field>\n    \n        <mat-form-field  class=\"ce_formfield\" class=\"common-mat-input\">\n          <mat-label>Last Name</mat-label>\n          <input matInput placeholder=\"Last Name\" formControlName=\"last_name\" >\n        </mat-form-field>\n    \n        <mat-form-field  class=\"ce_formfield\" class=\"common-mat-input\">\n          <mat-label>Email</mat-label>\n          <input matInput placeholder=\"Email\" formControlName=\"email\" >\n        </mat-form-field>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button (click) = \"saveCustomer()\">Save</button>\n        <button mat-button (click) = \"cancel()\">Cancel</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>"

/***/ }),

/***/ "./src/app/customer/customer-edit/customer-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer/customer-edit/customer-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function() { return CustomerEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customer_edit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-edit.service */ "./src/app/customer/customer-edit/customer-edit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerEditComponent = /** @class */ (function () {
    function CustomerEditComponent(customerEditService) {
        this.customerEditService = customerEditService;
        this.goBack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CustomerEditComponent.prototype.saveCustomer = function () {
        var _this = this;
        this.customerEditService.updateCustomer(this.customerFormGroup.value)
            .subscribe(function (data) {
            console.log(data);
            _this.goBack.emit('customerDetails');
        }, function (error) { return console.error(error); });
    };
    CustomerEditComponent.prototype.ngOnInit = function () {
    };
    CustomerEditComponent.prototype.cancel = function () {
        this.goBack.emit('customerDetails');
    };
    CustomerEditComponent.prototype.ngOnChanges = function (changes) {
        console.log('customer Edit child ', this.customerFormGroup);
        this.customerFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.customer.first_name),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.customer.last_name),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.customer.email),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.customer.id),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.customer.phone_number)
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomerEditComponent.prototype, "customer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomerEditComponent.prototype, "goBack", void 0);
    CustomerEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-edit',
            template: __webpack_require__(/*! ./customer-edit.component.html */ "./src/app/customer/customer-edit/customer-edit.component.html"),
            styles: [__webpack_require__(/*! ./customer-edit.component.css */ "./src/app/customer/customer-edit/customer-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_edit_service__WEBPACK_IMPORTED_MODULE_2__["CustomerEditService"]])
    ], CustomerEditComponent);
    return CustomerEditComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-edit/customer-edit.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/customer/customer-edit/customer-edit.service.ts ***!
  \*****************************************************************/
/*! exports provided: CustomerEditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditService", function() { return CustomerEditService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_rest_headers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rest-headers.service */ "./src/app/rest-headers.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerEditService = /** @class */ (function () {
    function CustomerEditService(restHeaderService, httpClient) {
        this.restHeaderService = restHeaderService;
        this.httpClient = httpClient;
    }
    CustomerEditService.prototype.updateCustomer = function (customer) {
        var requestBody = {
            email: customer.email,
            first_name: customer.first_name,
            last_name: customer.last_name,
            id: customer.id,
            phone_number: customer.phone_number
        };
        return this.httpClient.put(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].host + 'customer/' + customer.id + '/', requestBody, this.restHeaderService.httpHeader);
    };
    CustomerEditService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_rest_headers_service__WEBPACK_IMPORTED_MODULE_1__["RestHeadersService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CustomerEditService);
    return CustomerEditService;
}());



/***/ }),

/***/ "./src/app/customer/customer-home/customer-home.component.css":
/*!********************************************************************!*\
  !*** ./src/app/customer/customer-home/customer-home.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/customer-home/customer-home.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/customer/customer-home/customer-home.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  customer-home works!\n</p>\n"

/***/ }),

/***/ "./src/app/customer/customer-home/customer-home.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer/customer-home/customer-home.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerHomeComponent", function() { return CustomerHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerHomeComponent = /** @class */ (function () {
    function CustomerHomeComponent() {
    }
    CustomerHomeComponent.prototype.ngOnInit = function () {
    };
    CustomerHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-home',
            template: __webpack_require__(/*! ./customer-home.component.html */ "./src/app/customer/customer-home/customer-home.component.html"),
            styles: [__webpack_require__(/*! ./customer-home.component.css */ "./src/app/customer/customer-home/customer-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerHomeComponent);
    return CustomerHomeComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_styles_material_styles_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material-styles/material-styles.module */ "./src/app/material-styles/material-styles.module.ts");
/* harmony import */ var _customer_home_customer_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-home/customer-home.component */ "./src/app/customer/customer-home/customer-home.component.ts");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/customer/customer-details/customer-details.component.ts");
/* harmony import */ var _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-edit/customer-edit.component */ "./src/app/customer/customer-edit/customer-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-add/customer-add.component */ "./src/app/customer/customer-add/customer-add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_styles_material_styles_module__WEBPACK_IMPORTED_MODULE_2__["MaterialStylesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ],
            declarations: [
                _customer_home_customer_home_component__WEBPACK_IMPORTED_MODULE_3__["CustomerHomeComponent"],
                _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__["CustomerDetailsComponent"],
                _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__["CustomerEditComponent"],
                _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_7__["CustomerAddComponent"],
            ],
            exports: [
                _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__["CustomerDetailsComponent"]
            ]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.component.css":
/*!*********************************************!*\
  !*** ./src/app/dialog/dialog.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialog/dialog.component.html":
/*!**********************************************!*\
  !*** ./src/app/dialog/dialog.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Hi {{data.name}}</mat-card-title>\n  </mat-card-header>\n  <mat-card-content style=\"margin-top: 1rem\">\n        <p style=\"font-size: 1.2rem\">\n          {{data.message}}\n        </p>\n    <div mat-dialog-actions>\n      <button mat-raised-button color=\"primary\" id=\"u_dialog\" (click)=\"onOk()\" cdkFocusInitial>Ok</button>\n    </div>\n    \n</mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogComponent.prototype.onOk = function () {
        this.dialogRef.close({ event: 'Ok' });
    };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/dialog/dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.module.ts":
/*!*****************************************!*\
  !*** ./src/app/dialog/dialog.module.ts ***!
  \*****************************************/
/*! exports provided: DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_styles_material_styles_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material-styles/material-styles.module */ "./src/app/material-styles/material-styles.module.ts");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    DialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_styles_material_styles_module__WEBPACK_IMPORTED_MODULE_2__["MaterialStylesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            entryComponents: [_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]],
            declarations: [_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"],]
        })
    ], DialogModule);
    return DialogModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 768px){\r\n  .login-card {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    padding-right: 31rem;\r\n    padding-left: 37rem;\r\n    padding-top: 14rem;\r\n    padding-bottom: 19rem;\r\n    width: 100%;\r\n  }\r\n\r\n  .signup_matcard  {\r\n    margin-top: -3rem !important;\r\n    margin-left: calc(100% + -67%) !important;\r\n    width: 30rem;\r\n  }\r\n\r\n  .sUp_formfield {\r\n    width: 100%;\r\n    padding-right: 25rem;\r\n  }\r\n\r\n  .signUp_buttons {\r\n    padding-left: 1rem;\r\n  }\r\n  \r\n  .login-full-width {\r\n    width: 100%;\r\n  }\r\n\r\n  .login_mat-card {\r\n    margin-top: 4rem !important;\r\n    margin-left: calc(100% + -67%) !important;\r\n\r\n  }\r\n\r\n  .signup {\r\n    background: rgb(88, 207, 49);\r\n    color: white;\r\n  }\r\n\r\n}\r\n\r\n                                            /* LAPTOP */\r\n\r\n                                            @media screen and (max-width: 770px){\r\n    .login-card {\r\n      min-width: 150px;\r\n      max-width: 500px;\r\n      padding-right: 31rem;\r\n      padding-left: 37rem;\r\n      padding-top: 14rem;\r\n      padding-bottom: 19rem;\r\n      width: 100%;\r\n    }\r\n    \r\n    .login-full-width {\r\n      width: 100%;\r\n    }\r\n  \r\n    .login_mat-card {\r\n      margin-top: 16rem !important;\r\n      margin-left: 9.5rem !important;\r\n      width: 28rem;\r\n  \r\n    }\r\n\r\n    .signup_matcard  {\r\n      margin-top: 10rem !important;\r\n      margin-left: 10.5rem !important;\r\n      width: 27rem;\r\n    }\r\n  \r\n    .signup {\r\n      background: rgb(88, 207, 49);\r\n      color: white;\r\n    }\r\n  \r\n    .sUp_formfield {\r\n      width: 100%;\r\n      padding-right: 25rem;\r\n    }\r\n  \r\n  }\r\n\r\n                                            @media screen and (max-width:450px){\r\n  .login-card {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    padding-right: 31rem;\r\n    padding-left: 37rem;\r\n    padding-top: 14rem;\r\n    padding-bottom: 19rem;\r\n    width: 100%;\r\n  }\r\n  \r\n  .login-full-width {\r\n    width: 100%;\r\n  }\r\n\r\n  .login_mat-card {\r\n    margin-top: 13rem !important;\r\n    margin-left: 0rem !important;\r\n\r\n  }\r\n\r\n  .signup_matcard{\r\n    margin-top: 6rem !important;\r\n    margin-left: 0.5rem !important;\r\n    width: 22rem;\r\n\r\n}\r\n\r\n  .signup {\r\n    background: rgb(88, 207, 49);\r\n    color: white;\r\n  }\r\n\r\n  .sUp_formfield {\r\n    width: 100%;\r\n    padding-right: 25rem;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login_background {{display}}\">\n    <form class=\"login-form\" [formGroup]=\"loginFormGroup\" >\n        <mat-card class=\"login_mat-card login-card\" *ngIf=\"display == 'Login'\">\n            <mat-card-header class=\"login-header\">\n                <mat-card-title>Login</mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-form-field class=\"login-full-width\">\n                    <input matInput placeholder=\"UserName\"  id=\"username\" formControlName=\"userName\">\n                    <mat-error *ngIf=\"userName?.errors?.required\">\n                      UserName is <strong>required</strong>\n                    </mat-error>\n                </mat-form-field>\n                <mat-form-field class=\"login-full-width\">\n                    <input matInput placeholder=\"Password\" id=\"password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" required>\n                    <mat-error *ngIf=\"password?.errors?.required\">\n                      Password is <strong>required</strong>\n                    </mat-error>\n                </mat-form-field>\n                \n                <button mat-raised-button color=\"primary\" type=\"submit\" id=\"signin\" (click)=\"Login()\">SignIn</button>\n                <button mat-raised-button class= \"signup\" id=\"signup\" (click)=\"openSignUp()\">SignUp</button>\n                \n            </mat-card-content>\n        </mat-card>    \n    \n        <app-super-user-home *ngIf=\"display == 'SuperUser'\" [customer] = 'customer' (goLogin) = 'openLogin()'></app-super-user-home>\n        <app-user-home *ngIf=\"display == 'Customer'\" [customer] = 'customer' (goLogin) = 'openLogin()'></app-user-home>\n    </form>\n    \n    <form [formGroup]=\"signUpFormGroup\" *ngIf=\"display == 'SignUp'\">\n      <mat-card class=\"signup_matcard\">\n        <mat-card-header>\n          <mat-card-title>SignUp</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <mat-form-field orderFormGroup class=\"sUp_formfield\">\n            <mat-label>User Name</mat-label>\n            <input matInput placeholder=\"User Name\" formControlName=\"userName\">\n          </mat-form-field>\n      \n          <mat-form-field orderFormGroup class=\"sUp_formfield\">\n            <mat-label>Password</mat-label>\n            <input matInput placeholder=\"Password\" formControlName=\"password\">\n          </mat-form-field>\n    \n          <mat-form-field orderFormGroup class=\"sUp_formfield\">\n              <mat-label>First Name</mat-label>\n              <input matInput placeholder=\"First Name\" formControlName=\"firstName\">\n          </mat-form-field>\n    \n          <mat-form-field orderFormGroup class=\"sUp_formfield\">\n              <mat-label>Last Name</mat-label>\n              <input matInput placeholder=\"Last Name\" formControlName=\"lastName\">\n          </mat-form-field>\n    \n          <mat-form-field orderFormGroup class=\"sUp_formfield\">\n              <mat-label>Email</mat-label>\n              <input matInput placeholder=\"Email\" formControlName=\"email\">\n          </mat-form-field>\n          \n          <mat-form-field orderFormGroup class=\"sUp_formfield\">\n              <mat-label>Phone</mat-label>\n              <input matInput placeholder=\"Phone\" formControlName=\"phone\">\n          </mat-form-field>\n    \n          <mat-card-actions class=\"signUp_buttons\">\n            <button mat-raised-button color=\"primary\" id=\"u_addordersubmit\" (click) = \"createUser(signUpFormGroup.value)\">Create User</button>\n            <button mat-raised-button (click) = \"openLogin()\" class=\"ad_cancel\">Cancel</button>\n          </mat-card-actions>\n    \n        </mat-card-content>\n        \n      </mat-card>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _rest_headers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-headers.service */ "./src/app/rest-headers.service.ts");
/* harmony import */ var _customer_customer_details_customer_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer/customer-details/customer-details.service */ "./src/app/customer/customer-details/customer-details.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, restHeaderService, customerDetails) {
        this.loginService = loginService;
        this.restHeaderService = restHeaderService;
        this.customerDetails = customerDetails;
        this.display = 'Login';
        this.hide = true;
        this.loginFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        this.signUpFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.openLogin = function () {
        this.display = 'Login';
        this.loginFormGroup.updateValueAndValidity();
        this.loginFormGroup.reset();
        // this.loginFormGroup.validator.
    };
    LoginComponent.prototype.openSignUp = function () {
        this.display = 'SignUp';
        this.signUpFormGroup.reset();
    };
    LoginComponent.prototype.createUser = function (user) {
        var _this = this;
        this.loginService.createUser(user.password, user.userName, user.firstName, user.lastName, user.email).subscribe(function (data) {
            console.log('user has been successfully added ', data);
            var userDetails = data.filter(function (data) { return (data.email && data.email == user.email); });
            var userId = userDetails.length > 0 ? userDetails[0].id : '';
            console.log('==============> userId ', userId);
            _this.loginService.createCustomer(user.email, user.firstName, user.lastName, user.phone, userId).subscribe(function (data) {
                console.log('customer has been successfully added, ', data);
                _this.openLogin();
            }, function (error) { console.log('customer addition fialed, ', error); });
        }, function (error) { console.log('user login failed ', error); });
    };
    LoginComponent.prototype.Login = function () {
        var _this = this;
        this.loginService.login(this.loginFormGroup.get('userName').value, this.loginFormGroup.get('password').value).subscribe(function (data) {
            console.log('data from the service ', data);
            if (data && data.token) {
                _this.restHeaderService.setHttpHeaders(data.token);
                var jwtUser_1 = JSON.parse(atob(data.token.split('.')[1]));
                var email = jwtUser_1.email;
                var user_id = jwtUser_1.user_id;
                console.log('------------------> ', jwtUser_1.username);
                console.log('------------------> ', data.token);
                if ("instructor" == jwtUser_1.username) {
                    _this.loginService.getCustomerByUserId(user_id).subscribe(function (data) {
                        console.log('--------------------><------------------, ', data);
                        _this.customer = data;
                        _this.display = 'SuperUser';
                    }, function (error) {
                        _this.display = 'SuperUser';
                        console.log('Customer search failed');
                    });
                }
                else {
                    _this.loginService.getCustomerByUserId(user_id).subscribe(function (data) {
                        console.log('--------------------><------------------, ', data);
                        _this.customer = data;
                        _this.display = 'Customer';
                    }, function (error) {
                        _this.display = 'Customer';
                        console.log('Customer search failed');
                    });
                }
                console.log('dispaly, ', _this.display);
            }
        }, function (error) {
            _this.display = 'Login';
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _rest_headers_service__WEBPACK_IMPORTED_MODULE_3__["RestHeadersService"],
            _customer_customer_details_customer_details_service__WEBPACK_IMPORTED_MODULE_4__["CustomerDetailsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _material_styles_material_styles_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material-styles/material-styles.module */ "./src/app/material-styles/material-styles.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _super_user_home_super_user_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../super-user-home/super-user-home.module */ "./src/app/super-user-home/super-user-home.module.ts");
/* harmony import */ var _user_home_user_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-home/user-home.module */ "./src/app/user-home/user-home.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_styles_material_styles_module__WEBPACK_IMPORTED_MODULE_3__["MaterialStylesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _super_user_home_super_user_home_module__WEBPACK_IMPORTED_MODULE_5__["SuperUserHomeModule"],
                _user_home_user_home_module__WEBPACK_IMPORTED_MODULE_6__["UserHomeModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]],
            exports: [
                _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService, jwtResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtResponse", function() { return jwtResponse; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _rest_headers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-headers.service */ "./src/app/rest-headers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(httpClient, restHeadersService) {
        this.httpClient = httpClient;
        this.restHeadersService = restHeadersService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.createUserhttpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic aW5zdHJ1Y3RvcjptYXZlcmljazFh'
            })
        };
    }
    LoginService.prototype.login = function (userName, password) {
        var responseBody;
        var requestBody = {
            "username": userName,
            "password": password
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host + 'api-token-auth/', requestBody, this.httpOptions);
    };
    LoginService.prototype.getCustomerByUserId = function (userId) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host + 'customerById/' + userId, this.restHeadersService.httpHeader);
    };
    LoginService.prototype.getCustomer = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host + 'customer', this.restHeadersService.httpHeader);
    };
    LoginService.prototype.createUser = function (password, userName, firstName, lastName, email) {
        var requestBody = {
            "password": password,
            "last_login": null,
            "is_superuser": false,
            "username": userName,
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "is_staff": true,
            "is_active": true,
            "groups": [],
            "user_permissions": []
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host + 'proxy', requestBody, this.createUserhttpOptions);
    };
    LoginService.prototype.createCustomer = function (email, firstName, lastName, phone, user) {
        var requestBody = {
            email: email,
            first_name: firstName,
            last_name: lastName,
            phone_number: phone,
            user: user
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host + 'customer', requestBody, this.createUserhttpOptions);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _rest_headers_service__WEBPACK_IMPORTED_MODULE_3__["RestHeadersService"]])
    ], LoginService);
    return LoginService;
}());

var jwtResponse = /** @class */ (function () {
    function jwtResponse() {
    }
    return jwtResponse;
}());



/***/ }),

/***/ "./src/app/material-styles/material-styles.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-styles/material-styles.module.ts ***!
  \***********************************************************/
/*! exports provided: MaterialStylesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialStylesModule", function() { return MaterialStylesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var MaterialStylesModule = /** @class */ (function () {
    function MaterialStylesModule() {
    }
    MaterialStylesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__["CdkTreeModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_40__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__["BrowserAnimationsModule"],
            ]
        })
    ], MaterialStylesModule);
    return MaterialStylesModule;
}());



/***/ }),

/***/ "./src/app/menu-type/add-order/add-order.component.css":
/*!*************************************************************!*\
  !*** ./src/app/menu-type/add-order/add-order.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ca_formfield {\r\n    width: 50%;\r\n    padding-right: 25rem;\r\n}\r\n\r\n.mat-input-element:disabled {\r\n    color: rgb(0, 0, 0) !important;\r\n}\r\n\r\n.ce_select {\r\n    display: block;\r\n    width: 25%;\r\n}\r\n\r\n.cd_card {\r\n    margin-left: 22rem;\r\n    margin-top: 2rem;\r\n    width: 50%;\r\n}\r\n\r\n.cd_buttons {\r\n    padding: 0rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.cd_addButton {\r\n    margin-left: 37rem;\r\n    background-color: rgb(0, 128, 0);\r\n}\r\n\r\n.mat-card {\r\n    width: 33% !important;\r\n    margin-left: 30rem !important;\r\n    margin-top: 10rem !important;\r\n    \r\n}\r\n\r\n.mat-card-content {\r\n    padding-left: 1rem !important;\r\n    padding-bottom: 1rem !important;\r\n    padding-top: 1rem !important;\r\n}\r\n\r\n.mat-card-actions {\r\n    margin-left: 0.5rem !important\r\n}"

/***/ }),

/***/ "./src/app/menu-type/add-order/add-order.component.html":
/*!**************************************************************!*\
  !*** ./src/app/menu-type/add-order/add-order.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"orderFormGroup\">\n  <mat-card class=\"common_table_card\">\n    <mat-card-header class=\"common_table_header\">\n      <mat-card-title>Add Order</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-form-field orderFormGroup class=\"ca_formfield\">\n        <mat-label>Name</mat-label>\n        <input matInput placeholder=\"Name\" formControlName=\"name\">\n      </mat-form-field>\n  \n      <mat-form-field orderFormGroup class=\"ca_formfield\">\n        <mat-label>Menu</mat-label>\n        <input matInput placeholder=\"Menu\" formControlName=\"menu\">\n      </mat-form-field>\n\n      <mat-form-field class=\"ce_select\">\n        <mat-label>Order Type</mat-label>\n        <mat-select id = \"u_addordertype\" formControlName=\"orderType\">\n          <mat-option *ngFor=\"let type of orderTypes\" [value]=\"type.value\">\n            {{type.viewValue}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"ce_select\">\n        <mat-label>Quantity</mat-label>\n        <mat-select id = \"u_addquantity\" formControlName=\"quantity\">\n          <mat-option *ngFor=\"let type of quantities\" [value]=\"type.value\">\n            {{type.viewValue}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field orderFormGroup class=\"ca_formfield\">\n        <mat-label>Time Of Arriaval</mat-label>\n        <input id = \"u_addordertimeofarival\" type=\"time\" matInput placeholder=\"Time Of Arriaval\" formControlName=\"timeOfArriaval\">\n      </mat-form-field>\n\n      <mat-card-actions>\n        <button mat-raised-button color=\"primary\" id=\"u_addordersubmit\" (click) = \"addOrder(orderFormGroup.value)\">Submit</button>\n        <button mat-raised-button (click) = \"cancel()\" class=\"ad_cancel\">Cancel</button>\n      </mat-card-actions>\n\n    </mat-card-content>\n    \n  </mat-card>\n</form>"

/***/ }),

/***/ "./src/app/menu-type/add-order/add-order.component.ts":
/*!************************************************************!*\
  !*** ./src/app/menu-type/add-order/add-order.component.ts ***!
  \************************************************************/
/*! exports provided: AddOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrderComponent", function() { return AddOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_order_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/order/order.service */ "./src/app/order/order.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddOrderComponent = /** @class */ (function () {
    function AddOrderComponent(orderService, dialog) {
        this.orderService = orderService;
        this.dialog = dialog;
        this.goBack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.orderTypes = [
            { value: 'take out', viewValue: 'take out' },
            { value: 'dine in', viewValue: 'dine in' }
        ];
        this.quantities = [
            { value: '1', viewValue: '1' },
            { value: '2', viewValue: '2' },
            { value: '3', viewValue: '3' },
            { value: '4', viewValue: '4' },
            { value: '5', viewValue: '5' }
        ];
    }
    AddOrderComponent.prototype.ngOnInit = function () {
        this.fullName = this.customer.first_name + " " + this.customer.last_name;
        console.log(this.menu);
        console.log('===============custmoer=================', this.customer);
        this.orderFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.fullName, disabled: true }),
            menu: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.menu.menu_name, disabled: true }),
            orderType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            timeOfArriaval: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    };
    AddOrderComponent.prototype.addOrder = function (orderDetails) {
        var _this = this;
        var date = new Date();
        var arrivalTime = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + "T" + orderDetails.timeOfArriaval + ":00Z";
        console.log(date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + "T" + orderDetails.timeOfArriaval + ":00Z");
        this.orderService.addOrder(orderDetails.orderType, arrivalTime, orderDetails.quantity, this.customer.id, this.menu.id).subscribe(function (data) {
            console.log('add order is successful, ', data);
            _this.openDialog('Your order has been successfully submitted!');
        }, function (error) {
            console.log('add order failed, ', error);
            _this.openDialog('Sorry! there is a technical error at our end.');
        });
        // this.customerAddService.saveCustomer(customer)
        //   .subscribe(data => {console.log('customer add success, ', data); this.goBack.emit('customerDetails');}, error => {console.error('customer add error, ', error)});
    };
    AddOrderComponent.prototype.openDialog = function (message) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
            width: '30rem',
            data: { name: this.fullName, message: message }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result.event);
            if (result.event === 'Ok') {
                _this.goBack.emit('userHome');
            }
        });
    };
    AddOrderComponent.prototype.cancel = function () {
        this.goBack.emit('menuById');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddOrderComponent.prototype, "goBack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddOrderComponent.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddOrderComponent.prototype, "customer", void 0);
    AddOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-order',
            template: __webpack_require__(/*! ./add-order.component.html */ "./src/app/menu-type/add-order/add-order.component.html"),
            styles: [__webpack_require__(/*! ./add-order.component.css */ "./src/app/menu-type/add-order/add-order.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_order_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AddOrderComponent);
    return AddOrderComponent;
}());



/***/ }),

/***/ "./src/app/menu-type/menu-by-type/menu-by-type.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/menu-type/menu-by-type/menu-by-type.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cd_table {\r\n    width: 100% !important; \r\n}\r\n\r\n.cd_card {\r\n    margin-left: 22rem;\r\n    margin-top: 2rem;\r\n    width: 50%;\r\n}\r\n\r\n.cd_buttons {\r\n    padding: 0rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.cd_addButton {\r\n    margin-left: 37rem;\r\n    background-color: rgb(0, 128, 0);\r\n}"

/***/ }),

/***/ "./src/app/menu-type/menu-by-type/menu-by-type.component.html":
/*!********************************************************************!*\
  !*** ./src/app/menu-type/menu-by-type/menu-by-type.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"display == 'menuById'\">\n  <mat-card class=\"cd_card common_table_card\" *ngIf=\"menuDetails.data.length > 0\">\n      <mat-card-header class=\"common_table_header\">\n          <mat-card-title>{{type}}</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n          <span>\n              <mat-form-field>\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n              </mat-form-field>\n            </span>\n          \n            <div>\n                <table mat-table [dataSource]=\"menuDetails\" class=\"cd_table\"  matSort>\n          \n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"name\">\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.menu_name}} </td>\n                    </ng-container>\n                  \n                    <!-- Price Column -->\n                    <ng-container matColumnDef=\"price\">\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header> Price </th>\n                      <td mat-cell *matCellDef=\"let element\"> ${{element.unit_price}} </td>\n                    </ng-container>\n          \n                    <ng-container matColumnDef=\"actions\">\n                      <th mat-header-cell  *matHeaderCellDef > Actions </th>\n                      <td mat-cell *matCellDef=\"let element\" >\n                        <button mat-raised-button color=\"primary\" id=\"u_addorder\" (click)=\"addOrder(element)\" class=\"cd_buttons\">Add</button>\n                      </td>\n                    </ng-container>\n                \n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                  </table>\n            \n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n            </div>\n      </mat-card-content>\n    \n  </mat-card>\n</div>\n\n<app-add-order *ngIf=\"display == 'addOrder'\" [menu] = 'menu' [customer] = 'customer' (goBack) = 'goBack($event)'></app-add-order>"

/***/ }),

/***/ "./src/app/menu-type/menu-by-type/menu-by-type.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/menu-type/menu-by-type/menu-by-type.component.ts ***!
  \******************************************************************/
/*! exports provided: MenuByTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuByTypeComponent", function() { return MenuByTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/menu/menu.service */ "./src/app/menu/menu.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuByTypeComponent = /** @class */ (function () {
    function MenuByTypeComponent(menuService) {
        this.menuService = menuService;
        this.goBackHome = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayedColumns = ['name', 'price', 'actions'];
        this.display = 'menuById';
    }
    MenuByTypeComponent.prototype.ngOnInit = function () {
        console.log('================> MenuDetailsComponent ngOnInit');
        this.getMenu();
    };
    MenuByTypeComponent.prototype.ngAfterViewInit = function () {
        console.log('menu by type ng after view init', this.type);
        this.menuDetails.paginator = this.paginator;
        this.menuDetails.sort = this.sort;
    };
    MenuByTypeComponent.prototype.applyFilter = function (filterValue) {
        this.menuDetails.filter = filterValue.trim().toLowerCase();
        if (this.menuDetails.paginator) {
            this.menuDetails.paginator.firstPage();
        }
    };
    MenuByTypeComponent.prototype.getMenu = function () {
        var _this = this;
        this.menuService.getMenu().subscribe(function (data) {
            if (data.length > 0) {
                var menu = data.filter(function (menu) {
                    console.log(menu.menu_type, _this.type);
                    return menu.menu_type == _this.type;
                });
                console.log('menu data ', menu);
                _this.menuDetails = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](Array.from(menu.values()));
                _this.menuDetails.paginator = _this.paginator;
                _this.menuDetails.sort = _this.sort;
            }
        }, function (error) {
            console.error('getMenu has failed, ', error);
        });
    };
    MenuByTypeComponent.prototype.addOrder = function (menu) {
        this.display = 'addOrder';
        this.menu = menu;
    };
    MenuByTypeComponent.prototype.goBack = function (event) {
        console.log(event);
        if (event === 'userHome') {
            this.goBackHome.emit('User');
        }
        else {
            this.display = 'menuById';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MenuByTypeComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MenuByTypeComponent.prototype, "customer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MenuByTypeComponent.prototype, "goBackHome", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], MenuByTypeComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], MenuByTypeComponent.prototype, "sort", void 0);
    MenuByTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-by-type',
            template: __webpack_require__(/*! ./menu-by-type.component.html */ "./src/app/menu-type/menu-by-type/menu-by-type.component.html"),
            styles: [__webpack_require__(/*! ./menu-by-type.component.css */ "./src/app/menu-type/menu-by-type/menu-by-type.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])
    ], MenuByTypeComponent);
    return MenuByTypeComponent;
}());



/***/ }),

/***/ "./src/app/menu-type/menu-type.module.ts":
/*!***********************************************!*\
  !*** ./src/app/menu-type/menu-type.module.ts ***!
  \***********************************************/
/*! exports provided: MenuTypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTypeModule", function() { return MenuTypeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_styles_material_styles_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material-styles/material-styles.module */ "./src/app/material-styles/material-styles.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _menu_by_type_menu_by_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-by-type/menu-by-type.component */ "./src/app/menu-type/menu-by-type/menu-by-type.component.ts");
/* harmony import */ var _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-order/add-order.component */ "./src/app/menu-type/add-order/add-order.component.ts");
/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog/dialog.module */ "./src/app/dialog/dialog.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MenuTypeModule = /** @class */ (function () {
    function MenuTypeModule() {
    }
    MenuTypeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_styles_material_styles_module__WEBPACK_IMPORTED_MODULE_2__["MaterialStylesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_6__["DialogModule"],
            ],
            declarations: [_menu_by_type_menu_by_type_component__WEBPACK_IMPORTED_MODULE_4__["MenuByTypeComponent"], _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_5__["AddOrderComponent"]],
            exports: [_menu_by_type_menu_by_type_component__WEBPACK_IMPORTED_MODULE_4__["MenuByTypeComponent"]]
        })
    ], MenuTypeModule);
    return MenuTypeModule;
}());



/***/ }),

/***/ "./src/app/menu/menu-add/menu-add.component.css":
/*!******************************************************!*\
  !*** ./src/app/menu/menu-add/menu-add.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ca_formfield {\r\n    width: 25%;\r\n    padding-right: 25rem;\r\n}\r\n\r\n.ce_select {\r\n    display: block;\r\n    width: 25%;\r\n}"

/***/ }),

/***/ "./src/app/menu/menu-add/menu-add.component.html":
/*!*******************************************************!*\
  !*** ./src/app/menu/menu-add/menu-add.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"menuFormGroup\">\n  <mat-card class=\"common-mat-card\">\n    <mat-card-header>\n      <mat-card-title>Menu Add</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-form-field  menuFormGroup class=\"ca_formfield\" class=\"common-mat-input\">\n        <mat-label>Name</mat-label>\n        <input matInput placeholder=\"Name\" id=\"a_menuname\" formControlName=\"menu_name\" >\n      </mat-form-field>\n  \n      <mat-form-field class=\"ce_select\" class=\"common-mat-input\">\n        <mat-label>Menu Type</mat-label>\n        <mat-select id=\"a_menutype\" formControlName=\"menu_type\" >\n          <mat-option *ngFor=\"let type of menuTypes\" [value]=\"type.value\">\n            {{type.viewValue}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field menuFormGroup class=\"ca_formfield\" class=\"common-mat-input\">\n        <mat-label>Price</mat-label>\n        <input matInput placeholder=\"Price\" id=\"a_menuprice\" formControlName=\"unit_price\" >\n      </mat-form-field>\n\n    \n      <mat-card-actions>\n        <button mat-button id=\"a_menusave\" (click) = \"saveMenu(menuFormGroup.value)\">Save</button>\n        <button mat-button id=\"a_menucancel\" (click) = \"cancel()\">Cancel</button>\n      </mat-card-actions>\n\n    </mat-card-content>\n  </mat-card>\n</form>"

/***/ }),

/***/ "./src/app/menu/menu-add/menu-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/menu/menu-add/menu-add.component.ts ***!
  \*****************************************************/
/*! exports provided: MenuAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAddComponent", function() { return MenuAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu.service */ "./src/app/menu/menu.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuAddComponent = /** @class */ (function () {
    function MenuAddComponent(menuService) {
        this.menuService = menuService;
        this.goBack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.menuTypes = [
            { value: 'Appetizer', viewValue: 'Appetizers' },
            { value: 'MainCourse', viewValue: 'Main Course' },
            { value: 'Desserts', viewValue: 'Desserts' }
        ];
    }
    MenuAddComponent.prototype.ngOnInit = function () {
        this.menuFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            menu_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            menu_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            unit_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    };
    MenuAddComponent.prototype.saveMenu = function (menu) {
        var _this = this;
        this.menuService.addMenu(menu)
            .subscribe(function (data) { console.log('menu add success, ', data); _this.goBack.emit('menuDetails'); }, function (error) { console.error('customer add error, ', error); });
    };
    MenuAddComponent.prototype.cancel = function () {
        this.goBack.emit('menuDetails');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MenuAddComponent.prototype, "goBack", void 0);
    MenuAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-add',
            template: __webpack_require__(/*! ./menu-add.component.html */ "./src/app/menu/menu-add/menu-add.component.html"),
            styles: [__webpack_require__(/*! ./menu-add.component.css */ "./src/app/menu/menu-add/menu-add.component.css")]
        }),
        __metadata("design:paramtypes", [_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])
    ], MenuAddComponent);
    return MenuAddComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu-details/menu-details.component.css":
/*!**************************************************************!*\
  !*** ./src/app/menu/menu-details/menu-details.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cd_table {\r\n    width: 100% !important; \r\n}\r\n\r\n.cd_card {\r\n    margin-left: 22rem;\r\n    margin-top: 2rem;\r\n    width: 50%;\r\n}\r\n\r\n.cd_buttons {\r\n    padding: 0rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.cd_addButton {\r\n    margin-left: 37rem;\r\n    background-color: rgb(0, 128, 0);\r\n}"

/***/ }),

/***/ "./src/app/menu/menu-details/menu-details.component.html":
/*!***************************************************************!*\
  !*** ./src/app/menu/menu-details/menu-details.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n  <div *ngIf=\"display == 'menuDetails'\">\n      <mat-card class=\"cd_card common_table_card\" *ngIf=\"menuDetails.data.length > 0\">\n          <mat-card-header class=\"common_table_header\">\n              <mat-card-title>Menu</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n              <span>\n                  <mat-form-field>\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                  </mat-form-field>\n                </span>\n      \n                <span>\n                  <button mat-raised-button color=\"primary\" class=\"cd_addButton\" id=\"a_menuadd\" (click)=\"addMenu()\">Add</button>\n                </span>\n            \n                <div>\n                    <table mat-table [dataSource]=\"menuDetails\" class=\"cd_table\"  matSort>\n              \n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"name\">\n                          <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.menu_name}} </td>\n                        </ng-container>\n                      \n                        <!-- Type Column -->\n                        <ng-container matColumnDef=\"type\">\n                          <th mat-header-cell *matHeaderCellDef mat-sort-header> Type </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.menu_type}} </td>\n                        </ng-container>\n                      \n                        <!-- Price Column -->\n                        <ng-container matColumnDef=\"price\">\n                          <th mat-header-cell *matHeaderCellDef mat-sort-header> Price </th>\n                          <td mat-cell *matCellDef=\"let element\"> ${{element.unit_price}} </td>\n                        </ng-container>\n            \n                        <ng-container matColumnDef=\"actions\">\n                          <th mat-header-cell  *matHeaderCellDef > Actions </th>\n                          <td mat-cell *matCellDef=\"let element\" >\n                            <button mat-raised-button color=\"primary\" (click)=\"editMenu(element)\" class=\"cd_buttons\">Edit</button>\n                            <button mat-raised-button color=\"warn\" id=\"a_menudelete\" (click)=\"deleteMenu(element)\" class=\"cd_buttons\">Delete</button>\n                          </td>\n                        </ng-container>\n                    \n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                      </table>\n                \n                      <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n                </div>\n          </mat-card-content>\n      </mat-card>\n  </div>\n  \n  <app-menu-edit *ngIf=\"display == 'menuEdit'\" [menuDetails] = 'menu' (goBack)='open($event)'></app-menu-edit>\n  <app-menu-add *ngIf=\"display == 'menuAdd'\" (goBack)='open($event)'></app-menu-add>\n</div>"

/***/ }),

/***/ "./src/app/menu/menu-details/menu-details.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/menu/menu-details/menu-details.component.ts ***!
  \*************************************************************/
/*! exports provided: MenuDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDetailsComponent", function() { return MenuDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu.service */ "./src/app/menu/menu.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuDetailsComponent = /** @class */ (function () {
    function MenuDetailsComponent(menuService) {
        this.menuService = menuService;
        this.displayedColumns = ['name', 'type', 'price', 'actions'];
        this.display = 'menuDetails';
    }
    MenuDetailsComponent.prototype.ngOnInit = function () {
        console.log('================> MenuDetailsComponent ngOnInit');
        this.getMenu();
    };
    MenuDetailsComponent.prototype.getMenu = function () {
        var _this = this;
        this.menuService.getMenu().subscribe(function (data) {
            if (data.length > 0) {
                console.log('menu data ', data);
                _this.menuDetails = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](Array.from(data.values()));
                _this.menuDetails.paginator = _this.paginator;
                _this.menuDetails.sort = _this.sort;
            }
        }, function (error) {
            console.log('something wrong went will making menu get call');
        });
    };
    MenuDetailsComponent.prototype.ngAfterViewInit = function () {
        console.log('menu details ng after view init');
        this.menuDetails.paginator = this.paginator;
        this.menuDetails.sort = this.sort;
    };
    MenuDetailsComponent.prototype.applyFilter = function (filterValue) {
        this.menuDetails.filter = filterValue.trim().toLowerCase();
        if (this.menuDetails.paginator) {
            this.menuDetails.paginator.firstPage();
        }
    };
    MenuDetailsComponent.prototype.editMenu = function (menu) {
        console.log('edit menu');
        this.display = 'menuEdit';
        this.menu = menu;
    };
    MenuDetailsComponent.prototype.deleteMenu = function (menu) {
        var _this = this;
        console.log(menu);
        this.menuService.deleteMenu(menu).subscribe(function (data) {
            _this.getMenu();
        }, function (error) {
            console.error('delete Menu ', error);
        });
    };
    MenuDetailsComponent.prototype.addMenu = function () {
        this.display = 'menuAdd';
    };
    MenuDetailsComponent.prototype.open = function (display) {
        this.display = display;
        this.getMenu();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], MenuDetailsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], MenuDetailsComponent.prototype, "sort", void 0);
    MenuDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-details',
            template: __webpack_require__(/*! ./menu-details.component.html */ "./src/app/menu/menu-details/menu-details.component.html"),
            styles: [__webpack_require__(/*! ./menu-details.component.css */ "./src/app/menu/menu-details/menu-details.component.css")]
        }),
        __metadata("design:paramtypes", [_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])
    ], MenuDetailsComponent);
    return MenuDetailsComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu-edit/menu-edit.component.css":
/*!********************************************************!*\
  !*** ./src/app/menu/menu-edit/menu-edit.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ce_formfield {\r\n    width: 25%;\r\n    padding-right: 25rem;\r\n}\r\n\r\n.ce_select {\r\n    display: block;\r\n    width: 25%;\r\n}"

/***/ }),

/***/ "./src/app/menu/menu-edit/menu-edit.component.html":
/*!*********************************************************!*\
  !*** ./src/app/menu/menu-edit/menu-edit.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"menuFormGroup\">\n  <mat-card class=\"common-mat-card common_table_card\">\n    <mat-card-header class=\"common_table_header\">\n      <mat-card-title>Menu Add</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-form-field  class=\"ce_formfield\" class=\"common-mat-input\">\n        <mat-label>Name</mat-label>\n        <input matInput placeholder=\"Name\" formControlName=\"menu_name\"  class=\"common-mat-input\">\n      </mat-form-field>\n\n      <mat-form-field class=\"ce_select\" class=\"common-mat-input\">\n        <mat-label>Type</mat-label>\n        <mat-select formControlName=\"menu_type\" >\n          <mat-option *ngFor=\"let foodType of foodTypes\" [value]=\"foodType.value\">\n            {{foodType.viewValue}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      \n  \n      <mat-form-field  class=\"ce_formfield\" class=\"common-mat-input\">\n        <mat-label>Price</mat-label>\n        <input matInput placeholder=\"Price\" formControlName=\"unit_price\" >\n      </mat-form-field>\n\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button (click) = \"saveMenu(menuFormGroup.value)\">Save</button>\n      <button mat-button (click) = \"cancel()\">Cancel</button>\n    </mat-card-actions>\n  </mat-card>\n</form>"

/***/ }),

/***/ "./src/app/menu/menu-edit/menu-edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/menu/menu-edit/menu-edit.component.ts ***!
  \*******************************************************/
/*! exports provided: MenuEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuEditComponent", function() { return MenuEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu.service */ "./src/app/menu/menu.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuEditComponent = /** @class */ (function () {
    function MenuEditComponent(menuService) {
        this.menuService = menuService;
        this.goBack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.foodTypes = [
            { value: 'Appetizer', viewValue: 'Appetizer' },
            { value: 'Desserts', viewValue: 'Desserts' },
            { value: 'MainCourse', viewValue: 'Main Course' }
        ];
    }
    MenuEditComponent.prototype.ngOnInit = function () {
        this.menuFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.menuDetails.id),
            menu_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.menuDetails.menu_name),
            menu_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.menuDetails.menu_type),
            unit_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.menuDetails.unit_price)
        });
    };
    MenuEditComponent.prototype.saveMenu = function (menu) {
        var _this = this;
        this.menuService.editMenu(menu)
            .subscribe(function (data) { console.log('menu add success, ', data); _this.goBack.emit('menuDetails'); }, function (error) { console.error('customer add error, ', error); });
    };
    MenuEditComponent.prototype.cancel = function () {
        this.goBack.emit('menuDetails');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MenuEditComponent.prototype, "goBack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MenuEditComponent.prototype, "menuDetails", void 0);
    MenuEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-edit',
            template: __webpack_require__(/*! ./menu-edit.component.html */ "./src/app/menu/menu-edit/menu-edit.component.html"),
            styles: [__webpack_require__(/*! ./menu-edit.component.css */ "./src/app/menu/menu-edit/menu-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])
    ], MenuEditComponent);
    return MenuEditComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menu_details_menu_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-details/menu-details.component */ "./src/app/menu/menu-details/menu-details.component.ts");
/* harmony import */ var _menu_edit_menu_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-edit/menu-edit.component */ "./src/app/menu/menu-edit/menu-edit.component.ts");
/* harmony import */ var _menu_add_menu_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-add/menu-add.component */ "./src/app/menu/menu-add/menu-add.component.ts");
/* harmony import */ var _material_styles_material_styles_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material-styles/material-styles.module */ "./src/app/material-styles/material-styles.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_styles_material_styles_module__WEBPACK_IMPORTED_MODULE_5__["MaterialStylesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ],
            declarations: [_menu_details_menu_details_component__WEBPACK_IMPORTED_MODULE_2__["MenuDetailsComponent"], _menu_edit_menu_edit_component__WEBPACK_IMPORTED_MODULE_3__["MenuEditComponent"], _menu_add_menu_add_component__WEBPACK_IMPORTED_MODULE_4__["MenuAddComponent"]],
            exports: [_menu_details_menu_details_component__WEBPACK_IMPORTED_MODULE_2__["MenuDetailsComponent"]]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.service.ts":
/*!**************************************!*\
  !*** ./src/app/menu/menu.service.ts ***!
  \**************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rest_headers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest-headers.service */ "./src/app/rest-headers.service.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuService = /** @class */ (function () {
    function MenuService(httpClient, restHeadersService) {
        this.httpClient = httpClient;
        this.restHeadersService = restHeadersService;
    }
    MenuService.prototype.getMenu = function () {
        return this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].host + 'menu', this.restHeadersService.httpHeader);
    };
    MenuService.prototype.getMenuById = function (id) {
        return this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].host + 'menu/' + id + '/', this.restHeadersService.httpHeader);
    };
    MenuService.prototype.addMenu = function (menu) {
        var requestBody = {
            menu_name: menu.menu_name,
            menu_type: menu.menu_type,
            unit_price: menu.unit_price
        };
        return this.httpClient.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].host + 'menu', requestBody, this.restHeadersService.httpHeader);
    };
    MenuService.prototype.editMenu = function (menu) {
        var requestBody = {
            menu_name: menu.menu_name,
            menu_type: menu.menu_type,
            unit_price: menu.unit_price
        };
        var id = menu.id;
        return this.httpClient.put(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].host + 'menu/' + id + '/', requestBody, this.restHeadersService.httpHeader);
    };
    MenuService.prototype.deleteMenu = function (menu) {
        var id = menu.id;
        return this.httpClient.delete(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].host + 'menu/' + id + '/', this.restHeadersService.httpHeader);
    };
    MenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _rest_headers_service__WEBPACK_IMPORTED_MODULE_2__["RestHeadersService"]])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/order/order-add/order-add.component.css":
/*!*********************************************************!*\
  !*** ./src/app/order/order-add/order-add.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order/order-add/order-add.component.html":
/*!**********************************************************!*\
  !*** ./src/app/order/order-add/order-add.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  order-add works!\n</p>\n"

/***/ }),

/***/ "./src/app/order/order-add/order-add.component.ts":
/*!********************************************************!*\
  !*** ./src/app/order/order-add/order-add.component.ts ***!
  \********************************************************/
/*! exports provided: OrderAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderAddComponent", function() { return OrderAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderAddComponent = /** @class */ (function () {
    function OrderAddComponent() {
    }
    OrderAddComponent.prototype.ngOnInit = function () {
    };
    OrderAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-add',
            template: __webpack_require__(/*! ./order-add.component.html */ "./src/app/order/order-add/order-add.component.html"),
            styles: [__webpack_require__(/*! ./order-add.component.css */ "./src/app/order/order-add/order-add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderAddComponent);
    return OrderAddComponent;
}());



/***/ }),

/***/ "./src/app/order/order-details/order-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/order/order-details/order-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cd_table {\r\n    width: 100% !important; \r\n}\r\n\r\n\r\n\r\n.cd_card {\r\n    margin-left: 22rem;\r\n    margin-top: 2rem;\r\n    width: 50%;\r\n}\r\n\r\n\r\n\r\n/* laptop view */\r\n\r\n\r\n\r\n/* .cd_card {\r\n    margin-left: 22rem;\r\n    margin-top: 2rem;\r\n    width: 60%;\r\n} */\r\n\r\n\r\n\r\n.cd_buttons {\r\n    padding: 0rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n\r\n\r\n.cd_addButton {\r\n    margin-left: 37rem;\r\n    background-color: rgb(0, 128, 0);\r\n}"

/***/ }),

/***/ "./src/app/order/order-details/order-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/order/order-details/order-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n  <div >\n      <mat-card class=\"cd_card common_table_card\" *ngIf=\"orderDetails.data.length > 0\">\n          <mat-card-header class=\"common_table_header\">\n              <mat-card-title>Orders</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n              <span>\n                  <mat-form-field>\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                  </mat-form-field>\n                </span>\n            \n                <div>\n                    <table mat-table [dataSource]=\"orderDetails\" class=\"cd_table\"  matSort>\n              \n                        <!-- customer Name Column -->\n                        <ng-container matColumnDef=\"customer_name\">\n                          <th mat-header-cell *matHeaderCellDef mat-sort-header>Customer Name </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.customer_name}} </td>\n                        </ng-container>\n                      \n                        <!-- customer phone -->\n                        <ng-container matColumnDef=\"customer_phone\">\n                          <th mat-header-cell *matHeaderCellDef mat-sort-header> phone </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.customer_phone}} </td>\n                        </ng-container>\n                      \n                        <!--Menu Name-->\n                        <ng-container matColumnDef=\"menu_name\">\n                          <th mat-header-cell *matHeaderCellDef mat-sort-header> Menu Name </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.menu_name}} </td>\n                        </ng-container>\n      \n                        <!--Time of arrival-->\n                        <ng-container matColumnDef=\"time_of_arrival\">\n                          <th mat-header-cell *matHeaderCellDef mat-sort-header> Time Of Arrival </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.time_of_arrival}} </td>\n                        </ng-container>\n      \n                        <!-- unit size type Column -->\n                        <ng-container matColumnDef=\"unit_size\">\n                          <th mat-header-cell *matHeaderCellDef mat-sort-header> Unit Size </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.unit_size}} </td>\n                        </ng-container>\n      \n                        <!-- total price type Column -->\n                        <ng-container matColumnDef=\"total_price\">\n                          <th mat-header-cell *matHeaderCellDef mat-sort-header> Total Price </th>\n                          <td mat-cell *matCellDef=\"let element\"> ${{element.total_price}} </td>\n                        </ng-container>\n            \n                        <ng-container matColumnDef=\"actions\">\n                          <th mat-header-cell  *matHeaderCellDef > Actions </th>\n                          <td mat-cell *matCellDef=\"let element\" >\n                            <button mat-raised-button color=\"warn\" (click)=\"deleteOrder(element)\" class=\"cd_buttons\">Delete</button>\n                          </td>\n                        </ng-container>\n                    \n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                      </table>\n                \n                      <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n                </div>\n          </mat-card-content>\n          \n      </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/order/order-details/order-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/order/order-details/order-details.component.ts ***!
  \****************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../order.service */ "./src/app/order/order.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var src_app_customer_customer_details_customer_details_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/customer/customer-details/customer-details.service */ "./src/app/customer/customer-details/customer-details.service.ts");
/* harmony import */ var src_app_menu_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/menu/menu.service */ "./src/app/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent(orderService, customerService, menuService) {
        this.orderService = orderService;
        this.customerService = customerService;
        this.menuService = menuService;
        this.fullOrderDetails = [];
        this.displayedColumns = ['customer_name', 'customer_phone', 'menu_name', 'time_of_arrival', 'unit_size', 'total_price', 'actions'];
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        console.log('================> OrderDetailsComponent ngOnInit');
        this.getOrder();
    };
    OrderDetailsComponent.prototype.getOrder = function () {
        var _this = this;
        this.fullOrderDetails = [];
        this.orderService.getOrder().subscribe(function (data) {
            console.log('-----------------------> ', data);
            if (data.length > 0) {
                data.forEach(function (order) {
                    var fullOrder = {};
                    fullOrder['unit_size'] = order.unit_size;
                    fullOrder['id'] = order.id;
                    fullOrder['time_of_arrival'] = order.time_of_arrival;
                    fullOrder['orderType'] = order.orderType;
                    _this.getCustomerById(order.customer, order.menu, fullOrder);
                });
            }
        }, function (error) {
            console.log('something wrong went will making order get call');
        });
    };
    OrderDetailsComponent.prototype.getCustomerById = function (id, menuId, fullOrder) {
        var _this = this;
        this.customerService.getCustomerById(id).subscribe(function (data) {
            fullOrder['customer_name'] = data.first_name + ' ' + data.last_name;
            fullOrder['customer_phone'] = data.phone_number;
            _this.getMenuById(menuId, fullOrder);
        }, function (error) {
            console.error('getCustomerById error ', error);
            _this.getMenuById(menuId, fullOrder);
        });
    };
    OrderDetailsComponent.prototype.getMenuById = function (id, fullOrder) {
        var _this = this;
        this.menuService.getMenuById(id).subscribe(function (data) {
            fullOrder['unit_price'] = data.unit_price;
            fullOrder['menu_name'] = data.menu_name;
            fullOrder['menu_type'] = data.menu_type;
            fullOrder['total_price'] = +data.unit_price * +fullOrder.unit_size;
            _this.fullOrderDetails.push(fullOrder);
            console.log('check this out ', _this.fullOrderDetails);
            _this.orderDetails = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](Array.from(_this.fullOrderDetails.values()));
            _this.orderDetails.paginator = _this.paginator;
            _this.orderDetails.sort = _this.sort;
        }, function (error) {
            console.error('getMenuById error ', error);
        });
    };
    OrderDetailsComponent.prototype.ngAfterViewInit = function () {
        console.log('order details ng after view init');
        this.orderDetails.paginator = this.paginator;
        this.orderDetails.sort = this.sort;
    };
    OrderDetailsComponent.prototype.applyFilter = function (filterValue) {
        this.orderDetails.filter = filterValue.trim().toLowerCase();
        if (this.orderDetails.paginator) {
            this.orderDetails.paginator.firstPage();
        }
    };
    OrderDetailsComponent.prototype.deleteOrder = function (order) {
        var _this = this;
        this.orderService.deleteOrder(order.id).subscribe(function (data) {
            _this.getOrder();
        }, function (error) {
            console.error('delete order ', error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], OrderDetailsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], OrderDetailsComponent.prototype, "sort", void 0);
    OrderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__(/*! ./order-details.component.html */ "./src/app/order/order-details/order-details.component.html"),
            styles: [__webpack_require__(/*! ./order-details.component.css */ "./src/app/order/order-details/order-details.component.css")]
        }),
        __metadata("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"],
            src_app_customer_customer_details_customer_details_service__WEBPACK_IMPORTED_MODULE_5__["CustomerDetailsService"],
            src_app_menu_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"]])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/order/order-edit/order-edit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/order/order-edit/order-edit.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order/order-edit/order-edit.component.html":
/*!************************************************************!*\
  !*** ./src/app/order/order-edit/order-edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  order-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/order/order-edit/order-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order/order-edit/order-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderEditComponent", function() { return OrderEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderEditComponent = /** @class */ (function () {
    function OrderEditComponent() {
    }
    OrderEditComponent.prototype.ngOnInit = function () {
    };
    OrderEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-edit',
            template: __webpack_require__(/*! ./order-edit.component.html */ "./src/app/order/order-edit/order-edit.component.html"),
            styles: [__webpack_require__(/*! ./order-edit.component.css */ "./src/app/order/order-edit/order-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderEditComponent);
    return OrderEditComponent;
}());



/***/ }),

/***/ "./src/app/order/order.module.ts":
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-details/order-details.component */ "./src/app/order/order-details/order-details.component.ts");
/* harmony import */ var _order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-edit/order-edit.component */ "./src/app/order/order-edit/order-edit.component.ts");
/* harmony import */ var _order_add_order_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-add/order-add.component */ "./src/app/order/order-add/order-add.component.ts");
/* harmony import */ var _material_styles_material_styles_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material-styles/material-styles.module */ "./src/app/material-styles/material-styles.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_styles_material_styles_module__WEBPACK_IMPORTED_MODULE_5__["MaterialStylesModule"]
            ],
            declarations: [_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_2__["OrderDetailsComponent"], _order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_3__["OrderEditComponent"], _order_add_order_add_component__WEBPACK_IMPORTED_MODULE_4__["OrderAddComponent"]],
            exports: [_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_2__["OrderDetailsComponent"]]
        })
    ], OrderModule);
    return OrderModule;
}());



/***/ }),

/***/ "./src/app/order/order.service.ts":
/*!****************************************!*\
  !*** ./src/app/order/order.service.ts ***!
  \****************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rest_headers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest-headers.service */ "./src/app/rest-headers.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderService = /** @class */ (function () {
    function OrderService(httpClient, restHeadersService) {
        this.httpClient = httpClient;
        this.restHeadersService = restHeadersService;
    }
    OrderService.prototype.getOrder = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host + 'order', this.restHeadersService.httpHeader);
    };
    OrderService.prototype.addOrder = function (orderType, timeOfArrival, unitSize, customerID, menuID) {
        var requestBody = {
            "orderType": orderType,
            "time_of_arrival": timeOfArrival,
            "unit_size": unitSize,
            "customer": customerID,
            "menu": menuID
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host + 'order', requestBody, this.restHeadersService.httpHeader);
    };
    OrderService.prototype.editOrder = function (menu) {
        var requestBody;
        var id = menu.id;
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host + 'order/' + id + '/', requestBody, this.restHeadersService.httpHeader);
    };
    OrderService.prototype.deleteOrder = function (id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host + 'order/' + id + '/', this.restHeadersService.httpHeader);
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _rest_headers_service__WEBPACK_IMPORTED_MODULE_2__["RestHeadersService"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/rest-headers.service.ts":
/*!*****************************************!*\
  !*** ./src/app/rest-headers.service.ts ***!
  \*****************************************/
/*! exports provided: RestHeadersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestHeadersService", function() { return RestHeadersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestHeadersService = /** @class */ (function () {
    function RestHeadersService() {
        this.httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    ;
    RestHeadersService.prototype.setHttpHeaders = function (jwt) {
        this.httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "JWT " + jwt
            })
        };
    };
    RestHeadersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RestHeadersService);
    return RestHeadersService;
}());



/***/ }),

/***/ "./src/app/super-user-home/super-user-home.component.css":
/*!***************************************************************!*\
  !*** ./src/app/super-user-home/super-user-home.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n .su_gridList {\r\n    width: 85rem !important;\r\n    margin-left: calc(100% + -86%) !important;\r\n    padding-top: 7rem;\r\n} \r\n/* Laptop\r\n.su_gridList {\r\n    width: 85rem !important;\r\n    margin-left: calc(100% + -93%) !important;\r\n    padding-top: 7rem;\r\n} */ \r\n.su_card {\r\n    padding-top: 2rem;\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n} \r\n.us_toolbar {\r\n    background: rgb(95, 158, 160);\r\n} \r\n.us_buttonWrapper {\r\n    margin-left: calc(100% + -99%);\r\n} \r\n.welcome_title2 {\r\n    color: white;\r\n} \r\n.welcome_title {\r\n    color: white;\r\n    margin-left: calc(100% + -30%);\r\n} \r\n/* Laptop */ \r\n/* .welcome_title {\r\n    color: white;\r\n    margin-left: calc(100% + -38%);\r\n} */ \r\n.su_card_order > img {\r\n    height: 19rem !important;\r\n} \r\n.order_imageHeader{\r\n    height: 2rem;\r\n} \r\n.order_mat-card-title {\r\n    font-size: 1.4rem !important;\r\n    margin-bottom: 0rem !important;\r\n    margin-top: -0.8rem !important;\r\n    margin-left: 10rem !important;\r\n} \r\n.order_gridtile {\r\n    padding-top: calc((31.3333% - 0.666667px) * 1 + 0px);\r\n\r\n}"

/***/ }),

/***/ "./src/app/super-user-home/super-user-home.component.html":
/*!****************************************************************!*\
  !*** ./src/app/super-user-home/super-user-home.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-toolbar class=\"us_toolbar\">\n    <div class=\"welcome_title2\">\n            Online Food App\n         </div>\n         <div class=\"welcome_title\">\n                 Welcome {{fullName}}!!\n             </div>\n    <div class=\"us_buttonWrapper\">\n        <button mat-raised-button color=\"primary\" (click)=\"openHome()\"  *ngIf=\"display != 'SuperUser'\">Home</button>\n        <button mat-raised-button color=\"warn\" id=\"a_logout\" (click)=\"goBackLogin()\">Logout</button>\n    </div>\n</mat-toolbar>\n\n<mat-grid-list cols=\"3\" class=\"su_gridList\" *ngIf=\"display == 'SuperUser'\">\n    <mat-grid-tile>\n        <mat-card class=\"su_card\" id=\"a_customer\" (click)='openCustomer()'>\n        <mat-card-header class=\"imageHeader\">\n            <mat-card-title>Customers</mat-card-title>\n        </mat-card-header>\n        <img mat-card-image src=\"static/front-end/assets/images/customers (2).jpg\" alt=\"Photo of a Customers Inu\">\n        </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <mat-card class=\"su_card\" id=\"a_menu\" (click)='openMenu()'>\n            <mat-card-header class=\"menu_imageHeader\">\n                <mat-card-title>Menu</mat-card-title>\n            </mat-card-header>\n            <img mat-card-image src=\"static/front-end/assets/images/Menu (2).jpg\" alt=\"Photo of a Menu Inu\">\n        </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile class=\"order_gridtile\">\n        <mat-card class=\"su_card su_card_order \" id=\"a_order\" (click)='openOrder()'>\n            <mat-card-header class=\"order_imageHeader\">\n                <mat-card-title class=\"order_mat-card-title\">Orders</mat-card-title>\n            </mat-card-header>\n            <img mat-card-image src=\"static/front-end/assets/images/orders.jpg\" alt=\"Photo of a orders Inu\">\n        </mat-card>\n    </mat-grid-tile>\n</mat-grid-list>\n\n<app-customer-details *ngIf=\"display == 'Customer'\"></app-customer-details>\n<app-menu-details *ngIf=\"display == 'Menu'\"></app-menu-details>\n<app-order-details *ngIf=\"display == 'Order'\"></app-order-details>"

/***/ }),

/***/ "./src/app/super-user-home/super-user-home.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/super-user-home/super-user-home.component.ts ***!
  \**************************************************************/
/*! exports provided: SuperUserHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperUserHomeComponent", function() { return SuperUserHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuperUserHomeComponent = /** @class */ (function () {
    function SuperUserHomeComponent() {
        this.display = 'SuperUser';
        this.goLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SuperUserHomeComponent.prototype.ngOnInit = function () {
        this.fullName = this.customer.first_name && this.customer.last_name ? this.customer.first_name + " " + this.customer.last_name : "Customer";
    };
    SuperUserHomeComponent.prototype.openCustomer = function () {
        this.display = 'Customer';
    };
    SuperUserHomeComponent.prototype.openMenu = function () {
        this.display = 'Menu';
    };
    SuperUserHomeComponent.prototype.openOrder = function () {
        this.display = 'Order';
    };
    SuperUserHomeComponent.prototype.openHome = function () {
        this.display = 'SuperUser';
    };
    SuperUserHomeComponent.prototype.goBackLogin = function () {
        this.goLogin.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SuperUserHomeComponent.prototype, "customer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SuperUserHomeComponent.prototype, "goLogin", void 0);
    SuperUserHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-super-user-home',
            template: __webpack_require__(/*! ./super-user-home.component.html */ "./src/app/super-user-home/super-user-home.component.html"),
            styles: [__webpack_require__(/*! ./super-user-home.component.css */ "./src/app/super-user-home/super-user-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SuperUserHomeComponent);
    return SuperUserHomeComponent;
}());



/***/ }),

/***/ "./src/app/super-user-home/super-user-home.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/super-user-home/super-user-home.module.ts ***!
  \***********************************************************/
/*! exports provided: SuperUserHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperUserHomeModule", function() { return SuperUserHomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_styles_material_styles_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material-styles/material-styles.module */ "./src/app/material-styles/material-styles.module.ts");
/* harmony import */ var _super_user_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./super-user-home.component */ "./src/app/super-user-home/super-user-home.component.ts");
/* harmony import */ var _customer_customer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer/customer.module */ "./src/app/customer/customer.module.ts");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/menu.module */ "./src/app/menu/menu.module.ts");
/* harmony import */ var _order_order_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../order/order.module */ "./src/app/order/order.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SuperUserHomeModule = /** @class */ (function () {
    function SuperUserHomeModule() {
    }
    SuperUserHomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_styles_material_styles_module__WEBPACK_IMPORTED_MODULE_2__["MaterialStylesModule"],
                _customer_customer_module__WEBPACK_IMPORTED_MODULE_4__["CustomerModule"],
                _menu_menu_module__WEBPACK_IMPORTED_MODULE_5__["MenuModule"],
                _order_order_module__WEBPACK_IMPORTED_MODULE_6__["OrderModule"],
            ],
            declarations: [
                _super_user_home_component__WEBPACK_IMPORTED_MODULE_3__["SuperUserHomeComponent"]
            ],
            exports: [
                _super_user_home_component__WEBPACK_IMPORTED_MODULE_3__["SuperUserHomeComponent"]
            ]
        })
    ], SuperUserHomeModule);
    return SuperUserHomeModule;
}());



/***/ }),

/***/ "./src/app/user-home/user-home.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-home/user-home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n .su_gridList {\r\n    width: 85rem !important;\r\n    margin-left: 18rem !important;\r\n    padding-top: 12rem;\r\n} \r\n\r\n/* .su_gridList {\r\n    width: 85rem !important;\r\n    margin-left: 7rem !important;\r\n    padding-top: 7rem;\r\n} */ \r\n\r\n.su_card {\r\n    padding-top: 2rem;\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n    height: 20rem !important\r\n} \r\n\r\n.us_toolbar {\r\n    background: rgb(95, 158, 160);\r\n} \r\n\r\n.us_buttonWrapper {\r\n    margin-left: calc(100% + -99%);\r\n} \r\n\r\n.welcome_title2 {\r\n    color: white;\r\n} \r\n\r\n.welcome_title {\r\n    color: white;\r\n    margin-left: calc(100% + -30%);\r\n} \r\n\r\n/* Laptop */ \r\n\r\n/* .welcome_title {\r\n    color: white;\r\n    margin-left: calc(100% + -38%);\r\n} */ \r\n\r\n.u_home_imageHeader {\r\n    padding: 0.2rem !important;\r\n} \r\n\r\n.mat-grid-tile {\r\n    width: calc((29% - 0.666667px) * 1 + 0px) !important;\r\n    height: 3rem !important;\r\n    padding-top: calc(((28.3333% - 0.666667px) * 1) + 0px) !important;\r\n}"

/***/ }),

/***/ "./src/app/user-home/user-home.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-home/user-home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-toolbar class=\"us_toolbar\">\n    <div class=\"welcome_title2\">\n       Online Food App\n    </div>\n    <div class=\"welcome_title\">\n            Welcome {{fullName}}!!\n        </div>\n    <div class=\"us_buttonWrapper\">\n        <button mat-raised-button color=\"primary\" (click)=\"openHome()\"  *ngIf=\"display != 'User'\">Home</button>\n        <button mat-raised-button color=\"warn\" id=\"u_logout\" (click)=\"goBackLogin()\" >Logout</button>\n    </div>\n</mat-toolbar>\n<mat-grid-list cols=\"3\" class=\"su_gridList\" *ngIf=\"display == 'User'\">\n  <mat-grid-tile>\n        \n      <mat-card class=\"su_card\" id=\"u_appetizer\" (click)='openAppetizer()'>\n            <mat-card-header class=\"u_home_imageHeader\">\n                    <mat-card-title>Appetizers</mat-card-title>\n                </mat-card-header>\n          <img mat-card-image src=\"static/front-end/assets/images/appetizers.jpg\" alt=\"Photo of a Customers Inu\">\n      </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile>\n      <mat-card class=\"su_card\" id=\"u_maincourse\" (click)='openMainCourse()'>\n            <mat-card-header class=\"u_home_imageHeader\">\n                    <mat-card-title>Main Course</mat-card-title>\n                </mat-card-header>\n          <img mat-card-image src=\"static/front-end/assets/images/mainCourse.jpg\" alt=\"Photo of a Menu Inu\">\n      </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile>\n      <mat-card class=\"su_card\" id=\"u_desserts\" (click)='openDeserts()'>\n            <mat-card-header class=\"u_home_imageHeader\">\n                    <mat-card-title>Desserts</mat-card-title>\n                </mat-card-header>\n          <img mat-card-image src=\"static/front-end/assets/images/desserts.jpg\" alt=\"Photo of a orders Inu\">\n      </mat-card>\n  </mat-grid-tile>\n</mat-grid-list>\n\n<app-menu-by-type *ngIf=\"display == 'Appetizer'\" [type]='display' [customer]='customer' (goBackHome) = \"openHome()\"></app-menu-by-type>\n<app-menu-by-type *ngIf=\"display == 'MainCourse'\" [type] = 'display' [customer]='customer'(goBackHome) = \"openHome()\"></app-menu-by-type>\n<app-menu-by-type *ngIf=\"display == 'Desserts'\" [type] = 'display' [customer]='customer'(goBackHome) = \"openHome()\"></app-menu-by-type>"

/***/ }),

/***/ "./src/app/user-home/user-home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-home/user-home.component.ts ***!
  \**************************************************/
/*! exports provided: UserHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function() { return UserHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserHomeComponent = /** @class */ (function () {
    function UserHomeComponent() {
        this.goLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.display = 'User';
    }
    UserHomeComponent.prototype.ngOnInit = function () {
        this.fullName = this.customer.first_name != undefined && this.customer.last_name != undefined ? this.customer.first_name + " " + this.customer.last_name : "Customer";
    };
    UserHomeComponent.prototype.openAppetizer = function () {
        this.display = 'Appetizer';
    };
    UserHomeComponent.prototype.openMainCourse = function () {
        this.display = 'MainCourse';
    };
    UserHomeComponent.prototype.openDeserts = function () {
        this.display = 'Desserts';
    };
    UserHomeComponent.prototype.openHome = function () {
        this.display = 'User';
    };
    UserHomeComponent.prototype.goBackLogin = function () {
        this.goLogin.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserHomeComponent.prototype, "customer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserHomeComponent.prototype, "goLogin", void 0);
    UserHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-home',
            template: __webpack_require__(/*! ./user-home.component.html */ "./src/app/user-home/user-home.component.html"),
            styles: [__webpack_require__(/*! ./user-home.component.css */ "./src/app/user-home/user-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserHomeComponent);
    return UserHomeComponent;
}());



/***/ }),

/***/ "./src/app/user-home/user-home.module.ts":
/*!***********************************************!*\
  !*** ./src/app/user-home/user-home.module.ts ***!
  \***********************************************/
/*! exports provided: UserHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomeModule", function() { return UserHomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-home.component */ "./src/app/user-home/user-home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_styles_material_styles_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material-styles/material-styles.module */ "./src/app/material-styles/material-styles.module.ts");
/* harmony import */ var _menu_type_menu_type_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu-type/menu-type.module */ "./src/app/menu-type/menu-type.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserHomeModule = /** @class */ (function () {
    function UserHomeModule() {
    }
    UserHomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_styles_material_styles_module__WEBPACK_IMPORTED_MODULE_4__["MaterialStylesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _menu_type_menu_type_module__WEBPACK_IMPORTED_MODULE_5__["MenuTypeModule"]
            ],
            declarations: [_user_home_component__WEBPACK_IMPORTED_MODULE_2__["UserHomeComponent"]],
            exports: [_user_home_component__WEBPACK_IMPORTED_MODULE_2__["UserHomeComponent"]]
        })
    ], UserHomeModule);
    return UserHomeModule;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    // host: 'http://127.0.0.1:8000/'
    host: 'https://assign4-food-app.herokuapp.com/'
};


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
var environment = {
    production: false,
    // host: 'http://127.0.0.1:8000/'
    host: 'https://assign4-food-app.herokuapp.com/'
};


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

module.exports = __webpack_require__(/*! C:\apps\8220\Assignment4P2\onlinefoodapp - Copy\OFA\foodapp\ofa-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map