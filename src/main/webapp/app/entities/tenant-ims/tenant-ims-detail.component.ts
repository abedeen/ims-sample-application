import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITenantIms } from 'app/shared/model/tenant-ims.model';

@Component({
    selector: 'jhi-tenant-ims-detail',
    templateUrl: './tenant-ims-detail.component.html'
})
export class TenantImsDetailComponent implements OnInit {
    tenant: ITenantIms;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ tenant }) => {
            this.tenant = tenant;
        });
    }

    previousState() {
        window.history.back();
    }
}
