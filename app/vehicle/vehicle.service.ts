import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Vehicle} from "./vehicle";

@Injectable()
export class VehicleService {
    private baseUrl:string = "http://swapi.co/api";

    constructor(private http:Http) {
    }

    getVehicles():Observable<Vehicle[]> {
        let vehicle$ = this.http
            .get(`${this.baseUrl}/vehicles`, {headers: this.getHeaders()})
            .map(mapVehicles)
            .catch(handleError);
        return vehicle$;
    }

    getVehicle(id:number):Observable<Vehicle> {
        let vehicle$ = this.http
            .get(`${this.baseUrl}/vehicles/${id}`, {headers: this.getHeaders()})
            .map(mapVehicule);
        return vehicle$
    }

    save(vehicle:Vehicle):Observable<Response> {
        return this.http
            .put(`${this.baseUrl}/vehicles/${vehicle.id}`, JSON.stringify(vehicle), {headers: this.getHeaders()});
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}

function mapVehicles(response:Response):Vehicle[] {
    return response.json().results.map(toVehicle)
}

function toVehicle(r:any):Vehicle {
    // console.log('Parsed r:', r);
    let vehicle = <Vehicle>({
        id: extractId(r),
        url: r.url,
        name: r.name,
        model: r.model,
        manufacturer: r.manufacturer,
        costInCredits: r.cost_in_credits,
        length: r.length,
        maxAtmospheringSpeed: r.max_atmosphering_speed,
        crew: r.crew,
        passengers: r.passengers,
        cargoCapacity: r.cargo_capacity,
        consumables: r.consumables,
        vehicleClass: r.vehicle_class,
        created: r.created,
        edited: r.edited,
    });
    // console.log('Parsed vehicle:', vehicle);
    return vehicle;
}


function extractId(vehicleData:any) {
    let extractedId = vehicleData.url.replace('http://swapi.co/api/vehicles/', '').replace('/', '');
    return parseInt(extractedId);
}

function mapVehicule(response:Response):Vehicle {
    return toVehicle(response.json());
}

function handleError(error:any) {
    let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
    console.error(errorMsg);

    return Observable.throw(errorMsg);
}