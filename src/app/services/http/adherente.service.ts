import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Adherente } from '../../class/adherente.class';

@Injectable({
  providedIn: 'root'
})
export class AdherenteService {

  private headers: HttpHeaders;

  constructor(private _http: HttpClient) {

    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

   public insertEntity(adherente: Adherente): Observable<any> {   

    return this._http.post(
      `${environment.apiUri}/adherentes/insert`,
      adherente,
      {'headers': this.headers});
  }
}
