import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InventoryManagementSystemSharedModule } from 'app/shared';
import {
    StockImsComponent,
    StockImsDetailComponent,
    StockImsUpdateComponent,
    StockImsDeletePopupComponent,
    StockImsDeleteDialogComponent,
    stockRoute,
    stockPopupRoute
} from './';

const ENTITY_STATES = [...stockRoute, ...stockPopupRoute];

@NgModule({
    imports: [InventoryManagementSystemSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        StockImsComponent,
        StockImsDetailComponent,
        StockImsUpdateComponent,
        StockImsDeleteDialogComponent,
        StockImsDeletePopupComponent
    ],
    entryComponents: [StockImsComponent, StockImsUpdateComponent, StockImsDeleteDialogComponent, StockImsDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InventoryManagementSystemStockImsModule {}
