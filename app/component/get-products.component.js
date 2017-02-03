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
var core_1 = require("@angular/core");
var product_service_1 = require("../service/product.service");
var GetProductsComponent = (function () {
    function GetProductsComponent(productService) {
        this.productService = productService;
        this.error = "";
        this.products = [];
    }
    GetProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService
            .getProducts()
            .subscribe(function (response) {
            _this.products = response;
            console.log(response);
        }, function (error) {
            _this.error = error;
            console.log(error);
        });
    };
    return GetProductsComponent;
}());
GetProductsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'get-products',
        templateUrl: 'get-products.component.html',
        providers: [product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], GetProductsComponent);
exports.GetProductsComponent = GetProductsComponent;
//# sourceMappingURL=get-products.component.js.map