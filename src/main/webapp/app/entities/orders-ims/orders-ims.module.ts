import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InventoryManagementSystemSharedModule } from 'app/shared';
import {
    OrdersImsComponent,
    OrdersImsDetailComponent,
    OrdersImsUpdateComponent,
    OrdersImsDeletePopupComponent,
    OrdersImsDeleteDialogComponent,
    ordersRoute,
    ordersPopupRoute
} from './';

const ENTITY_STATES = [...ordersRoute, ...ordersPopupRoute];

@NgModule({
    imports: [InventoryManagementSystemSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        OrdersImsComponent,
        OrdersImsDetailComponent,
        OrdersImsUpdateComponent,
        OrdersImsDeleteDialogComponent,
        OrdersImsDeletePopupComponent
    ],
    entryComponents: [OrdersImsComponent, OrdersImsUpdateComponent, OrdersImsDeleteDialogComponent, OrdersImsDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InventoryManagementSystemOrdersImsModule {}
