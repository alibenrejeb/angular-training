import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {PeopleListComponent} from './person/people-list.component';
import {PersonDetailsComponent } from './person/person-details.component';
import {VehicleListComponents} from "./vehicle/vehicle-list.component";
import {VehicleDetailsComponent} from "./vehicle/vehicle-details.component";

import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routing} from './app.routes';
import {GetPeopleComponent} from "./component/get-peoples.component";

@NgModule({
    imports: [BrowserModule, routing, FormsModule, HttpModule],
    declarations: [
        AppComponent,
        PeopleListComponent,
        PersonDetailsComponent,
        VehicleListComponents,
        VehicleDetailsComponent,
        GetPeopleComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
