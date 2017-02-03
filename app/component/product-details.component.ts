import {Component, OnInit, OnDestroy} from "@angular/core";
import {ProductService} from "../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../model/product";

@Component({
    moduleId: module.id,
    selector: 'product-details',
    templateUrl: 'product-details.component.html',
    providers: [ProductService]
})

export class ProductDetailsComponent implements OnInit, OnDestroy {

    constructor(private productService:ProductService, private route:ActivatedRoute, private router:Router) {
    }

    produit:Product;
    sub:any;

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = Number.parseInt(params['id']);
            console.log('getting produit with id: ', id);
            this.productService
                .getProduct(id)
                .subscribe(p => this.produit = p);
        });
    }

    ngOnDestroy():void {
        this.sub.unsubscribe();
    }

    goToProductList() {
        let link = ['/products'];
        this.router.navigate(link);
        // window.history.back();
    }

    saveProduct(){
        this.productService
            .updateProduct(this.produit)
            .subscribe(
                response => {
                    console.log("success ", response);
                },
                error => {
                    console.error("Error saving product !", error);
                }
            )
    }
}