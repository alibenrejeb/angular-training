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
var vehicle_service_1 = require("./vehicle.service");
var router_1 = require("@angular/router");
var VehicleDetailsComponent = (function () {
    function VehicleDetailsComponent(vehicleService, route, router) {
        this.vehicleService = vehicleService;
        this.route = route;
        this.router = router;
    }
    VehicleDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = Number.parseInt(params['id']);
            console.log('getting vehicle with id:', id);
            _this.vehicleService
                .getVehicle(id)
                .subscribe(function (v) { return _this.vehicle = v; });
        });
    };
    VehicleDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    VehicleDetailsComponent.prototype.goToVehiclesList = function () {
        var link = ['/vehicles'];
        this.router.navigate(link);
    };
    VehicleDetailsComponent.prototype.saveVehicleDetails = function () {
        this.vehicleService
            .save(this.vehicle)
            .subscribe(function (r) {
            console.log('success');
        });
    };
    VehicleDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vehicle-details',
            templateUrl: 'vehicle-details.component.html',
        }), 
        __metadata('design:paramtypes', [vehicle_service_1.VehicleService, router_1.ActivatedRoute, router_1.Router])
    ], VehicleDetailsComponent);
    return VehicleDetailsComponent;
}());
exports.VehicleDetailsComponent = VehicleDetailsComponent;
//# sourceMappingURL=vehicle-details.component.js.map