import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InventoryManagementSystemSharedModule } from 'app/shared';
import {
    UsersImsComponent,
    UsersImsDetailComponent,
    UsersImsUpdateComponent,
    UsersImsDeletePopupComponent,
    UsersImsDeleteDialogComponent,
    usersRoute,
    usersPopupRoute
} from './';

const ENTITY_STATES = [...usersRoute, ...usersPopupRoute];

@NgModule({
    imports: [InventoryManagementSystemSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        UsersImsComponent,
        UsersImsDetailComponent,
        UsersImsUpdateComponent,
        UsersImsDeleteDialogComponent,
        UsersImsDeletePopupComponent
    ],
    entryComponents: [UsersImsComponent, UsersImsUpdateComponent, UsersImsDeleteDialogComponent, UsersImsDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InventoryManagementSystemUsersImsModule {}
