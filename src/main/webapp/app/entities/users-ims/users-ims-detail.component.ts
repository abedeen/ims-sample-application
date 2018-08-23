import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUsersIms } from 'app/shared/model/users-ims.model';

@Component({
    selector: 'jhi-users-ims-detail',
    templateUrl: './users-ims-detail.component.html'
})
export class UsersImsDetailComponent implements OnInit {
    users: IUsersIms;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ users }) => {
            this.users = users;
        });
    }

    previousState() {
        window.history.back();
    }
}
