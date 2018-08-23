import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TenantIms } from 'app/shared/model/tenant-ims.model';
import { TenantImsService } from './tenant-ims.service';
import { TenantImsComponent } from './tenant-ims.component';
import { TenantImsDetailComponent } from './tenant-ims-detail.component';
import { TenantImsUpdateComponent } from './tenant-ims-update.component';
import { TenantImsDeletePopupComponent } from './tenant-ims-delete-dialog.component';
import { ITenantIms } from 'app/shared/model/tenant-ims.model';

@Injectable({ providedIn: 'root' })
export class TenantImsResolve implements Resolve<ITenantIms> {
    constructor(private service: TenantImsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((tenant: HttpResponse<TenantIms>) => tenant.body));
        }
        return of(new TenantIms());
    }
}

export const tenantRoute: Routes = [
    {
        path: 'tenant-ims',
        component: TenantImsComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'inventoryManagementSystemApp.tenant.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'tenant-ims/:id/view',
        component: TenantImsDetailComponent,
        resolve: {
            tenant: TenantImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.tenant.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'tenant-ims/new',
        component: TenantImsUpdateComponent,
        resolve: {
            tenant: TenantImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.tenant.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'tenant-ims/:id/edit',
        component: TenantImsUpdateComponent,
        resolve: {
            tenant: TenantImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.tenant.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const tenantPopupRoute: Routes = [
    {
        path: 'tenant-ims/:id/delete',
        component: TenantImsDeletePopupComponent,
        resolve: {
            tenant: TenantImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.tenant.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
