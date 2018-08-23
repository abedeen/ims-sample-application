export interface IStockIms {
    id?: number;
    name?: string;
    sku?: string;
    itemId?: string;
    price?: number;
    quantity?: string;
    usersId?: number;
    userGroupId?: number;
}

export class StockIms implements IStockIms {
    constructor(
        public id?: number,
        public name?: string,
        public sku?: string,
        public itemId?: string,
        public price?: number,
        public quantity?: string,
        public usersId?: number,
        public userGroupId?: number
    ) {}
}
