import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IOrdersIms } from 'app/shared/model/orders-ims.model';

@Component({
    selector: 'jhi-orders-ims-detail',
    templateUrl: './orders-ims-detail.component.html'
})
export class OrdersImsDetailComponent implements OnInit {
    orders: IOrdersIms;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ orders }) => {
            this.orders = orders;
        });
    }

    previousState() {
        window.history.back();
    }
}
