import { Component, OnInit, Input } from '@angular/core';
import { CommonService, FxGlobalsService } from 'src/app/services/service.index';
declare var $ : any;

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {
  /*
  @options:           arreglo de objetos con opciones para la grilla, entre ellos: 
    'entity':         entidad que va a manejar la tabla (se usa en metodo para traer objetos de la db)
    'arrAttr':        arreglo de atributos, del objeto, que se mostraran en la tabla
    'arrControles:    arreglo de labels que tendra la tabla
    'buttons':        arreglo de botones que debera mostrar la tabla
  @arrObjects:        arreglo de objetos que se bindeara con la tabla
  @arrPaginate:       arreglo de enteros con los valores del paginado, lo genera el metodo 'getControlsPaginate'
  @arrFilterParams:   en caso de escribir en los inputs de filtro, este arreglo se llenara con los valores por los que buscar
  @rowsWithPage:      atributo que establece la cantidad de filas que mostrara la tabla
  @numPage:           pagina actual que muestra la tabla (paginado)
  @totalResults:      cantidad de registros totales existentes de la db
   */

  @Input() options = [];
  
  public arrObjects = [];
  public arrPaginate = [];
  private arrFilterParams = [];
  public rowsWithPage = 20;
  public numPage = 1;
  public totalResults = 0;



  constructor(private _common: CommonService, private _fxGlobales: FxGlobalsService) { }



  ngOnInit() {

    // Cargo la tabla con los objetos iniciales
    if(this.options['filterParams'])
      this.getObjects(this.options['filterParams'].col1, this.options['filterParams'].txt1);
    
    else
      this.getObjects();
  }



  /**********************************************************************************************************************************
   MEtodo que trae los objetos de la base de datos.
   Es llamado cuando se abre la vista para traer los objetos iniciales.
   Tambien se llama cuando se pagina la tabla, tomando como valor el número de página actual.
   Se usa también cuando se filtra la tabla, recibiendo como valores la columna y texto a filtrar.
  ***********************************************************************************************************************************/
  public getObjects(column?: String, text?: String) {
    
    this._common.getWithPaged(this.options['entity'], this.rowsWithPage, this.numPage-1, column, text).subscribe(
      data => {
        console.log(data);
        this.arrObjects = data.data;
        this.totalResults = data.total_rows;
        this.genControlsPaginate( data.total_pages );
      }
    );
  }



  /***********************************************************************************************************************************/
  /**************************************************** COMIENZO METODOS DE PAGINADO**************************************************/
  /***********************************************************************************************************************************/



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
      this.getObjects();
    else
      this.getObjects(this.arrFilterParams[0], this.arrFilterParams[1]);
  }



  /***********************************************************************************************************************************/
  /********************************************************* FIN METODOS DE PAGINADO**************************************************/
  /***********************************************************************************************************************************/



  /***********************************************************************************************************************************/
  /********************************************************* METODOS DE FILTRADO *****************************************************/
  /***********************************************************************************************************************************/


  
  // Se ejecuta cada vez que se escribe en un input
  public filter( event: KeyboardEvent ) {
    
    let id = event.srcElement['id'];
    let text = $('#'+id).val();

    // Si se ingresa algo en un input, desabilito todos los demas
    if(text != "") {
      
      // Lleno el array de parámetro de los filtros
      this.arrFilterParams[0] = id;
      this.arrFilterParams[1] = text;

      this.options['arrAttr'].forEach(control => {
  
        if(control.attr != id)
          $('#'+control.attr).prop('disabled', true);
      });
    }
    // Si se borra todo el contenido del input, habilito todos los demás
    else {

      this.arrFilterParams = [];

      this.options['arrAttr'].forEach(control => {
    
        if(control.attr != id)
          $('#'+control.attr).removeAttr('disabled');
      });
    }

    // Asigno que la página sea la primera y ejecuto el método para traer los objetos filtrados
    this.numPage = 1;

    // Traigo los objetos filtrados por id de columna y texto ingresado
    this.getObjects(id, text);
  }



  /***********************************************************************************************************************************/
  /***************************************************** FIN METODOS DE FILTRADO *****************************************************/
  /***********************************************************************************************************************************/

}
