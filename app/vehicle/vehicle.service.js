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
var VehicleService = (function () {
    function VehicleService(http) {
        this.http = http;
        this.baseUrl = "http://swapi.co/api";
    }
    VehicleService.prototype.getVehicles = function () {
        var vehicle$ = this.http
            .get(this.baseUrl + "/vehicles", { headers: this.getHeaders() })
            .map(mapVehicles)
            .catch(handleError);
        return vehicle$;
    };
    VehicleService.prototype.getVehicle = function (id) {
        var vehicle$ = this.http
            .get(this.baseUrl + "/vehicles/" + id, { headers: this.getHeaders() })
            .map(mapVehicule);
        return vehicle$;
    };
    VehicleService.prototype.save = function (vehicle) {
        return this.http
            .put(this.baseUrl + "/vehicles/" + vehicle.id, JSON.stringify(vehicle), { headers: this.getHeaders() });
    };
    VehicleService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    VehicleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VehicleService);
    return VehicleService;
}());
exports.VehicleService = VehicleService;
function mapVehicles(response) {
    return response.json().results.map(toVehicle);
}
function toVehicle(r) {
    // console.log('Parsed r:', r);
    var vehicle = ({
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
function extractId(vehicleData) {
    var extractedId = vehicleData.url.replace('http://swapi.co/api/vehicles/', '').replace('/', '');
    return parseInt(extractedId);
}
function mapVehicule(response) {
    return toVehicle(response.json());
}
function handleError(error) {
    var errorMsg = error.message || "Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!";
    console.error(errorMsg);
    return Rx_1.Observable.throw(errorMsg);
}
//# sourceMappingURL=vehicle.service.js.map