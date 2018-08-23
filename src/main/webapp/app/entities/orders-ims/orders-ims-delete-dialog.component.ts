import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IOrdersIms } from 'app/shared/model/orders-ims.model';
import { OrdersImsService } from './orders-ims.service';

@Component({
    selector: 'jhi-orders-ims-delete-dialog',
    templateUrl: './orders-ims-delete-dialog.component.html'
})
export class OrdersImsDeleteDialogComponent {
    orders: IOrdersIms;

    constructor(private ordersService: OrdersImsService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.ordersService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'ordersListModification',
                content: 'Deleted an orders'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-orders-ims-delete-popup',
    template: ''
})
export class OrdersImsDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ orders }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(OrdersImsDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.orders = orders;
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
