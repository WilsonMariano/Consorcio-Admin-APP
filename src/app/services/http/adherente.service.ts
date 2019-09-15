import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from '../../../environments/environment';
// import { Adherente } from '../../class/adherente.class';
import { FxGlobalsService } from '../fxGlobals/fxGlobals.service';


@Injectable({
  providedIn: 'root'
})
export class AdherenteService {

  private headers: HttpHeaders;



  constructor( private _http: HttpClient, private _fxGlobals: FxGlobalsService ) {

    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }


}
