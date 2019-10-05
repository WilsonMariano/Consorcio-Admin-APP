import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FxGlobalsService } from '../fxGlobals/fxGlobals.service';
import { finalize } from 'rxjs/operators';
import { LiquidacionGlobal } from 'src/app/class/class.index';


@Injectable({
  providedIn: 'root'
})
export class LiquidacionGlobalService {

  private headers: HttpHeaders;



  constructor( private _http: HttpClient, private _fxGlobals: FxGlobalsService ) {

    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

  

  public insert( liquidacionG: LiquidacionGlobal ): Observable<any> {


    /************* PROVISORIO  ************/
    let obj  = {
        "LiquidacionGlobal": liquidacionG,
        "GastoLiquidacion": [
          {
            "id": 1,
            "idLiquidacionGlobal": 4,
            "codConceptoGasto": "FOT",
            "monto": 1500
          },
          {
            "id": 2,
            "idLiquidacionGlobal": 4,
            "codConceptoGasto": "EDE",
            "monto": 6800
          }
        ]
    }

    this._fxGlobals.showSpinner();

    return this._http.post(
        `${environment.apiUri}/liquidaciongbl/addExpense`,
        obj
    )
    .pipe(
      finalize(() => this._fxGlobals.hideSpinner())
    );
  }

}