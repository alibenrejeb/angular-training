import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class PeopleService {
    endpoint_url:String = "http://localhost/Sf3VenteAchat/web/app_dev.php";

    constructor(private http:Http) {
    }

    getAll():Observable<any> {
        return this.http.get(`${this.endpoint_url}/produits`, {headers: this.getHeaders()})
            .map(this.handleData)
            .catch(this.handleError);
    }

    private handleData(res:Response) {
        let body = res.json();
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