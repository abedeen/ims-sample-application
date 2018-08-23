import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IUserGroupIms } from 'app/shared/model/user-group-ims.model';
import { UserGroupImsService } from './user-group-ims.service';

@Component({
    selector: 'jhi-user-group-ims-delete-dialog',
    templateUrl: './user-group-ims-delete-dialog.component.html'
})
export class UserGroupImsDeleteDialogComponent {
    userGroup: IUserGroupIms;

    constructor(private userGroupService: UserGroupImsService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.userGroupService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'userGroupListModification',
                content: 'Deleted an userGroup'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-user-group-ims-delete-popup',
    template: ''
})
export class UserGroupImsDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ userGroup }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(UserGroupImsDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.userGroup = userGroup;
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
