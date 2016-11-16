import {Component, OnInit, OnDestroy} from "@angular/core";
import {VehicleService} from "./vehicle.service";
import {Vehicle} from "./vehicle";
import {ActivatedRoute, Router} from "@angular/router";
import {Response} from "@angular/http";

@Component({
    moduleId: module.id,
    selector: 'vehicle-details',
    templateUrl: 'vehicle-details.component.html',
})

export class VehicleDetailsComponent implements OnInit, OnDestroy {

    vehicle:Vehicle;
    sub:any;

    constructor(private vehicleService:VehicleService, private route:ActivatedRoute, private router:Router) {
    }


    ngOnInit():void {
        this.sub = this.route.params.subscribe(params => {
            let id = Number.parseInt(params['id']);
            console.log('getting vehicle with id:', id);
            this.vehicleService
                .getVehicle(id)
                .subscribe(v => this.vehicle = v);
        });
    }


    ngOnDestroy():void {
        this.sub.unsubscribe();
    }

    goToVehiclesList():void {
        let link = ['/vehicles'];
        this.router.navigate(link);
    }

    saveVehicleDetails() {
        this.vehicleService
            .save(this.vehicle)
            .subscribe(
                (r:Response) => {
                    console.log('success');
                }
            );
    }
}