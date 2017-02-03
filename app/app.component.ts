import {Component} from '@angular/core';
import {PeopleService} from "./person/people.service";
import {VehicleService} from "./vehicle/vehicle.service";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title:string = 'My First Angular 2 App';
}
