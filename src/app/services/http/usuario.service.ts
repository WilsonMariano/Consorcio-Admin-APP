import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FxGlobalsService } from '../fxGlobals/fxGlobals.service';
import { finalize } from 'rxjs/operators';
import { Usuario } from 'src/app/class/class.index';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private headers: HttpHeaders;



  constructor( private _http: HttpClient, private _fxGlobals: FxGlobalsService ) {

    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

  

  public login( usuario: Usuario ): Observable<any> {

    this._fxGlobals.showSpinner();

    return this._http.post(
        `${environment.apiUri}/usuarios/login`,
        usuario
    )
    .pipe(
      finalize(() => this._fxGlobals.hideSpinner())
    );
  }


}
