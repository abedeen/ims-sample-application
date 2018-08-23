export interface IUsersIms {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    commissionPct?: number;
    userGroupId?: number;
    tenantId?: number;
}

export class UsersIms implements IUsersIms {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public phoneNumber?: string,
        public commissionPct?: number,
        public userGroupId?: number,
        public tenantId?: number
    ) {}
}
