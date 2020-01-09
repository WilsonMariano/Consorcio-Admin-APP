import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FxGlobalsService } from '../fxGlobals/fxGlobals.service';
import { finalize } from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class UfService {

  constructor( private _http: HttpClient, private _fxGlobals: FxGlobalsService, private _common: CommonService ) {}

  public getOneByNro( idManzana: Number, nroUF: Number ): Observable<any> {

    this._fxGlobals.showSpinner();

    let params = new HttpParams()
      .set('idManzana', idManzana.toString())
      .set('nroUF', nroUF.toString());

    return this._http.get(`${environment.apiUri}/uf/GetByManzanaAndNumero`, 
      { params }
    )
    .pipe(
      finalize(() => this._fxGlobals.hideSpinner())
    );
  }
}
