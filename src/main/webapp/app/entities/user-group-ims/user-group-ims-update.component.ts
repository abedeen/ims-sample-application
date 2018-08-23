import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUserGroupIms } from 'app/shared/model/user-group-ims.model';
import { UserGroupImsService } from './user-group-ims.service';

@Component({
    selector: 'jhi-user-group-ims-update',
    templateUrl: './user-group-ims-update.component.html'
})
export class UserGroupImsUpdateComponent implements OnInit {
    private _userGroup: IUserGroupIms;
    isSaving: boolean;

    constructor(private userGroupService: UserGroupImsService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ userGroup }) => {
            this.userGroup = userGroup;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.userGroup.id !== undefined) {
            this.subscribeToSaveResponse(this.userGroupService.update(this.userGroup));
        } else {
            this.subscribeToSaveResponse(this.userGroupService.create(this.userGroup));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IUserGroupIms>>) {
        result.subscribe((res: HttpResponse<IUserGroupIms>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get userGroup() {
        return this._userGroup;
    }

    set userGroup(userGroup: IUserGroupIms) {
        this._userGroup = userGroup;
    }
}
