import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITenantIms } from 'app/shared/model/tenant-ims.model';

type EntityResponseType = HttpResponse<ITenantIms>;
type EntityArrayResponseType = HttpResponse<ITenantIms[]>;

@Injectable({ providedIn: 'root' })
export class TenantImsService {
    private resourceUrl = SERVER_API_URL + 'api/tenants';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/tenants';

    constructor(private http: HttpClient) {}

    create(tenant: ITenantIms): Observable<EntityResponseType> {
        return this.http.post<ITenantIms>(this.resourceUrl, tenant, { observe: 'response' });
    }

    update(tenant: ITenantIms): Observable<EntityResponseType> {
        return this.http.put<ITenantIms>(this.resourceUrl, tenant, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ITenantIms>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ITenantIms[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    search(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ITenantIms[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
    }
}
