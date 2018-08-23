import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IUsersIms } from 'app/shared/model/users-ims.model';
import { UsersImsService } from './users-ims.service';
import { IUserGroupIms } from 'app/shared/model/user-group-ims.model';
import { UserGroupImsService } from 'app/entities/user-group-ims';
import { ITenantIms } from 'app/shared/model/tenant-ims.model';
import { TenantImsService } from 'app/entities/tenant-ims';

@Component({
    selector: 'jhi-users-ims-update',
    templateUrl: './users-ims-update.component.html'
})
export class UsersImsUpdateComponent implements OnInit {
    private _users: IUsersIms;
    isSaving: boolean;

    usergroups: IUserGroupIms[];

    tenants: ITenantIms[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private usersService: UsersImsService,
        private userGroupService: UserGroupImsService,
        private tenantService: TenantImsService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ users }) => {
            this.users = users;
        });
        this.userGroupService.query().subscribe(
            (res: HttpResponse<IUserGroupIms[]>) => {
                this.usergroups = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.tenantService.query().subscribe(
            (res: HttpResponse<ITenantIms[]>) => {
                this.tenants = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.users.id !== undefined) {
            this.subscribeToSaveResponse(this.usersService.update(this.users));
        } else {
            this.subscribeToSaveResponse(this.usersService.create(this.users));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IUsersIms>>) {
        result.subscribe((res: HttpResponse<IUsersIms>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackUserGroupById(index: number, item: IUserGroupIms) {
        return item.id;
    }

    trackTenantById(index: number, item: ITenantIms) {
        return item.id;
    }
    get users() {
        return this._users;
    }

    set users(users: IUsersIms) {
        this._users = users;
    }
}
