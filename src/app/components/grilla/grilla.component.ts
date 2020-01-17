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
    'arrAttr':        arreglo de atributos del objeto que se mostraran en la tabla
    'arrControles:    arreglo de labels que tendra la tabla
    'buttons':        arreglo de botones que debera mostrar la tabla
      'url'           url donde se direccionará al presionar el botón
      'icon'          url ícono que mostrará el botón
    'filterParams':   objeto con parametros para filtrar la tabla, por ejemplo id
      'col'           columna de la tabla por la que se filtrará
      'txt'           valor del campo por el que se realizará el filtrado
  @arrObjects:        arreglo de objetos que se bindeara con la tabla
  @arrPaginate:       arreglo de enteros con los valores del paginado, lo genera el método 'getControlsPaginate'
  @filterParams:      objeto de filtros 
    'filterId:        objeto con los parámetros para realizar el filtrado de los objetos por id
    'filterGrid:      objeto con los parámetros para realizar el filtrado de la grilla
  @rowsWithPage:      atributo que establece la cantidad de filas que mostrara la tabla
  @numPage:           pagina actual que muestra la tabla (paginado)
  @totalResults:      cantidad de registros totales existentes de la db
   */

  @Input() options = [];

  private filterParams = {
    'filterId': null,
    'filterGrid' : null,
  };

  public arrObjects = [];
  public arrPaginate = [];
  public rowsWithPage = 20;
  public numPage = 1;
  public totalResults = 0;



  constructor(private _common: CommonService, private _fxGlobales: FxGlobalsService) { }



  ngOnInit() {

    // Asigno los filtros recibidos al objeto de filtros
    if(this.options['filterParams']) 
      this.filterParams.filterId = this.options['filterParams'];
    
    // Cargo la tabla con los objetos iniciales
    this.getObjects();
  }



  /**********************************************************************************************************************************
   Método que trae los objetos de la base de datos.
   Es llamado cuando se abre la vista para traer los objetos iniciales.
   Tambien se llama cuando se pagina la tabla, tomando como valor el número de página actual.
   Se usa también cuando se filtra la tabla, pasando como parámetro el objeto de filtros.
  ***********************************************************************************************************************************/
  public getObjects() {
    
    this._common.getWithPaged(this.options['entity'], this.rowsWithPage, this.numPage-1, this.filterParams).subscribe(
      data => {

        console.log(data);

        this.arrObjects = data.data;
        this.totalResults = data.total_rows;
        this.genControlsPaginate( data.total_pages );
      }
    );
  }



  /***********************************************************************************************************************************/
  /**************************************************** COMIENZO METODOS DE PAGINADO **************************************************/
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
    
    this.getObjects();
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

    // Si se ingresa algo en un input
    if(text != "") {
      
      // Deshabilito todos los demas
      this.options['arrAttr'].forEach(control => {
  
        if(control.attr != id)
          $('#'+control.attr).prop('disabled', true);
      });

      // Lleno el array de parámetro de los filtros
      this.filterParams.filterGrid = {
        'col': id,
        'txt': text
      }
    }

    // Si se borra todo el contenido del input
    else {

      // Si se borra todo el contenido del input, habilito todos los demás
      this.options['arrAttr'].forEach(control => {
    
        if(control.attr != id)
          $('#'+control.attr).removeAttr('disabled');
      });

      // Nulleo los parámetros de filtro
      this.filterParams.filterGrid = null;
    }

    // Asigno que la página sea la primera y ejecuto el método para traer los objetos filtrados
    this.numPage = 1;

    // Traigo los objetos filtrados por id de columna y texto ingresado
    this.getObjects();
  }



  /***********************************************************************************************************************************/
  /***************************************************** FIN METODOS DE FILTRADO *****************************************************/
  /***********************************************************************************************************************************/



  public delete( id: Number ): void {

    this._fxGlobales.showQuestionAlert("Confirmación", "Está seguro de confirmar la operación?", "warning").then(
      
      // Operación exitosa
      () => {
        this._common.deleteEntity(id, this.options['delete'].entityUrl).subscribe(

          data => {
            console.log(data),
            this.getObjects();
          }
        )
      },
      () => {}
    );
      
  }
}
