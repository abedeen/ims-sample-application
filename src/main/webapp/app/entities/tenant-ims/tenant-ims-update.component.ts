import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITenantIms } from 'app/shared/model/tenant-ims.model';
import { TenantImsService } from './tenant-ims.service';

@Component({
    selector: 'jhi-tenant-ims-update',
    templateUrl: './tenant-ims-update.component.html'
})
export class TenantImsUpdateComponent implements OnInit {
    private _tenant: ITenantIms;
    isSaving: boolean;

    constructor(private tenantService: TenantImsService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ tenant }) => {
            this.tenant = tenant;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.tenant.id !== undefined) {
            this.subscribeToSaveResponse(this.tenantService.update(this.tenant));
        } else {
            this.subscribeToSaveResponse(this.tenantService.create(this.tenant));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ITenantIms>>) {
        result.subscribe((res: HttpResponse<ITenantIms>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get tenant() {
        return this._tenant;
    }

    set tenant(tenant: ITenantIms) {
        this._tenant = tenant;
    }
}
