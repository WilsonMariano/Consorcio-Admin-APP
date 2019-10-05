import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

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
  s
}
