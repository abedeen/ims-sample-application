import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersIms } from 'app/shared/model/users-ims.model';
import { UsersImsService } from './users-ims.service';
import { UsersImsComponent } from './users-ims.component';
import { UsersImsDetailComponent } from './users-ims-detail.component';
import { UsersImsUpdateComponent } from './users-ims-update.component';
import { UsersImsDeletePopupComponent } from './users-ims-delete-dialog.component';
import { IUsersIms } from 'app/shared/model/users-ims.model';

@Injectable({ providedIn: 'root' })
export class UsersImsResolve implements Resolve<IUsersIms> {
    constructor(private service: UsersImsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((users: HttpResponse<UsersIms>) => users.body));
        }
        return of(new UsersIms());
    }
}

export const usersRoute: Routes = [
    {
        path: 'users-ims',
        component: UsersImsComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'inventoryManagementSystemApp.users.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'users-ims/:id/view',
        component: UsersImsDetailComponent,
        resolve: {
            users: UsersImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.users.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'users-ims/new',
        component: UsersImsUpdateComponent,
        resolve: {
            users: UsersImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.users.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'users-ims/:id/edit',
        component: UsersImsUpdateComponent,
        resolve: {
            users: UsersImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.users.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const usersPopupRoute: Routes = [
    {
        path: 'users-ims/:id/delete',
        component: UsersImsDeletePopupComponent,
        resolve: {
            users: UsersImsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'inventoryManagementSystemApp.users.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
