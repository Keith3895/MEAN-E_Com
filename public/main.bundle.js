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

module.exports = "<app-navbar></app-navbar>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_stepper__ = __webpack_require__("../../../material/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_add_product_add_product_component__ = __webpack_require__("../../../../../src/app/components/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_dashboard_buyer_buyer_component__ = __webpack_require__("../../../../../src/app/components/dashboard/buyer/buyer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_dashboard_seller_seller_component__ = __webpack_require__("../../../../../src/app/components/dashboard/seller/seller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/components/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_cart_cart_component__ = __webpack_require__("../../../../../src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_buy_bill_buy_bill_component__ = __webpack_require__("../../../../../src/app/components/buy-bill/buy-bill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pipe_pipe__ = __webpack_require__("../../../../../src/app/pipe.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_30__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_23__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'productDetail/:id', component: __WEBPACK_IMPORTED_MODULE_31__components_product_detail_product_detail_component__["a" /* ProductDetailComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_24__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_32__components_cart_cart_component__["a" /* CartComponent */] },
    { path: 'buy', component: __WEBPACK_IMPORTED_MODULE_33__components_buy_bill_buy_bill_component__["a" /* BuyBillComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_26__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'addProduct', component: __WEBPACK_IMPORTED_MODULE_27__components_add_product_add_product_component__["a" /* AddProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_add_product_add_product_component__["a" /* AddProductComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_dashboard_buyer_buyer_component__["a" /* BuyerComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_dashboard_seller_seller_component__["a" /* SellerComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_product_detail_product_detail_component__["a" /* ProductDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_buy_bill_buy_bill_component__["a" /* BuyBillComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_41__pipe_pipe__["a" /* PipePipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_table__["b" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_dialog__["b" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material_stepper__["a" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_material_list__["a" /* MatListModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_35__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_36__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_37__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_39__services_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_40__services_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-product/add-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fileUp{\n    opacity:0;\n    position:absolute;\n     display:inline-block;\n    top:0;\n    padding:10% 0px 0px 1px;\n}\n.spinner-overlay{\n    position: absolute;\n    top: 0;\n    background: rgba(72, 67, 67, 0.51);\n    width: 100%;\n    height: 100%;\n    /* display: none; */\n}\n.mat-progress-spinner{\n    top: 50%;\n    left: 45%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div style='padding:10%'>\n  <mat-card fxLayout='column'>\n    <mat-card-title fxFlexAlign='center'>\n      Add a Product.\n    </mat-card-title>\n    <form fxLayout=\"row wrap\" fxLayout.xs=\"column\" fxLayoutGap='5%' \n    fxFlex='flex-basis' fxFlexAlign=\"center\"\n    #productForm='ngForm' (ngSubmit)=\"AddProduct(productForm)\" >\n      <mat-form-field fxFlex=\"45%\" fxFlex.xs=\"100%\"  >\n        <input matInput placeholder=\"Product Name\" type='text' \n        [(ngModel)]=\"Pname\" name=\"Pname\" required>\n      </mat-form-field>\n      <mat-form-field fxFlex=\"45%\" fxFlex.xs='100%'>\n        <input matInput placeholder=\"Amount\" type=\"number\"\n         class=\"example-right-align\" \n         [(ngModel)]=\"price\" name=\"price\"  required>\n        <span matPrefix>&#8377;&nbsp;</span>\n        <span matSuffix>.00</span>\n      </mat-form-field> \n      <mat-form-field fxFlex=\"45%\" fxFlex.xs=\"100%\">\n        <input matInput placeholder=\"Stock\" type='number' \n        [(ngModel)]=\"stock\" name=\"stock\" required>\n        <mat-hint align=\"end\">number of product in stock</mat-hint>\n      </mat-form-field>\n      <mat-form-field fxFlex=\"45%\" fxFlex.xs=\"100%\" fxLayout=\"column\">\n        <input matInput placeholder=\"Upload File\" type=\"text\"\n         class=\"example-right-align\"  value=\"{{fileup}}\">\n         <mat-icon matPrefix>folder</mat-icon>\n         <input type=\"file\" id='test' \n          class=\"fileUp\"\n          ng2FileSelect [uploader]=\"uploader\" (change)='fileUp()'>\n      </mat-form-field> \n      \n      <div fxFlexAlign='center' fxLayout='row' fxFlex='100%'>\n        <button fxFlex mat-raised-button> Submit</button>\n      </div>\n    </form>\n  </mat-card>\n  <div class=\"spinner-overlay\" [style.display]=\"setSpinner()\">\n    <mat-spinner></mat-spinner>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/add-product/add-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddProductComponent = (function () {
    function AddProductComponent(productService, validateService, toastService, router) {
        var _this = this;
        this.productService = productService;
        this.validateService = validateService;
        this.toastService = toastService;
        this.router = router;
        this.showSpinner = false;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: 'http://localhost:8080/seller/upload/' });
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var responsePath = JSON.parse(response);
            _this.fileList = responsePath.fileName;
        };
    }
    AddProductComponent.prototype.ngOnInit = function () {
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
    };
    AddProductComponent.prototype.AddProduct = function (productform) {
        var _this = this;
        this.showSpinner = true;
        productform.value.fileList = this.fileList;
        productform = productform.value;
        var usr = localStorage.getItem('user');
        usr = JSON.parse(usr)._id;
        productform.author = usr;
        console.log(productform);
        if (!this.validateService.validateAddProductPrice(productform)) {
            this.toastService.show("please fill the price");
            this.showSpinner = false;
            return false;
        }
        if (!this.validateService.validateAddProductSock(productform)) {
            this.toastService.show("please fill the stock");
            this.showSpinner = false;
            return false;
        }
        this.productService.addProduct(productform).subscribe(function (data) {
            if (data.success) {
                _this.showSpinner = false;
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.showSpinner = false;
                _this.toastService.show(data.msg);
            }
        });
    };
    AddProductComponent.prototype.fileUp = function () {
        this.fileup = this.uploader.queue[0].file.name;
        this.fileList = this.uploader.queue[0];
        this.fileList.upload();
    };
    AddProductComponent.prototype.setSpinner = function () {
        if (this.showSpinner)
            return 'block';
        else
            return 'none';
    };
    AddProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__("../../../../../src/app/components/add-product/add-product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-product/add-product.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/buy-bill/buy-bill.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/buy-bill/buy-bill.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-horizontal-stepper [linear]='true'>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Enter Username\" formControlName=\"username\" required>\n      </mat-form-field>\n      <div>\n        <button mat-raised-button matStepperNext>\n          Next<mat-icon><i class=\"material-icons\">navigate_next</i></mat-icon>\n        </button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-raised-button matStepperPrevious>\n          <mat-icon><i class=\"material-icons\">navigate_before</i></mat-icon> Back \n        </button>\n        <button mat-raised-button matStepperNext>\n          Next<mat-icon><i class=\"material-icons\">navigate_next</i></mat-icon>\n        </button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done. You will now be redirected to a payment gateway.\n    <mat-card>\n      <mat-card-title>\n        Order Summary.\n      </mat-card-title>\n      <mat-card-content>\n        <ul>\n          <li *ngFor=\"let item of cartService.cartContent\">{{item.product.Pname}}</li>\n        </ul>\n        <strong>Bill Ammount:</strong> {{cartService.GTotal}}\n      </mat-card-content>\n    </mat-card>\n\n    <div>\n      <button mat-raised-button matStepperPrevious>\n        <mat-icon><i class=\"material-icons\">navigate_before</i></mat-icon> Back \n      </button>\n      <button mat-raised-button (click)='done()' color=\"accent\">Pay</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n"

/***/ }),

/***/ "../../../../../src/app/components/buy-bill/buy-bill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyBillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BuyBillComponent = (function () {
    function BuyBillComponent(dialogRef, toastService, authService, router, formBuilder, cartService) {
        this.dialogRef = dialogRef;
        this.toastService = toastService;
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.cartService = cartService;
    }
    BuyBillComponent.prototype.ngOnInit = function () {
        var username = this.authService.user ? this.authService.user.username : '';
        this.firstFormGroup = this.formBuilder.group({
            username: [username, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]
        });
        this.secondFormGroup = this.formBuilder.group({
            secondCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]
        });
    };
    BuyBillComponent.prototype.done = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            this.cartService.Buy().subscribe(function (data) {
                if (data.success)
                    _this.toastService.show('Your Order Is Placed');
                _this.cartService.cartContent = [];
                _this.cartService.Total = _this.cartService.GTotal = 0;
                _this.router.navigate(['dashboard']);
            });
        }
        else {
            this.toastService.show('you have to login to continue');
            this.router.navigate(['login']);
        }
        this.dialogRef.close();
    };
    BuyBillComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-buy-bill',
            template: __webpack_require__("../../../../../src/app/components/buy-bill/buy-bill.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/buy-bill/buy-bill.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["c" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__services_cart_service__["a" /* CartService */]])
    ], BuyBillComponent);
    return BuyBillComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".totalContainer{\n    margin: 20px;\n    float: right;\n}\n.totalContainer div{\n    margin-bottom: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout='row' fxLayoutWrap='wrap' fxLayoutGap='5%' >\n  <mat-card fxFlex=\"70%\" fxFlex.xs=\"100%\">\n    <mat-card-title>\n      Your Cart\n    </mat-card-title>\n    <mat-card-content>\n      <div class=\"mat-elevation-z8\">\n        <mat-table #table  [dataSource]=\"dataSource\">\n      \n          <!-- Position Column -->\n          <ng-container matColumnDef=\"index\">\n            <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.index}} </mat-cell>\n          </ng-container>\n      \n          <!-- Product Column -->\n          <ng-container matColumnDef=\"product\">\n            <mat-header-cell *matHeaderCellDef> Product </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.product.Pname}} </mat-cell>\n          </ng-container>\n      \n          <!-- Quantity Column -->\n          <ng-container matColumnDef=\"quantity\">\n            <mat-header-cell *matHeaderCellDef> Quantity </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.quantity}} </mat-cell>\n          </ng-container>\n      \n          <!-- price Column -->\n          <ng-container matColumnDef=\"Price\">\n            <mat-header-cell *matHeaderCellDef> price </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.Price}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" >\n                <button mat-icon-button (click)='removeItem(element)'color=\"primary\" >\n                  <mat-icon><i class=\"material-icons\">delete</i></mat-icon>  \n                </button> \n            </mat-cell>\n          </ng-container> \n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n      </div>   \n      <div class=\"totalContainer\">\n        <div>\n          <strong>Total:</strong> {{cartService.Total}}\n        </div> \n        <div>\n          <strong>G-total:</strong> {{cartService.GTotal}}\n        </div>\n      </div>\n    </mat-card-content>\n\n  </mat-card>\n  <div fxFlex='20%' fxFlex.xs='100%' fxLayout=\"column\"\n   fxFlexAlign='center' fxLayoutGap='5%'>\n      <button mat-raised-button color=\"warn\" (click)='openDialog()' >Buy</button>\n      <button mat-raised-button color=\"Accent\" (click)='emptyCart()'>Clear</button>\n      \n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buy_bill_buy_bill_component__ = __webpack_require__("../../../../../src/app/components/buy-bill/buy-bill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CartComponent = (function () {
    function CartComponent(cartService, authService, router, dialog) {
        this.cartService = cartService;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['index', 'product', 'quantity', 'Price', 'actions'];
        this.Total = this.cartService.Total;
        this.GTotal = this.cartService.GTotal;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            this.cartService.retriveCart().subscribe(function (data) {
                if (data.success) {
                    _this.cartService.cartContent = data.msg;
                    for (var i in _this.cartService.cartContent) {
                        _this.cartService.Total = _this.sum(i);
                        _this.cartService.GTotal = _this.cartService.Total;
                        console.log(_this.cartService.Total);
                    }
                    _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatTableDataSource */](_this.cartService.cartContent);
                }
            });
        }
        else {
            for (var i in this.cartService.cartContent) {
                this.cartService.Total = this.sum(i);
                this.cartService.GTotal = this.cartService.Total;
                console.log(this.cartService.Total);
            }
            this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatTableDataSource */](this.cartService.cartContent);
        }
    };
    CartComponent.prototype.sum = function (i) {
        return this.cartService.Total + this.cartService.cartContent[i].Price;
    };
    CartComponent.prototype.ngAfterViewInit = function () {
    };
    CartComponent.prototype.emptyCart = function () {
        var _this = this;
        this.cartService.emptyCart().subscribe(function (data) {
            console.log(data);
            _this.cartService.GTotal = _this.cartService.Total = 0;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatTableDataSource */](_this.cartService.cartContent);
        });
    };
    CartComponent.prototype.removeItem = function (item) {
        this.cartService.removeItem(item);
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatTableDataSource */](this.cartService.cartContent);
    };
    CartComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__buy_bill_buy_bill_component__["a" /* BuyBillComponent */], {});
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__("../../../../../src/app/components/cart/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cart/cart.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatDialog */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/buyer/buyer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container{\n   position: absolute;\n   height: 100%;\n   width: 100%;\n}\n\n.test{\n    background: #424242;\n    color: white;\n    border-radius: 0;\n}\ntest:hover{\n    background: rgba(51, 50, 50, 0.6);\n}\n\n\n\n\n.mat-drawer-content{\n    overflow: initial;\n}\n\n.profile-container{\n    background: url('https://2.bp.blogspot.com/-2RewSLZUzRg/U-9o6SD4M6I/AAAAAAAADIE/voax99AbRx0/s1600/14%2B-%2B1%2B%281%29.jpg');\n    padding: 25px 0px;\n    margin-bottom: 10px;\n}\n.mat-drawer{\n    min-width: 200px;\n}\n.profile-container img{\n    border-radius: 100px;\n    position: relative;\n    width: 30%;\n}\n.profile-container .name-text{\n    \n    color: white;\n    z-index: 999;\n    margin-left: 10px;\n    padding-left: 20px;\n    margin-top: 10px;\n}\n.profile-container .name-text p{\n    margin:0;\n    font-weight: 500;\n    font-size: 15px;\n    font-family: \"Roboto\", sans-serif;\n}\n.profile-container .name-text .email{\n    font-size: .9em;\n    font-weight: 100;\n    margin-top: 3px;\n}\n.example-container .mat-icon{\n    background: #3f50b5;\n    padding: 8px;\n    /* transition: 1s cubic-bezier(0.19, 0.83, 0.85, 0.32); */\n    transition: pulse 2.25s cubic-bezier(.66,0,0,1);\n}\n.mat-button{\n    padding: 9px 0px;\n}\n.mat-sidenav{\n    position: fixed;\n    top: 64px;\n    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\n}\n@media (max-width: 600px){\n.mat-sidenav{\n    top: 56px;\n}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/buyer/buyer.component.html":
/***/ (function(module, exports) {

module.exports = "\n      <div fxLayout='row'  >\n        <mat-card fxFlex='60%' >\n            <mat-card-title>\n                Cart\n            </mat-card-title>\n            <mat-card-content fxLayout='row' fxLayoutWrap=\"wrap\">\n                <mat-card  fxFlex=\"40%\" fxFlex.xs='100%'\n                *ngFor='let item of cartService.cartContent | slice:0:2;'>\n                    <mat-card-title>{{item.product.Pname}}</mat-card-title>\n                    <img src=\"http://localhost:8080/{{item.product.fileList.replace('public','')||'test'}}\" \n                    alt=\"productImage\" mat-card-image >\n                    <mat-card-content>\n                        Price: {{item.product.price}}\n                        Stock: {{item.product.stock}}\n                    </mat-card-content>\n                </mat-card> \n                <a routerLink='/cart'>more>></a>\n            </mat-card-content>\n        </mat-card>\n        <mat-card fxFlex='30%' fxFlex.xs='100%'>\n            <mat-card-title>\n                History\n            </mat-card-title>\n            <mat-card-content>\n                <mat-list>\n                    <mat-list-item>Item 1</mat-list-item>\n                    <mat-list-item>Item 2</mat-list-item>\n                    <mat-list-item>Item 3</mat-list-item>\n                </mat-list>\n            </mat-card-content>\n        </mat-card>\n    </div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/buyer/buyer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuyerComponent = (function () {
    function BuyerComponent(media, cartService, authService) {
        this.media = media;
        this.cartService = cartService;
        this.authService = authService;
    }
    BuyerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobileView = (this.media.isActive('xs') || this.media.isActive('sm'));
        this.media.subscribe(function (change) {
            _this.isMobileView = (change.mqAlias === 'xs' || change.mqAlias === 'sm');
            _this.hide = _this.isMobileView;
            if (_this.isMobileView)
                _this.side = 'over';
            else
                _this.side = 'side';
        });
        this.hide = this.isMobileView;
        this.cartService.retriveCart().subscribe(function (data) {
            if (data.success) {
                _this.cartService.cartContent = data.msg;
            }
        });
    };
    BuyerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-buyer',
            template: __webpack_require__("../../../../../src/app/components/dashboard/buyer/buyer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/buyer/buyer.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["b" /* ObservableMedia */],
            __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], BuyerComponent);
    return BuyerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='!isBuyer()'>\n    <app-buyer></app-buyer>\n</div>\n<div *ngIf='isBuyer()'>\n    <app-seller></app-seller>\n</div>\n\n\n<div [ngSwitch]=\"isBuyer()\">\n    <div *ngSwitchCase=\"true\"></div>\n    <div *ngSwitchCase=\"false\"></div>\n    <div *ngSwitchDefault></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            console.log(_this.user);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent.prototype.isBuyer = function () {
        if (this.user) {
            return this.user.buyer;
        }
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/seller/seller.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-fab{\n    position: fixed;\n    bottom: 75px;\n    right: 6px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/seller/seller.component.html":
/***/ (function(module, exports) {

module.exports = "\n  \n   \n      <div fxLayout='row'  >\n          <mat-card fxFlex='60%' >\n              <mat-card-title>\n                 Recent added\n              </mat-card-title>\n              <mat-card-content fxLayout='row' fxLayoutWrap=\"wrap\">\n                  \n                  <a href=\"\">more>></a>\n              </mat-card-content>\n          </mat-card>\n          <mat-card fxFlex='30%'>\n              <mat-card-title>\n                  History\n              </mat-card-title>\n              <mat-card-content>\n                  <mat-list>\n                      <mat-list-item>Item 1</mat-list-item>\n                      <mat-list-item>Item 2</mat-list-item>\n                      <mat-list-item>Item 3</mat-list-item>\n                  </mat-list>\n              </mat-card-content>\n          </mat-card>\n      </div>\n      <button mat-fab color=\"warn\" routerLink='/addProduct'><i class=\"material-icons\">add</i></button>\n  <app-footer></app-footer>\n\n  "

/***/ }),

/***/ "../../../../../src/app/components/dashboard/seller/seller.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SellerComponent = (function () {
    function SellerComponent(authService) {
        this.authService = authService;
    }
    SellerComponent.prototype.ngOnInit = function () {
    };
    SellerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-seller',
            template: __webpack_require__("../../../../../src/app/components/dashboard/seller/seller.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/seller/seller.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], SellerComponent);
    return SellerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer{\n\tposition: fixed;\n\tbottom: 0;\n\tmargin-top: 40px;\n    padding: 12px;\n    font-size: 12px;\n\tbackground: #3e51b5;\n\tz-index: 999;\n\twidth: 100%;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer color=\"primary\">\n    <h3>Ecom site for training</h3>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-title{\n    font-weight: 800;\n    font-size: 1em;\n    margin: 5px;\n    width:100%;\n}\napp-home .mat-icon-button{\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n.price p{\n    font-size: .8em;\n    margin: 5px;\n}\n.mat-card-header-text{\n    margin: 0px !important;\n}\n.mat-card-subtitle{\n    margin-bottom: 10px !important;\n    padding-left: 2px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n  <mat-card-title>\n    List of items\n  </mat-card-title>\n  <mat-card-content fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap=\"wrap\" *ngIf='products' >\n      <mat-form-field fxFlex='100%' style='margin:3px 5px;'>\n          <input matInput placeholder=\"Search\" type=\"text\" [(ngModel)]=\"queryString\" >\n          <mat-icon matSuffix><i class=\"material-icons\">search</i></mat-icon>\n        </mat-form-field>\n    <mat-card  fxFlex.xs='100%' fxFlex=\"25%\" \n    *ngFor='let product of products | pipe:queryString'>\n      <mat-card-header>\n        <mat-card-title fxLayout='row' >\n          <button mat-icon-button color=\"warn\" >\n            <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n          </button>\n          <p class=\"card-title\"  >{{product.Pname}}</p>\n          \n        </mat-card-title>\n        <mat-card-subtitle >{{product.author.username}}-{{product.author.name}}</mat-card-subtitle>\n        \n      </mat-card-header>\n      <img mat-card-image \n      src=\"http://localhost:8080/{{product.fileList.replace('public','')||'test'}}\" \n      alt=\"Preview Image\" (click)=\"moreInfo(product)\">\n      <mat-card-content (click)=\"moreInfo(product)\">\n        <div class=\"price\">\n          <p>\n            Rs.{{product.price}}\n          </p>\n          <p>\n            <strong>Stock: </strong> {{product.stock}}\n          </p>\n        </div>\n        \n      </mat-card-content>\n      <mat-card-actions fxLayout='row'>\n        <button mat-button (click)='addItem(product)' *ngIf='!checkSeller()' >\n            <mat-icon><i class=\"material-icons\">add_shopping_cart</i></mat-icon>\n          cart\n        </button>\n        <button mat-button *ngIf='!checkSeller()' (click)=\"addItem(product);openDialog()\" >\n            <mat-icon><i class=\"material-icons\">shopping_basket</i></mat-icon>\n            buy\n        </button>\n      </mat-card-actions>\n    </mat-card>\n  </mat-card-content>\n</mat-card>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__buy_bill_buy_bill_component__ = __webpack_require__("../../../../../src/app/components/buy-bill/buy-bill.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = (function () {
    function HomeComponent(productService, toastService, router, cartService, authService, dialog) {
        this.productService = productService;
        this.toastService = toastService;
        this.router = router;
        this.cartService = cartService;
        this.authService = authService;
        this.dialog = dialog;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.AllProduct().subscribe(function (data) {
            if (data.success) {
                _this.products = data.products;
            }
            else {
                _this.toastService.show(data.msg);
            }
        });
        console.log(this.products);
    };
    HomeComponent.prototype.moreInfo = function (product) {
        console.log(product);
        // product=  JSON.stringify(product);
        this.router.navigate(['/productDetail/' + product._id]);
        this.toastService.test = product;
        // this._router.navigate(['SecondComponent', {p1: this.property1, p2: property2 }]);
    };
    HomeComponent.prototype.addItem = function (product) {
        this.cartService.addToCart(product, 1);
    };
    HomeComponent.prototype.checkSeller = function () {
        if (this.authService.loggedIn()) {
            this.authService.loadToken();
            return this.authService.user.buyer;
        }
        else
            return false;
    };
    HomeComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__buy_bill_buy_bill_component__["a" /* BuyBillComponent */], {});
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatDialog */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlexAlign='center center' \nstyle='padding:5%'>\n <mat-card fxLayout=\"column\" fxFlexAlign='center' >\n \t<mat-card-title fxFlexAlign='auto' fxFlex='100%' fxFlexAlign='center'>\n \t\tLogin:\n \t</mat-card-title>\n \t<form fxLayout=\"column\" fxLayoutGap=\"20px\"\n \t fxLayoutWrap fxFlex='basis' fxFlexAlign='center'\n \t  fxFlex='100%' \n \t  #loginForm='ngForm' (ngSubmit)=\"onLogin(loginForm)\">\n \t\t<mat-form-field >\n\t\t    <input matInput placeholder=\"Enter your UserName\" type='text'\n\t\t    [(ngModel)]=\"username\" name=\"username\" >\n\t\t</mat-form-field>\n \t\t<mat-form-field >\n\t\t    <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\"\n\t\t    [(ngModel)]='password' name=\"password\">\n\t\t    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n\t\t</mat-form-field>\n\t\t<button mat-raised-button> Submit</button>\n \t</form>\t\n </mat-card>\n \n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function LoginComponent(toastService, authService, router) {
        this.toastService = toastService;
        this.authService = authService;
        this.router = router;
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (cred) {
        var _this = this;
        var user = cred.value;
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['dashboard']);
                _this.toastService.show("you are logged in!");
                // this.toastService.show(data.msg);
            }
            else {
                _this.toastService.show(data.msg);
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-container{\n    position: absolute !important;\n    height: 100%;\n    width: 100%;\n    padding-top:64px !important; \n}\n.mat-toolbar{\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n}\n.active{\n    background: #2e3a80;\n}\n@media (max-width: 600px){\n.side-container{\n    padding-top:55px !important; \n}\t\n}\n\n\n\n.mat-drawer-content{\n    overflow: initial;\n}\n\n.profile-container{\n    background: url('https://2.bp.blogspot.com/-2RewSLZUzRg/U-9o6SD4M6I/AAAAAAAADIE/voax99AbRx0/s1600/14%2B-%2B1%2B%281%29.jpg');\n    padding: 25px 0px;\n    margin-bottom: 10px;\n}\n.mat-drawer{\n    min-width: 200px !important;\n}\n.profile-container img{\n    border-radius: 100px;\n    position: relative;\n    width: 30%;\n}\n.profile-container .name-text{\n    \n    color: white;\n    z-index: 999;\n    margin-left: 10px;\n    padding-left: 20px;\n    margin-top: 10px;\n}\n.profile-container .name-text p{\n    margin:0;\n    font-weight: 500;\n    font-size: 15px;\n    font-family: \"Roboto\", sans-serif;\n}\n.profile-container .name-text .email{\n    font-size: .9em;\n    font-weight: 100;\n    margin-top: 3px;\n}\n.example-container .mat-icon{\n    background: #3f50b5;\n    padding: 8px;\n    /* transition: 1s cubic-bezier(0.19, 0.83, 0.85, 0.32); */\n    transition: pulse 2.25s cubic-bezier(.66,0,0,1);\n}\n.mat-button{\n    padding: 9px 0px;\n}\n.side-container {\n    position: fixed;\n    /* top: 64px; */\n    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\n}\n@media (max-width: 600px){\n.side-container{\n    /* top: 56px; */\n}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar fxLayout=\"row\" color='primary'>\n    <mat-toolbar-row >\n      <span >E-Com Site</span>\n      <div fxLayout=\"row\"  fxHide [fxHide.gt-xs]=\"isVisibleOnDesktop()\" fxFlex=\"1 1 auto\">\n        <div fxLayoutAlign='start'>\n          <button mat-button color=\"secondary\" routerLink=\"/home\" \n          routerLinkActive=\"active\">Home</button>\n          <button mat-button color=\"secondary\" routerLink=\"/dashboard\" \n          routerLinkActive=\"active\">DashBoard</button>\n        </div>\n        <div fxLayoutAlign='center'></div>\n          <div fxLayoutAlign='end' style=\"position: absolute;right: 10px;\">\n            <button mat-button color=\"secondary\" routerLink=\"/cart\" \n            routerLinkActive=\"active\">\n                <i class=\"material-icons\">shopping_cart</i>\n            </button>\n            <button mat-button color=\"secondary\" routerLink=\"/login\"\n            *ngIf=\"!authService.loggedIn()\" routerLinkActive=\"active\">Login</button>\n            <button mat-button color=\"secondary\" routerLink=\"/register\"\n            *ngIf=\"!authService.loggedIn()\" \n            routerLinkActive=\"active\" >Register</button>\n            <button mat-button color=\"secondary\"\n            *ngIf=\"authService.loggedIn()\" (click)=\"onLogout()\">Logout</button>\n          </div>\n            \n      </div>\n      <button fxHide fxShow.xs='true' mat-button color=\"secondary\" (click)=\"sidenav.toggle()\"\n      style=\"position:absolute;right:0\">\n          <i class=\"material-icons\">view_headline</i>\n      </button>\n    </mat-toolbar-row>\n  </mat-toolbar>\n<mat-sidenav-container fxFlexFill class=\"side-container\">\n\n    <mat-sidenav #sidenav class=\"sub-sidenav\" mode={{side}}\n    fxLayout=\"column\" align='end' fxLayoutAlign='start'>  \n        <div class=\"profile-container\" >\n            <div *ngIf='authService.loggedIn()'>\n                <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg\">\n                <div class=\"name-text\" >\n                    <p>{{authService.user.name}}</p>\n                    <p class=\"email\">{{authService.user.email}}</p>\n                </div>\n            </div>\n        </div>\n        <button mat-button color=\"secondary\" routerLink=\"/home\" \n        routerLinkActive=\"active\" (click)='sidenav.toggle()'>Home</button>\n        <button mat-button color=\"secondary\" routerLink=\"/dashboard\" \n        routerLinkActive=\"active\" (click)='sidenav.toggle()'>DashBoard</button>\n        <button mat-button color=\"secondary\" routerLink=\"/cart\" \n        routerLinkActive=\"active\" (click)='sidenav.toggle()'>\n            <i class=\"material-icons\">shopping_cart</i>\n        </button>\n        <button mat-button color=\"secondary\" routerLink=\"/login\"\n        *ngIf=\"!authService.loggedIn()\" routerLinkActive=\"active\" (click)='sidenav.toggle()'>Login</button>\n        <button mat-button color=\"secondary\" routerLink=\"/register\"\n        *ngIf=\"!authService.loggedIn()\" \n        routerLinkActive=\"active\"  (click)='sidenav.toggle()'>Register</button>\n        <button mat-button color=\"secondary\"\n        *ngIf=\"authService.loggedIn()\" (click)=\"onLogout();sidenav.toggle()\">Logout</button>\n    </mat-sidenav>\n  \n  <router-outlet></router-outlet>\n</mat-sidenav-container>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { RouterLinkActive } from '@angular/router';


var NavbarComponent = (function () {
    function NavbarComponent(router, toastService, authService, media) {
        this.router = router;
        this.toastService = toastService;
        this.authService = authService;
        this.media = media;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.authService.user=false;
        this.isMobileView = (this.media.isActive('xs') || this.media.isActive('sm'));
        this.media.subscribe(function (change) {
            _this.isMobileView = (change.mqAlias === 'xs' || change.mqAlias === 'sm');
            _this.hide = _this.isMobileView;
            if (_this.isMobileView)
                _this.side = 'over';
            else
                _this.side = 'side';
        });
        this.hide = this.isMobileView;
    };
    NavbarComponent.prototype.isVisibleOnDesktop = function () { };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.toastService.show('you have been logged out');
        this.router.navigate(['']);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["b" /* ObservableMedia */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/product-detail/product-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  product-detail works!\n</p>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailComponent = (function () {
    function ProductDetailComponent(route, router, toastService, location) {
        this.route = route;
        this.router = router;
        this.toastService = toastService;
        this.location = location;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        // console.log(this.toastService.test);
        if (!this.toastService.test || this.id != this.toastService.test._id)
            this.location.back();
    };
    ProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__("../../../../../src/app/components/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/product-detail/product-detail.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.mat-form-field{\n\twidth: 47%;\t\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:5%\">\n <mat-card fxLayout=\"column\">\n \t<mat-card-title fxFlexAlign='center'>\n \t\tRegister\n \t</mat-card-title>\n \t<form fxLayout=\"row\" fxLayoutGap=\"20px\"\n \t fxLayoutWrap  fxFlexAlign='center'\n \t  fxFlex='flex-basis' \n \t  #registerForm=\"ngForm\" (ngSubmit)=\"onFormSubmit(registerForm)\"\n \t   >\n \t  \t<mat-form-field fxFlex='45%' fxFlex.xs='100%'>\n\t\t    <input matInput placeholder=\"Enter your Name\" type='text' \n\t\t     [(ngModel)]=\"name\" name=\"name\">\n\t\t</mat-form-field>\n\t\t<mat-form-field fxFlex='45%' fxFlex.xs='100%'>\n\t\t    <input matInput placeholder=\"Enter your Email\" type='email' \n\t\t    [(ngModel)]=\"email\" name=\"email\">\n\t\t</mat-form-field>\n \t\t<mat-form-field  fxFlex='45%' fxFlex.xs='100%' ngStyle.gt-xs='margin-left: 20%;'>\n\t\t    <input matInput placeholder=\"Enter your UserName\" type='text'\n\t\t     [(ngModel)]=\"username\" name=\"username\">\n\t\t</mat-form-field>\n\t\t<!-- <mat-form-field  > -->\n\t\t\t<mat-checkbox class=\"example-margin\" \n\t\t\t[(ngModel)]=\"buyer\" name='buyer'\n\t\t\tfxFlex='20%' fxFlex.xs='100%' ngStyle.gt-xs='margin-left: 20%;'>\n\t\t\tSeller\n\t\t\t</mat-checkbox>\n\t\t<!-- </mat-form-field> -->\n\t\t      \n\n \t\t<mat-form-field fxFlex='100%' fxFlex.xs='100%'>\n\t\t    <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\"\n\t\t    [(ngModel)]=\"password\" name=\"password\">\n\t\t    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n\t\t</mat-form-field>\n\t\t<mat-form-field fxFlex='100%' fxFlex.xs='100%'>\n\t\t    <input matInput placeholder=\"Re-Enter your password\" [type]=\"hide ? 'password' : 'text'\"\n\t\t    [(ngModel)]=\"reEnterPassword\" name=\"reEnterPassword\">\n\t\t    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n\t\t</mat-form-field>\n\t\t<div fxFlexAlign='center' >\n\t\t\t<button fxFlex mat-raised-button color='accent'> Submit</button>\n\t\t</div>\n\t\t\n \t</form>\t\n </mat-card>\n \n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(authService, router, toastService, validateService) {
        this.authService = authService;
        this.router = router;
        this.toastService = toastService;
        this.validateService = validateService;
        this.hide = true;
        this.buyer = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onFormSubmit = function (userForm) {
        var _this = this;
        console.log(userForm.value);
        var user = userForm.value;
        console.log(this.buyer);
        if (!this.validateService.validateRegister(user)) {
            this.toastService.show("Please fill all the fields");
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.toastService.show("Please enter a valid email address");
            return false;
        }
        console.log(this.validateService.validatePassword(user.password, user.reEnterPassword));
        if (!this.validateService.validatePassword(user.password, user.reEnterPassword)) {
            this.toastService.show("Passwords do not match");
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                // this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
                _this.toastService.show('You are now registered and can log in');
                _this.router.navigate(['/login']);
            }
            else {
                // this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
                _this.toastService.show(data.msg);
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        console.log(this.authService.loggedIn());
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PipePipe = (function () {
    function PipePipe() {
    }
    PipePipe.prototype.transform = function (value, input) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el) {
                return el.Pname.toLowerCase().indexOf(input) > -1;
            });
        }
        return value;
    };
    PipePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'pipe'
        })
    ], PipePipe);
    return PipePipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = true;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        var ep = this.prepEndpoint('users/register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (!this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8080/' + ep;
        }
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    AuthService.prototype.loggedIn = function () {
        // console.log(this.authToken);
        this.loadToken();
        // console.log();
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        // this.cartService.cartContent=[];
        // this.cartService.Total=this.cartService.GTotal=0;
        localStorage.clear();
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartService = (function () {
    function CartService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.cartContent = [];
        this.Total = 0;
        this.GTotal = 0;
    }
    CartService.prototype.addToCart = function (product, qty) {
        var _this = this;
        var newCartEntry = {
            index: this.cartContent.length,
            product: product,
            quantity: qty,
            Price: product.price
        };
        // this.Total +=product.price;
        // this.GTotal=this.Total;
        if (this.authService.loggedIn()) {
            this.retriveCart().subscribe(function (data) {
                if (data.success) {
                    _this.cartContent = data.msg;
                    console.log(data.msg);
                }
            });
            this.addToCartServer(newCartEntry).subscribe(function (data) {
                if (data.success) {
                    _this.cartContent.push(newCartEntry);
                    console.log(data.msg);
                }
                else {
                    console.log(data.msg);
                }
            });
        }
        else
            this.cartContent.push(newCartEntry);
    };
    CartService.prototype.addToCartServer = function (Entry) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        var ep = this.authService.prepEndpoint('cart/addEntry');
        Entry.author = this.authService.user._id;
        return this.http.post(ep, Entry, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CartService.prototype.retriveCart = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('cart/getCart/' + this.authService.user._id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CartService.prototype.emptyCart = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        var ep = this.authService.prepEndpoint('cart/emptyCart');
        return this.http.post(ep, { id: this.authService.user._id }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CartService.prototype.removeItem = function (item) {
        console.log(this.cartContent);
        this.cartContent = this.cartContent.filter(function (data) {
            return data.index != item.index;
        });
        console.log(this.cartContent);
        if (this.authService.loggedIn())
            this.removeItemServer(item).subscribe(function (data) {
                if (data.success) {
                    console.log(data.msg);
                }
            });
    };
    CartService.prototype.removeItemServer = function (item) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        var ep = this.authService.prepEndpoint('cart/removeItem');
        var removeDetails = { id: item.product._id, index: item.index, user: this.authService.user._id };
        return this.http.post(ep, removeDetails, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CartService.prototype.Buy = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        var ep = this.authService.prepEndpoint('cart/Buy');
        return this.http.post(ep, { id: this.authService.user._id }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.isDev = true;
    }
    ProductService.prototype.addProduct = function (Product) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        var ep = this.prepEndpoint('seller/addProduct');
        return this.http.post(ep, Product, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.AllProduct = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('buyer/allProducts');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.prepEndpoint = function (ep) {
        if (!this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8080/' + ep;
        }
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/services/toast.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = (function () {
    function ToastService(snackBar) {
        this.snackBar = snackBar;
    }
    ToastService.prototype.show = function (msg) {
        this.snackBar.open(msg, null, {
            duration: 3000,
        });
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatSnackBar */]])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidateService = (function () {
    function ValidateService(toastService) {
        this.toastService = toastService;
    }
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validatePassword = function (password, rePassword) {
        if (password === rePassword)
            return true;
        else
            return false;
    };
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateAddProductPrice = function (Product) {
        if (Product.price)
            return true;
        else
            return false;
    };
    ValidateService.prototype.validateAddProductSock = function (Product) {
        if (Product.stock)
            return true;
        else
            return false;
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__toast_service__["a" /* ToastService */]])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map