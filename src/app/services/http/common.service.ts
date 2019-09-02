import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) {

    // this.headers = new HttpHeaders();
    // this.headers.append('Content-Type', 'application/json');
   }

  public getWithPaged(entity: String, rows: Number, page: Number): Observable<any> {

    let params = new HttpParams()
      .set('rows', rows.toString())
      .set('page', page.toString());

    return this._http.get(`${environment.apiUri}/${entity}/getWithPaged`, { params });
  }

  // public insertEntity(entity: String, objeto: Object): Observable<any> {

  //   return this._http.post(
  //     `${environment.apiUri}/${entity}/post`,
  //     objeto,
  //     {'headers' : this.headers});
  // }

  


}
