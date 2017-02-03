import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Product} from "../model/product";
// import {Product} from "../component/model/product";

@Injectable()
export class ProductService {
    baseUrl:String = "http://localhost/Sf3VenteAchat/web/app_dev.php";

    constructor(private http:Http) {
    }

    // getAll():Observable<Product[]> {
    //     return this.http.get(`${this.baseUrl}/products`, {headers: this.getHeaders()})
    //         .map(this.handleData)
    //         .catch(this.handleError);
    // }
    //

    getProduct(id:number):Observable<Product> {
        let product$ = this.http
            .get(`${this.baseUrl}/product/${id}`, {headers: this.getHeaders()})
            .map(this.mapProduct);
        return product$;
    }

    getProducts():Observable<Product[]> {
        let product$ = this.http.get(`${this.baseUrl}/products`, {headers: this.getHeaders()})
            .map(this.mapProducts)
            .catch(this.handleError);
        return product$;
    }

    // addProduct(body:Object):Observable<Product[]> {
    //     let bodyString = JSON.stringify(body); // Stringify payload
    //     let options = new RequestOptions({headers: this.getHeaders()}); // Create a request option
    //     return this.http.post(this.baseUrl, body, options) // ...using post request
    //         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    //
    // }

    //
    updateProduct(product:Product):Observable<Response> {
        return this.http
            .put(`${this.baseUrl}/product/${product.id}`, JSON.stringify(product), {headers: this.getHeaders()});
    }

    //
    // removeProduct(id: number): Observable<Product[]> {
    //     return this.http.delete(`${this.baseUrl}/${id}`) // ...using put request
    //         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    // }

    private mapProduct(response:Response):Product {
        return toProduct(response.json().data);
    }

    private mapProducts(response:Response) {
        return response.json().data.map(toProduct);
    }

    private handleData(res:Response) {
        let body = res.json();
        console.log(body);
        return body;
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}

function toProduct(p:any):Product {
    let product = <Product> ({
        id: p.id,
        name: p.name,
        price: p.price
    });
    console.log("parsed product: ", product);
    return product;
}