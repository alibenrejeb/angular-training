import {Component, OnInit} from "@angular/core";
import {PeopleService} from "../service/people.service";
@Component({
    moduleId: module.id,
    selector: 'get-people',
    templateUrl: 'get-people.component.html',
    providers: [PeopleService]
})

export class GetPeopleComponent implements OnInit {

    error: string = "";
    results: any[] = [];
    constructor(private peopleService:PeopleService) {
    }

    ngOnInit():void {
        this.peopleService
            .getAll()
            .subscribe(
                response => {
                    this.results = response;
                    console.log(response);
                },
                error => {
                    this.error = error;
                    console.log(error);
                },
            )
    }
}