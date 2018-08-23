export interface IUserGroupIms {
    id?: number;
}

export class UserGroupIms implements IUserGroupIms {
    constructor(public id?: number) {}
}
