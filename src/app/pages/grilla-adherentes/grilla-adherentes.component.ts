import { Component, OnInit } from '@angular/core';
import { CommonService, FxGlobalsService } from '../../services/service.index';
import { DOCUMENT } from '@angular/common'; 



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
  public rowsWithPage = 20;
  public numPage = 1;
  public totalResults = 0;
  public arrPaginate = [];


  constructor(private _commonService: CommonService, private _fxGlobales: FxGlobalsService) { }

  ngOnInit() {

    this.getAdherentes();
  }

  public getAdherentes() {
    
    this._fxGlobales.showSpinner();
    this._commonService.getWithPaged('adherentes', this.rowsWithPage, this.numPage-1).subscribe(
      data => {
        
        this.arrAdherentes = data.data;
        this.totalResults = data.total_rows;
        this.genControlsPaginate( data.total_pages );
        
        setTimeout( () => this._fxGlobales.hideSpinner(), 500 );
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


  public filter( event: KeyboardEvent ) {

    // let id = event.srcElement['id'];
    // let string = DOCUMENT.getElementById(id).;

    // console.log(string);  


  }

}
