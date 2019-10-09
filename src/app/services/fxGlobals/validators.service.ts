import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonService } from '../http/common.service';

import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  private _common: CommonService;

  constructor() { }

  public emailValidator( control: FormControl ): null | object {

    let invalid = { 'invalidFormat': true };
  
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(control.value) ? null : invalid ;

  }


  public dateValidator( control: FormControl ): null | object {

    let invalid = { 'invalidFormat': true };

    let date = moment(control.value, 'YYYY-MM-DD', true);

    return date.isValid() ? null : invalid;

  }
  

  public asyncExistsEntity( entity: String ): Function {

    return function ( control: FormControl ) : Promise<any> {

      let self = this;

      return new Promise(
        (resolve, reject) => {

          self._common.getIsDuplicated(entity, control.value).subscribe(

            data  => {
              
              if( data ) resolve( null );
              else       resolve( { existe : true } );
            },
            err   => reject( err ) )
      });
    }
  }


  public asyncNotExistsEntity( entity: String ): Function {

    return function ( control: FormControl ) : Promise<any> {

      let self = this;

      return new Promise(
        (resolve, reject) => {

          self._common.getIsDuplicated(entity, control.value).subscribe(

            data  => {
              
              if( data ) resolve( { noExiste : true } );
              else       resolve( null );
            },
            err   => reject( err ) )
      });
    }
  }
}
