export interface ITenantIms {
    id?: number;
    company?: string;
    contactEmail?: string;
    contactName?: string;
    contactPhone?: string;
    contactTitle?: string;
    department?: string;
    email?: string;
    logo?: string;
    name?: string;
    password?: string;
    title?: string;
    userName?: string;
    uuid?: string;
}

export class TenantIms implements ITenantIms {
    constructor(
        public id?: number,
        public company?: string,
        public contactEmail?: string,
        public contactName?: string,
        public contactPhone?: string,
        public contactTitle?: string,
        public department?: string,
        public email?: string,
        public logo?: string,
        public name?: string,
        public password?: string,
        public title?: string,
        public userName?: string,
        public uuid?: string
    ) {}
}
