import { Component, OnInit, Input } from '@angular/core';
import { CommonService, FxGlobalsService } from 'src/app/services/service.index';
declare var $ : any;

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {
  @Input() options = [];
  
  public arrObjects = [];
  public arrPaginate = [];
  private arrFilterParams = [];
  public rowsWithPage = 20;
  public numPage = 1;
  public totalResults = 0;




  constructor(private _common: CommonService, private _fxGlobales: FxGlobalsService) { }

  ngOnInit() {

    this.getObjects();
  }


  public getObjects() {
    
    this._common.getWithPaged(this.options['entity'], this.rowsWithPage, this.numPage-1).subscribe(
      data => {

        this.arrObjects = data.data;
        this.totalResults = data.total_rows;
        this.genControlsPaginate( data.total_pages );
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
      this.getObjectsFilter(this.arrFilterParams[0], this.arrFilterParams[1], this.numPage -1 );

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
    this.getObjectsFilter(id, text, 0);
  }



  // Trae los objetos filtrados de la bd
  private getObjectsFilter(id: String, text: String, page) {

    this._common.filter( this.options['entity'], id, text, this.rowsWithPage, page ).subscribe(  
      data => {
  
        this.arrObjects = data.data;
        this.totalResults = data.total_rows;
        this.genControlsPaginate( data.total_pages );
      }
    );

  }

}
