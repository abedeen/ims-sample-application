import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IStockIms } from 'app/shared/model/stock-ims.model';

@Component({
    selector: 'jhi-stock-ims-detail',
    templateUrl: './stock-ims-detail.component.html'
})
export class StockImsDetailComponent implements OnInit {
    stock: IStockIms;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ stock }) => {
            this.stock = stock;
        });
    }

    previousState() {
        window.history.back();
    }
}
