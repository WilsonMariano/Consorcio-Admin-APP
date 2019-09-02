import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/service.index';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-grilla-adherentes',
  templateUrl: './grilla-adherentes.component.html',
  styles: []
})
export class GrillaAdherentesComponent implements OnInit {

  /*  @arrAdherentes: arreglo que se trae del ws y llena la tabla
      @rowsWithPage: parámetro que se envía al ws y especifica cuantos registros debe traer
      @numPage: página actual; se envía al ws y especifica el número de la página a traer
      @arrPaginate = para el paginado; array con las páginas para armar los controles del paginado
  */
  public arrAdherentes: Array<any> = [];
  public rowsWithPage = 10;
  public numPage = 1;
  public arrPaginate = [];

  constructor(private _commonService: CommonService, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.getAdherentes();
  }

  public getAdherentes() {
    
    this.spinner.show();
    this._commonService.getWithPaged('adherentes', this.rowsWithPage, this.numPage-1).subscribe(
      data => {
        
        this.arrAdherentes = data.data;
        this.genControlsPaginate( data.total_pages );
        
        this.spinner.hide();
      }
    );
  }



  /*********************************************/
  /*****************PAGINADO********************/
  /*********************************************/

  // Genera array con la cantidad de páginas
  // Recibe la cantidad de páginas
  public genControlsPaginate( quantPages: Number ) {

    this.arrPaginate = [];

    for( let i = 0; i < quantPages; i++ ) {

      this.arrPaginate.push(i+1);
    }
  }


  // Método que realiza el paginado
  public paginate( page: any ) {

    switch( page ) {

      case 'prev':
        console.log("entre");
        if( this.numPage -1 >= this.arrPaginate[0] )
          this.numPage -= 1;
        break;
      case 'next':
          if( this.numPage +1 <= this.arrPaginate[this.arrPaginate.length-1] )
            this.numPage += 1;
        break;
      default:
        this.numPage = page;
        break;
    }
    this.getAdherentes();

  }

}
