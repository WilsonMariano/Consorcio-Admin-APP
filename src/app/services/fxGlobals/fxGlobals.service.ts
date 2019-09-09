import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

import swal, { SweetAlertType } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FxGlobalsService {

  constructor(private _spinner: NgxSpinnerService) { }

  public showSpinner(){

    this._spinner.show();
  }

  public hideSpinner(){

    setTimeout(() => this._spinner.hide(), 500);
  }

  public showAlert(title: string, msg: string, status: SweetAlertType) {

    swal( title, msg, status );
  }
}
