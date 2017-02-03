"use strict";
var router_1 = require("@angular/router");
var people_list_component_1 = require("./person/people-list.component");
var person_details_component_1 = require("./person/person-details.component");
var vehicle_list_component_1 = require("./vehicle/vehicle-list.component");
var vehicle_details_component_1 = require("./vehicle/vehicle-details.component");
var get_products_component_1 = require("./component/get-products.component");
var product_details_component_1 = require("./component/product-details.component");
// Route config let's you map routes to components
var routes = [
    // map '/persons' to the people list component
    {
        path: 'persons',
        component: people_list_component_1.PeopleListComponent,
    },
    // map '/persons/:id' to person details component
    {
        path: 'persons/:id',
        component: person_details_component_1.PersonDetailsComponent
    },
    // map '/' to '/persons' as our default route
    {
        path: 'vehicles',
        component: vehicle_list_component_1.VehicleListComponents,
    },
    {
        path: 'vehicles/:id',
        component: vehicle_details_component_1.VehicleDetailsComponent,
    },
    {
        path: 'products',
        component: get_products_component_1.GetProductsComponent,
    },
    {
        path: 'product/:id',
        component: product_details_component_1.ProductDetailsComponent
    },
    {
        path: '',
        redirectTo: '/persons',
        pathMatch: 'full'
    },
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map