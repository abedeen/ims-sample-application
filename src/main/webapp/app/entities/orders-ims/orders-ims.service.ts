import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IOrdersIms } from 'app/shared/model/orders-ims.model';

type EntityResponseType = HttpResponse<IOrdersIms>;
type EntityArrayResponseType = HttpResponse<IOrdersIms[]>;

@Injectable({ providedIn: 'root' })
export class OrdersImsService {
    private resourceUrl = SERVER_API_URL + 'api/orders';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/orders';

    constructor(private http: HttpClient) {}

    create(orders: IOrdersIms): Observable<EntityResponseType> {
        return this.http.post<IOrdersIms>(this.resourceUrl, orders, { observe: 'response' });
    }

    update(orders: IOrdersIms): Observable<EntityResponseType> {
        return this.http.put<IOrdersIms>(this.resourceUrl, orders, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IOrdersIms>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IOrdersIms[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    search(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IOrdersIms[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
    }
}
