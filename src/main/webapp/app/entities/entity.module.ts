import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { InventoryManagementSystemTenantImsModule } from './tenant-ims/tenant-ims.module';
import { InventoryManagementSystemUserGroupImsModule } from './user-group-ims/user-group-ims.module';
import { InventoryManagementSystemStockImsModule } from './stock-ims/stock-ims.module';
import { InventoryManagementSystemOrdersImsModule } from './orders-ims/orders-ims.module';
import { InventoryManagementSystemUsersImsModule } from './users-ims/users-ims.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        InventoryManagementSystemTenantImsModule,
        InventoryManagementSystemUserGroupImsModule,
        InventoryManagementSystemStockImsModule,
        InventoryManagementSystemOrdersImsModule,
        InventoryManagementSystemUsersImsModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InventoryManagementSystemEntityModule {}
