import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FxGlobalsService } from '../fxGlobals/fxGlobals.service';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DiccionarioService {


  constructor( private _http: HttpClient, private _fxGlobals: FxGlobalsService ) {
  }

  

  public getAll( codigo: String ): Observable<any> {

    this._fxGlobals.showSpinner();

    let params = new HttpParams()
      .set('codigo', codigo.toString());

    return this._http.get(`${environment.apiUri}/diccionario/getAll`, 
      { params }
    )
    .pipe(
      finalize(() => this._fxGlobals.hideSpinner())
    );
  }


}
