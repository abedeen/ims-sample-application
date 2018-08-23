import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IOrdersIms } from 'app/shared/model/orders-ims.model';
import { OrdersImsService } from './orders-ims.service';
import { IStockIms } from 'app/shared/model/stock-ims.model';
import { StockImsService } from 'app/entities/stock-ims';
import { IUsersIms } from 'app/shared/model/users-ims.model';
import { UsersImsService } from 'app/entities/users-ims';

@Component({
    selector: 'jhi-orders-ims-update',
    templateUrl: './orders-ims-update.component.html'
})
export class OrdersImsUpdateComponent implements OnInit {
    private _orders: IOrdersIms;
    isSaving: boolean;

    stocks: IStockIms[];

    users: IUsersIms[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private ordersService: OrdersImsService,
        private stockService: StockImsService,
        private usersService: UsersImsService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ orders }) => {
            this.orders = orders;
        });
        this.stockService.query().subscribe(
            (res: HttpResponse<IStockIms[]>) => {
                this.stocks = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.usersService.query().subscribe(
            (res: HttpResponse<IUsersIms[]>) => {
                this.users = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.orders.id !== undefined) {
            this.subscribeToSaveResponse(this.ordersService.update(this.orders));
        } else {
            this.subscribeToSaveResponse(this.ordersService.create(this.orders));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IOrdersIms>>) {
        result.subscribe((res: HttpResponse<IOrdersIms>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackStockById(index: number, item: IStockIms) {
        return item.id;
    }

    trackUsersById(index: number, item: IUsersIms) {
        return item.id;
    }
    get orders() {
        return this._orders;
    }

    set orders(orders: IOrdersIms) {
        this._orders = orders;
    }
}
