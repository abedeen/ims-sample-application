import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ITenantIms } from 'app/shared/model/tenant-ims.model';
import { TenantImsService } from './tenant-ims.service';

@Component({
    selector: 'jhi-tenant-ims-delete-dialog',
    templateUrl: './tenant-ims-delete-dialog.component.html'
})
export class TenantImsDeleteDialogComponent {
    tenant: ITenantIms;

    constructor(private tenantService: TenantImsService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.tenantService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'tenantListModification',
                content: 'Deleted an tenant'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tenant-ims-delete-popup',
    template: ''
})
export class TenantImsDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ tenant }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(TenantImsDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.tenant = tenant;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
