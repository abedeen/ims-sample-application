import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IStockIms } from 'app/shared/model/stock-ims.model';
import { StockImsService } from './stock-ims.service';
import { IUsersIms } from 'app/shared/model/users-ims.model';
import { UsersImsService } from 'app/entities/users-ims';
import { IUserGroupIms } from 'app/shared/model/user-group-ims.model';
import { UserGroupImsService } from 'app/entities/user-group-ims';

@Component({
    selector: 'jhi-stock-ims-update',
    templateUrl: './stock-ims-update.component.html'
})
export class StockImsUpdateComponent implements OnInit {
    private _stock: IStockIms;
    isSaving: boolean;

    users: IUsersIms[];

    usergroups: IUserGroupIms[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private stockService: StockImsService,
        private usersService: UsersImsService,
        private userGroupService: UserGroupImsService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ stock }) => {
            this.stock = stock;
        });
        this.usersService.query().subscribe(
            (res: HttpResponse<IUsersIms[]>) => {
                this.users = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.userGroupService.query().subscribe(
            (res: HttpResponse<IUserGroupIms[]>) => {
                this.usergroups = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.stock.id !== undefined) {
            this.subscribeToSaveResponse(this.stockService.update(this.stock));
        } else {
            this.subscribeToSaveResponse(this.stockService.create(this.stock));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IStockIms>>) {
        result.subscribe((res: HttpResponse<IStockIms>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackUsersById(index: number, item: IUsersIms) {
        return item.id;
    }

    trackUserGroupById(index: number, item: IUserGroupIms) {
        return item.id;
    }
    get stock() {
        return this._stock;
    }

    set stock(stock: IStockIms) {
        this._stock = stock;
    }
}
