import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IUsersIms } from 'app/shared/model/users-ims.model';

type EntityResponseType = HttpResponse<IUsersIms>;
type EntityArrayResponseType = HttpResponse<IUsersIms[]>;

@Injectable({ providedIn: 'root' })
export class UsersImsService {
    private resourceUrl = SERVER_API_URL + 'api/users';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/users';

    constructor(private http: HttpClient) {}

    create(users: IUsersIms): Observable<EntityResponseType> {
        return this.http.post<IUsersIms>(this.resourceUrl, users, { observe: 'response' });
    }

    update(users: IUsersIms): Observable<EntityResponseType> {
        return this.http.put<IUsersIms>(this.resourceUrl, users, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IUsersIms>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IUsersIms[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    search(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IUsersIms[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
    }
}
