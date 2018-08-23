import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IStockIms } from 'app/shared/model/stock-ims.model';

type EntityResponseType = HttpResponse<IStockIms>;
type EntityArrayResponseType = HttpResponse<IStockIms[]>;

@Injectable({ providedIn: 'root' })
export class StockImsService {
    private resourceUrl = SERVER_API_URL + 'api/stocks';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/stocks';

    constructor(private http: HttpClient) {}

    create(stock: IStockIms): Observable<EntityResponseType> {
        return this.http.post<IStockIms>(this.resourceUrl, stock, { observe: 'response' });
    }

    update(stock: IStockIms): Observable<EntityResponseType> {
        return this.http.put<IStockIms>(this.resourceUrl, stock, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IStockIms>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IStockIms[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    search(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IStockIms[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
    }
}
