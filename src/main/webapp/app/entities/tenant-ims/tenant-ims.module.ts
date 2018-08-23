import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InventoryManagementSystemSharedModule } from 'app/shared';
import {
    TenantImsComponent,
    TenantImsDetailComponent,
    TenantImsUpdateComponent,
    TenantImsDeletePopupComponent,
    TenantImsDeleteDialogComponent,
    tenantRoute,
    tenantPopupRoute
} from './';

const ENTITY_STATES = [...tenantRoute, ...tenantPopupRoute];

@NgModule({
    imports: [InventoryManagementSystemSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        TenantImsComponent,
        TenantImsDetailComponent,
        TenantImsUpdateComponent,
        TenantImsDeleteDialogComponent,
        TenantImsDeletePopupComponent
    ],
    entryComponents: [TenantImsComponent, TenantImsUpdateComponent, TenantImsDeleteDialogComponent, TenantImsDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InventoryManagementSystemTenantImsModule {}
