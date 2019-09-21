import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FxGlobalsService } from '../fxGlobals/fxGlobals.service';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private headers: HttpHeaders;


  constructor( private _http: HttpClient, private _fxGlobals: FxGlobalsService ) {

    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }



  public getWithPaged( entity: String, rows: Number, page: Number, column?: String, text?: String ): Observable<any> {

    this._fxGlobals.showSpinner();


    let params = new HttpParams()
      .set( 'rows', rows.toString() )
      .set( 'page', page.toString() )
      .set( 'entity', entity.toString() )

    
    if( column && text ) {
    
      params = params
                .append( 'column', column.toString() )
                .append( 'text', text.toString() );
    }
    

    return this._http.get( `${environment.apiUri}/generic/paged`, 
      { params }
    )
    .pipe(
      finalize(() => this._fxGlobals.hideSpinner())
    );
  }  



  public getOne( entity: String, id: String ): Observable<any> {

    this._fxGlobals.showSpinner();

    let params = new HttpParams()
      .set('t', entity.toString());

    return this._http.get(`${environment.apiUri}/generic/one/${id}`, 
      { params }
    )
    .pipe(
      finalize(() => this._fxGlobals.hideSpinner())
    );
  }



  public UpdateOne( entity: String, object: Object ): Observable<any> {

    this._fxGlobals.showSpinner();

    let params = new HttpParams()
      .set( 't', entity.toString() );

    return this._http.put( `${environment.apiUri}/generic/put`, 
      object, 
      {
        'headers': this.headers, 
        params
      }
    ).pipe(
      finalize(() => this._fxGlobals.hideSpinner())
    );
  }



  public insertEntity( object: Object, entity: String ): Observable<any> { 
    
    this._fxGlobals.showSpinner();

    return this._http.post(`${environment.apiUri}/${entity}/insert`, 
      object, 
      {
        'headers': this.headers
      }
    )
    .pipe(
      finalize(() => this._fxGlobals.hideSpinner())
    );
  }


}
