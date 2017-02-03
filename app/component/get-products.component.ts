import {Component, OnInit} from "@angular/core";
import {ProductService} from "../service/product.service";
import {Product} from "../model/product";
@Component({
    moduleId: module.id,
    selector: 'get-products',
    templateUrl: 'get-products.component.html',
    providers: [ProductService]
})

export class GetProductsComponent implements OnInit {

    error:string = "";
    products:Product[] = [];

    constructor(private productService:ProductService) {
    }

    ngOnInit():void {
        this.productService
            .getProducts()
            .subscribe(
                response => {
                    this.products = response;
                    console.log(response);
                },
                error => {
                    this.error = error;
                    console.log(error);
                },
            )
    }
}