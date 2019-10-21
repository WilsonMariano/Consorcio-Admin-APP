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

    setTimeout(() => this._spinner.hide(), 500);
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
      // buttons: {
      //   cancel: {
      //     text: "Cancelar",
      //     value: null,
      //     visible: false,
      //     className: "",
      //     closeModal: true,
      //   },
      //   confirm: {
      //     text: "Aceptar",
      //     value: true,
      //     visible: true,
      //     className: "",
      //     closeModal: true
      //   }
      // },
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
}
