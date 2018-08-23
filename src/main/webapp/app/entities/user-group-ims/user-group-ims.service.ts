import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IUserGroupIms } from 'app/shared/model/user-group-ims.model';

type EntityResponseType = HttpResponse<IUserGroupIms>;
type EntityArrayResponseType = HttpResponse<IUserGroupIms[]>;

@Injectable({ providedIn: 'root' })
export class UserGroupImsService {
    private resourceUrl = SERVER_API_URL + 'api/user-groups';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/user-groups';

    constructor(private http: HttpClient) {}

    create(userGroup: IUserGroupIms): Observable<EntityResponseType> {
        return this.http.post<IUserGroupIms>(this.resourceUrl, userGroup, { observe: 'response' });
    }

    update(userGroup: IUserGroupIms): Observable<EntityResponseType> {
        return this.http.put<IUserGroupIms>(this.resourceUrl, userGroup, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IUserGroupIms>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IUserGroupIms[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    search(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IUserGroupIms[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
    }
}
