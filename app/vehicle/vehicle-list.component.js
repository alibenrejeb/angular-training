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
var VehicleListComponents = (function () {
    function VehicleListComponents(vehicleService) {
        this.vehicleService = vehicleService;
        this.vehicles = [];
        this.errorMessage = "";
        this.isLoading = true;
    }
    VehicleListComponents.prototype.ngOnInit = function () {
        var _this = this;
        this.vehicleService.getVehicles()
            .subscribe(function (v) { return _this.vehicles = v; }, function (e) { return _this.errorMessage = e; }, function () { return _this.isLoading = false; });
    };
    return VehicleListComponents;
}());
VehicleListComponents = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'vehicle-list',
        templateUrl: 'vehicle-list.component.html',
        providers: [vehicle_service_1.VehicleService]
    }),
    __metadata("design:paramtypes", [vehicle_service_1.VehicleService])
], VehicleListComponents);
exports.VehicleListComponents = VehicleListComponents;
//# sourceMappingURL=vehicle-list.component.js.map