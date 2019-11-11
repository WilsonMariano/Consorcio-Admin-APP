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

  

  // public insert( liquidacionG: LiquidacionGlobal ): Observable<any> {


  //   this._fxGlobals.showSpinner();

  //   return this._http.post(
  //       `${environment.apiUri}/liquidacion-gbl/insert`,
  //       liquidacionG
  //   )
  //   .pipe(
  //     finalize(() => this._fxGlobals.hideSpinner())
  //   );
  // }

}