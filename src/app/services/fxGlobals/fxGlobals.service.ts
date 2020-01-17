import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

// import swal, { SweetAlertType, SweetAlertOptions } from 'sweetalert2';
declare var swal : any;
// import * as swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class FxGlobalsService {


  constructor(private _spinner: NgxSpinnerService) { }


  public showSpinner(){

    this._spinner.show();
  }


  public hideSpinner(){

    setTimeout(() => this._spinner.hide(), 1000);
  }


  public showAlert(title: string, text: string, status) {

    swal( title, text, status );
  }


  public showQuestionAlert(title: string, text: string, icon) {

    let alertOptions = {
      title,
      text,
      icon,
      buttons: true,
      dangerMode: true
    };


    // Retorno una promesa con el resultado según lo que haya presionado el usuario
    return new Promise(( resolve, reject ) => {

      swal( alertOptions ).then(( response ) => {

        if(response)
           resolve(true);

        else
          reject(false);

      });
    });    
  }

  public dateFormat(date): String {

    let arrDate = date.split('-');

    return arrDate[2] +'-'+ arrDate[1] +'-'+ arrDate[0];

  }
}
