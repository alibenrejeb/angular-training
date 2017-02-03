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
var router_1 = require("@angular/router");
var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = Number.parseInt(params['id']);
            console.log('getting produit with id: ', id);
            _this.productService
                .getProduct(id)
                .subscribe(function (p) { return _this.produit = p; });
        });
    };
    ProductDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductDetailsComponent.prototype.goToProductList = function () {
        var link = ['/products'];
        this.router.navigate(link);
        // window.history.back();
    };
    ProductDetailsComponent.prototype.saveProduct = function () {
        this.productService
            .updateProduct(this.produit)
            .subscribe(function (response) {
            console.log("success ", response);
        }, function (error) {
            console.error("Error saving product !", error);
        });
    };
    return ProductDetailsComponent;
}());
ProductDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'product-details',
        templateUrl: 'product-details.component.html',
        providers: [product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, router_1.ActivatedRoute, router_1.Router])
], ProductDetailsComponent);
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=product-details.component.js.map