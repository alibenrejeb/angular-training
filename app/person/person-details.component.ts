import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Response} from '@angular/http';

import {Person} from "./person";
import {PeopleService} from "./people.service";

@Component({
    moduleId: module.id,
    selector: 'person-details',
    templateUrl: 'person-details.component.html',
    providers: [PeopleService]
})

export class PersonDetailsComponent implements OnInit, OnDestroy {
    constructor(private peopleService:PeopleService, private route:ActivatedRoute, private router:Router) {
    }

    person:Person;
    sub:any;


    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = Number.parseInt(params['id']);
            console.log('getting person with id: ', id);
            this.peopleService
                .get(id)
                .subscribe(p => this.person = p);
        });
    }

    ngOnDestroy():void {
        this.sub.unsubscribe();
    }

    gotoPeoplesList() {
        let link = ['/persons'];
        this.router.navigate(link);
        // window.history.back();
    }

    savePersonDetails() {
        this.peopleService
            .save(this.person)
            .subscribe(
                (r:Response) => {
                    console.log('success');
                }
            );
    }
}