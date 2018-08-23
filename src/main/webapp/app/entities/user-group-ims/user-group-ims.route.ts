import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserGroupIms } from 'app/shared/model/user-group-ims.model';
import { UserGroupImsService } from './user-group-ims.service';
import { UserGroupImsComponent } from './user-group-ims.component';
import { UserGroupImsDetailComponent } from './user-group-ims-detail.component';
import { UserGroupImsUpdateComponent } from './user-group-ims-update.component';
import { UserGroupImsDeletePopupComponent } from './user-group-ims-delete-dialog.component';
import { IUserGroupIms } from 'app/shared/model/user-group-ims.model';

@Injectable({ providedIn: 'root' })
export class UserGroupImsResolve implements Resolve<IUserGroupIms> {
    constructor(private service: UserGroupImsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((userGroup: HttpResponse<UserGroupIms>) => userGroup.body));
        }
        return of(new UserGroupIms());
    }
}

export const userGroupRoute: Routes = [
    {
        path: 'user-group-ims',
        component: UserGroupImsComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'inventoryManagementSystemApp.userGroup.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'user-group-ims/:id/view',
        component: UserGroupImsDetailComponent,
        resolve: {
            userGroup: UserGroupImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.userGroup.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'user-group-ims/new',
        component: UserGroupImsUpdateComponent,
        resolve: {
            userGroup: UserGroupImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.userGroup.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'user-group-ims/:id/edit',
        component: UserGroupImsUpdateComponent,
        resolve: {
            userGroup: UserGroupImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.userGroup.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const userGroupPopupRoute: Routes = [
    {
        path: 'user-group-ims/:id/delete',
        component: UserGroupImsDeletePopupComponent,
        resolve: {
            userGroup: UserGroupImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.userGroup.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
