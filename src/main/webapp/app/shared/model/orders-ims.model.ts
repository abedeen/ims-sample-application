export interface IOrdersIms {
    id?: number;
    sku?: string;
    purchaseQuantity?: number;
    stockId?: number;
    usersId?: number;
}

export class OrdersIms implements IOrdersIms {
    constructor(
        public id?: number,
        public sku?: string,
        public purchaseQuantity?: number,
        public stockId?: number,
        public usersId?: number
    ) {}
}
