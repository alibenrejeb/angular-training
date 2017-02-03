import {Routes, RouterModule} from '@angular/router';
import {PeopleListComponent} from "./person/people-list.component";
import {PersonDetailsComponent} from "./person/person-details.component";
import {VehicleListComponents} from "./vehicle/vehicle-list.component";
import {VehicleDetailsComponent} from "./vehicle/vehicle-details.component";
import {GetPeopleComponent} from "./component/get-peoples.component";
import {GetProductsComponent} from "./component/get-products.component";
import {ProductDetailsComponent} from "./component/product-details.component";

// Route config let's you map routes to components
const routes:Routes = [
    // map '/persons' to the people list component
    {
        path: 'persons',
        component: PeopleListComponent,
    },
    // map '/persons/:id' to person details component
    {
        path: 'persons/:id',
        component: PersonDetailsComponent
    },
    // map '/' to '/persons' as our default route
    {
        path: 'vehicles',
        component: VehicleListComponents,
    },
    {
        path: 'vehicles/:id',
        component: VehicleDetailsComponent,
    },
    {
        path: 'products',
        component: GetProductsComponent,
    },
    {
        path: 'product/:id',
        component: ProductDetailsComponent
    },
    {
        path: '',
        redirectTo: '/persons',
        pathMatch: 'full'
    },
];

export const routing = RouterModule.forRoot(routes);
