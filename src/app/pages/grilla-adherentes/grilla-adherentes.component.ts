import { Component, OnInit } from '@angular/core';
import { CommonService, FxGlobalsService } from '../../services/service.index';
declare var $ : any;



@Component({
  selector: 'app-grilla-adherentes',
  templateUrl: './grilla-adherentes.component.html'
})
export class GrillaAdherentesComponent implements OnInit {


  /*  @arrAdherentes: arreglo que se trae del ws y llena la tabla
      @rowsWithPage: parámetro que se envía al ws y especifica cuantos registros debe traer
      @numPage: página actual; se envía al ws y especifica el número de la página a traer
      @totalResults: total de resultados encontrados en la BD, lo muestro en la grilla
      @arrPaginate: para el paginado; array con las páginas para armar los controles del paginado
      @arrControlsFilter: arreglo de input mostrados en la grilla
      @arrFilterParams: arreglo que contendra los parametros para filtrar (si algun input se encuentra con texto)
  */
  public arrAdherentes: Array<any> = [];
  public rowsWithPage = 20;
  public numPage = 1;
  public totalResults = 0;
  public arrPaginate = [];

  public arrControlsFilter = ['id', 'nroDocumento', 'apellido', 'nombre', 'telefono', 'email'];
  private arrFilterParams = [];



  constructor(private _common: CommonService, private _fxGlobales: FxGlobalsService) { }

  

  ngOnInit() {

    this.getAdherentes();
  }


  public getAdherentes() {
    
    this._fxGlobales.showSpinner();
    this._common.getWithPaged('adherentes', this.rowsWithPage, this.numPage-1).subscribe(
      data => {
        
        this.arrAdherentes = data.data;
        this.totalResults = data.total_rows;
        this.genControlsPaginate( data.total_pages );
        
        this._fxGlobales.hideSpinner();
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

   if(this.arrFilterParams.length === 0)
     this.getAdherentes();
    else
      this.getAdherentesFilter(this.arrFilterParams[0], this.arrFilterParams[1], this.numPage -1 );

  }


  // Se ejecuta cada vez que se escribe en un input
  public filter( event: KeyboardEvent ) {

    let id = event.srcElement['id'];
    let text = $('#'+id).val();

    // Si se ingresa algo en un input, desabilito todos los demas
    if(text != "") {
      
      // Lleno el array de parámetro de los filtros
      this.arrFilterParams[0] = id;
      this.arrFilterParams[1] = text;

      this.arrControlsFilter.forEach(control => {
  
        if(control != id)
          $('#'+control).prop('disabled', true);
      });
    }
    // Si se borra todo el contenido del input, habilito todos los demás
    else {

      this.arrFilterParams = [];

      this.arrControlsFilter.forEach(control => {
    
        if(control != id)
          $('#'+control).removeAttr('disabled');
      });
    }

    // Asigno que la página sea la primera y ejecuto el método para traer los adherentes filtrados
    this.numPage = 1;
    this.getAdherentesFilter(id, text, 0);
  }



  // Trae los adherentes filtrados de la bd
  private getAdherentesFilter(id: String, text: String, page) {

    this._fxGlobales.showSpinner();

    this._common.filter( 'adherentes', id, text, this.rowsWithPage, page ).subscribe(
      data => {
  
        this.arrAdherentes = data.data;
        this.totalResults = data.total_rows;
        this.genControlsPaginate( data.total_pages );

        this._fxGlobales.hideSpinner();
      }
    );

  }

}
