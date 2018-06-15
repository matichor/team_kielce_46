import {HttpClient, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {createRequestOption} from "../../shared/model/request-util";
import {Observable} from "rxjs/Observable";
import {SERVER_API_URL} from "../../app.constants";
import {Reservation} from "./reservation.model";

@Injectable()
export class ReservationService {
    private resourceUrl = SERVER_API_URL + 'api/sportfacilities';
    private resourceParamUrl = SERVER_API_URL + 'api/hit';

    constructor(private http: HttpClient) { }

    // create(user: User): Observable<HttpResponse<User>> {
    //     return this.http.post<User>(this.resourceUrl, user, { observe: 'response' });
    // }
    //
    // update(user: User): Observable<HttpResponse<User>> {
    //     return this.http.put<User>(this.resourceUrl, user, { observe: 'response' });
    // }
    //
    // find(login: string): Observable<HttpResponse<User>> {
    //     return this.http.get<User>(`${this.resourceUrl}/${login}`, { observe: 'response' });
    // }
    //
    // query(req?: any): Observable<HttpResponse<User[]>> {
    //     const options = createRequestOption(req);
    //     return this.http.get<User[]>(this.resourceUrl, { params: options, observe: 'response' });
    // }
    //
    // delete(login: string): Observable<HttpResponse<any>> {
    //     return this.http.delete(`${this.resourceUrl}/${login}`, { observe: 'response' });
    // }
    //
    // authorities(): Observable<string[]> {
    //     return this.http.get<string[]>(SERVER_API_URL + 'api/users/authorities');
    // }

    queryParam(req?: any): Observable<HttpResponse<Reservation>> {
        const options = createRequestOption(req);
        return this.http.get<Reservation>(this.resourceParamUrl, { params: options, observe: 'response' });
    }


    query(): Observable<Reservation> {
        return this.http.get<Reservation>(this.resourceUrl);
    }

    create(reservation: Reservation): Observable<HttpResponse<Reservation>> {
        return this.http.post<Reservation>(this.resourceParamUrl, reservation, {observe: 'response'} )
    }


}
