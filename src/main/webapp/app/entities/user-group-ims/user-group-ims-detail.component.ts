import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUserGroupIms } from 'app/shared/model/user-group-ims.model';

@Component({
    selector: 'jhi-user-group-ims-detail',
    templateUrl: './user-group-ims-detail.component.html'
})
export class UserGroupImsDetailComponent implements OnInit {
    userGroup: IUserGroupIms;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ userGroup }) => {
            this.userGroup = userGroup;
        });
    }

    previousState() {
        window.history.back();
    }
}
