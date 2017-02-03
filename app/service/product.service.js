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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
// Import RxJs required methods
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
// import {Product} from "../component/model/product";
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.baseUrl = "http://localhost/Sf3VenteAchat/web/app_dev.php";
    }
    // getAll():Observable<Product[]> {
    //     return this.http.get(`${this.baseUrl}/products`, {headers: this.getHeaders()})
    //         .map(this.handleData)
    //         .catch(this.handleError);
    // }
    //
    ProductService.prototype.getProduct = function (id) {
        var product$ = this.http
            .get(this.baseUrl + "/product/" + id, { headers: this.getHeaders() })
            .map(this.mapProduct);
        return product$;
    };
    ProductService.prototype.getProducts = function () {
        var product$ = this.http.get(this.baseUrl + "/products", { headers: this.getHeaders() })
            .map(this.mapProducts)
            .catch(this.handleError);
        return product$;
    };
    // addProduct(body:Object):Observable<Product[]> {
    //     let bodyString = JSON.stringify(body); // Stringify payload
    //     let options = new RequestOptions({headers: this.getHeaders()}); // Create a request option
    //     return this.http.post(this.baseUrl, body, options) // ...using post request
    //         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    //
    // }
    //
    ProductService.prototype.updateProduct = function (product) {
        return this.http
            .put(this.baseUrl + "/product/" + product.id, JSON.stringify(product), { headers: this.getHeaders() });
    };
    //
    // removeProduct(id: number): Observable<Product[]> {
    //     return this.http.delete(`${this.baseUrl}/${id}`) // ...using put request
    //         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    // }
    ProductService.prototype.mapProduct = function (response) {
        return toProduct(response.json().data);
    };
    ProductService.prototype.mapProducts = function (response) {
        return response.json().data.map(toProduct);
    };
    ProductService.prototype.handleData = function (res) {
        var body = res.json();
        console.log(body);
        return body;
    };
    ProductService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    ProductService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
function toProduct(p) {
    var product = ({
        id: p.id,
        name: p.name,
        price: p.price
    });
    console.log("parsed product: ", product);
    return product;
}
//# sourceMappingURL=product.service.js.map