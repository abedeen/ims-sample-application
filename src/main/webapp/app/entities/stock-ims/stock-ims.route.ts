import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { StockIms } from 'app/shared/model/stock-ims.model';
import { StockImsService } from './stock-ims.service';
import { StockImsComponent } from './stock-ims.component';
import { StockImsDetailComponent } from './stock-ims-detail.component';
import { StockImsUpdateComponent } from './stock-ims-update.component';
import { StockImsDeletePopupComponent } from './stock-ims-delete-dialog.component';
import { IStockIms } from 'app/shared/model/stock-ims.model';

@Injectable({ providedIn: 'root' })
export class StockImsResolve implements Resolve<IStockIms> {
    constructor(private service: StockImsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((stock: HttpResponse<StockIms>) => stock.body));
        }
        return of(new StockIms());
    }
}

export const stockRoute: Routes = [
    {
        path: 'stock-ims',
        component: StockImsComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'inventoryManagementSystemApp.stock.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'stock-ims/:id/view',
        component: StockImsDetailComponent,
        resolve: {
            stock: StockImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.stock.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'stock-ims/new',
        component: StockImsUpdateComponent,
        resolve: {
            stock: StockImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.stock.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'stock-ims/:id/edit',
        component: StockImsUpdateComponent,
        resolve: {
            stock: StockImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.stock.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const stockPopupRoute: Routes = [
    {
        path: 'stock-ims/:id/delete',
        component: StockImsDeletePopupComponent,
        resolve: {
            stock: StockImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.stock.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
