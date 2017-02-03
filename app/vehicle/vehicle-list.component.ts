import {Component, OnInit} from "@angular/core";
import {Vehicle} from "./vehicle";
import {VehicleService} from "./vehicle.service";
@Component({
    moduleId: module.id,
    selector: 'vehicle-list',
    templateUrl: 'vehicle-list.component.html',
    providers: [VehicleService]
})

export class VehicleListComponents implements OnInit {

    vehicles:Vehicle[] = [];
    errorMessage:string = "";
    isLoading:boolean = true;

    constructor(private vehicleService:VehicleService) {
    }


    ngOnInit():void {
        this.vehicleService.getVehicles()
            .subscribe(
                v => this.vehicles = v,
                e => this.errorMessage = e,
                () => this.isLoading = false
            );
    }
}