import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FxGlobalsService } from '../fxGlobals/fxGlobals.service';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CtasctesService {

  constructor( private _http: HttpClient, private _fxGlobals: FxGlobalsService ) {}

  public getDeudas( idUF: Number ): Observable<any> {

    this._fxGlobals.showSpinner();

    let params = new HttpParams()
      .set('idUF', idUF.toString());

    return this._http.get(`${environment.apiUri}/ctas-ctes/getDeudas`, 
      { params }
    )
    .pipe(
      finalize(() => this._fxGlobals.hideSpinner())
    );
  }
}