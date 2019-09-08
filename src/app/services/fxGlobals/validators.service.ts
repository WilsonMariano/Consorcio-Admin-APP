import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  public emailValidator(control: FormControl) {

    let invalid = { 'invalidFormat': true };
  
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(control.value) ? null : invalid ;

  }
}
