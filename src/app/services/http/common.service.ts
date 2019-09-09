import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private headers: HttpHeaders;


  constructor(private _http: HttpClient) {

    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

  public getWithPaged(entity: String, rows: Number, page: Number): Observable<any> {

    let params = new HttpParams()
      .set('rows', rows.toString())
      .set('page', page.toString())
      .set('entity', entity.toString());

    return this._http.get(`${environment.apiUri}/generic/paged`, { params });
  }



  public getOne(entity: String, id: String): Observable<any> {

    let params = new HttpParams()
      .set('t', entity.toString());

    return this._http.get(`${environment.apiUri}/generic/one/${id}`, { params });
  }



  public filter(entity: String, column: String, text: String, rows: Number, page: Number): Observable<any> {

    let params = new HttpParams()
      .set('entity', entity.toString())
      .set('column', column.toString())
      .set('text', text.toString())
      .set('rows', rows.toString())
      .set('page', page.toString());

    return this._http.get(`${environment.apiUri}/generic/filter`, { params });
  }



  public UpdateOne(entity: String, objeto: Object): Observable<any> {

    let params = new HttpParams()
      .set('t', entity.toString());

    return this._http.post(
      `${environment.apiUri}/generic/put`,
      objeto,
      {'headers': this.headers, params});
  }



  

}
