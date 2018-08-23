import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrdersIms } from 'app/shared/model/orders-ims.model';
import { OrdersImsService } from './orders-ims.service';
import { OrdersImsComponent } from './orders-ims.component';
import { OrdersImsDetailComponent } from './orders-ims-detail.component';
import { OrdersImsUpdateComponent } from './orders-ims-update.component';
import { OrdersImsDeletePopupComponent } from './orders-ims-delete-dialog.component';
import { IOrdersIms } from 'app/shared/model/orders-ims.model';

@Injectable({ providedIn: 'root' })
export class OrdersImsResolve implements Resolve<IOrdersIms> {
    constructor(private service: OrdersImsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((orders: HttpResponse<OrdersIms>) => orders.body));
        }
        return of(new OrdersIms());
    }
}

export const ordersRoute: Routes = [
    {
        path: 'orders-ims',
        component: OrdersImsComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'inventoryManagementSystemApp.orders.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'orders-ims/:id/view',
        component: OrdersImsDetailComponent,
        resolve: {
            orders: OrdersImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.orders.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'orders-ims/new',
        component: OrdersImsUpdateComponent,
        resolve: {
            orders: OrdersImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.orders.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'orders-ims/:id/edit',
        component: OrdersImsUpdateComponent,
        resolve: {
            orders: OrdersImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.orders.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const ordersPopupRoute: Routes = [
    {
        path: 'orders-ims/:id/delete',
        component: OrdersImsDeletePopupComponent,
        resolve: {
            orders: OrdersImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.orders.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
