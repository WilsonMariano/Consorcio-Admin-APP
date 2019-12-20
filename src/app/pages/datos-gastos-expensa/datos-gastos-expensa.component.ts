import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ConceptosGastosService, DiccionarioService, FxGlobalsService, CommonService } from 'src/app/services/service.index';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { GastoLiquidacion, RelacionGasto } from 'src/app/class/class.index';

declare var $ : any;
declare var debug : any;



@Component({
  selector: 'app-datos-gastos-expensa',
  templateUrl: './datos-gastos-expensa.component.html',
  styleUrls: ['./datos-gastos-expensa.component.css']
})
export class DatosGastosExpensaComponent implements OnInit {


  /*
  formBuider:     se utilizará para construir el arreglo de formularios
  amountRows:     cantidad de registros que tendra el arreglo de formularios 
  arrEntidad:     arreglo de entidades que se desplegaran en el combo del formulario
  arrManzanas:    idem arrEntidad pero con manzanas
  idLiquidacion:  id de la liquidacion pasada por url 
  indexForm:      se utiliza para guardar el índice de la forma en la cual se abrio el modal de visualizacion de conceptos-gastos 
  */
  public formBuilder: FormGroup;
  public amountRows = 0;
  public arrEntidades = [];
  public arrManzanas  = [];
  private idLiquidacion: Number = null;
  private indexForm: Number;



  constructor( 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _fb: FormBuilder, 
    private _conceptoGastos: ConceptosGastosService, 
    private _diccionario: DiccionarioService, 
    private _fxGlobals: FxGlobalsService, 
    private _common: CommonService ) { }



  ngOnInit() {  

    // Recibo el id de la liquidacion
    this.activatedRoute.params.subscribe(
      data => { 

        if(data.id) this.idLiquidacion = Number.parseInt(data.id); 
      }
    )

    this.formBuilder = this._fb.group({

      forma: new FormArray ([])
    });

    
    // Lleno los combobox
    this.getEntidades();
    this.getManzanas();

    // Inserto el primer registro del formulario
    this.addRow();

  }



  /**********************************************************************************************************************************/
  /******************************************************* MÉTODOS DE FORMA *********************************************************/
  /**********************************************************************************************************************************/


  // GETERS

  // Devuelve un arreglo de forms contenido en el formBuilder principal
  get getForma()      { return this.formBuilder.controls.forma as FormArray; }

  // Devuelve la cantidad de forms que tiene el formBuilder principal
  get lengthForms()   { return this.getForma.controls.length }

  // Devuelve un grupo de controles contenidOs en la forma de la posición pasada por parámetro
  private getFormGroup( index: any ) { return this.getForma.controls[index] as FormGroup }



  // Genera los controles en base al arreglo de manzanas
  private addManzanasControls() {

    const arr = this.arrManzanas.map(() => this._fb.control(false));

    return this._fb.array(arr, this.checkValidator);
  }



  /**********************************************************************************************************************************/
  /************************************************** DATOS PARA LOS COMBO **********************************************************/
  /**********************************************************************************************************************************/


  // Trae de la db los tipos de entidad existentes para llenar el combo
  private getEntidades() : void {

    this._diccionario.getAll('TIPO_ENTIDAD').subscribe(

      data => this.arrEntidades = data 
    );
  }



   // Trae de la db las manzanas existentes para llenar el combo
  private getManzanas() : void {

    this._common.getAll('manzanas').subscribe(

      data => this.arrManzanas = data 
    );
  }



  /**********************************************************************************************************************************/
  /********************************************************** LISTENERS *************************************************************/
  /**********************************************************************************************************************************/


  // Se ejecuta cada vez que se presiona un elemento en el combo de entidades
  public onChangeEntidad( index ) : void {

    // Elimino el control en caso de que existiera
    this.arrEntidades.forEach(element => {
      this.getFormGroup(index).removeControl(element.codigo);
    })


    // Agrego los controles correspondientes en base a la entidad elegida
    // Si se elige manzana, se agrega un arreglo de controles en base a la cantidad de manzanas existentes 

    let codEntidad: string = this.getFormGroup(index).get('entidad').value;

    switch(codEntidad) {

      case 'TIPO_ENTIDAD_1':
          this.getFormGroup(index).addControl(codEntidad, this.addManzanasControls());     
          this.getFormGroup(index).get('manzana').disable();   

        break;

      default:
        this.getFormGroup(index).addControl(codEntidad, new FormControl('', Validators.required));
        this.getFormGroup(index).get('manzana').enable();   
        break;
    }
  }



  // Se ejecuta cada vez que se escribe en el input de código
  public blurCodigo( event, index ): void {

    let value: String = event['srcElement'].value;

    // Si la cadena ingresada en el input tiene mas de 3 caracteres, trae de la db el concepto relacionado al codigo ingresado
    if(value.length == 3) {

      this._conceptoGastos.getOne( value ).subscribe(

        data =>  this.getFormGroup(index).controls['concepto'].setValue(data.conceptoGasto),
        () =>   this.getFormGroup(index).controls['concepto'].setValue('')
      );
    }
  }



  // Cuando se presiona la tecla '+' se muestra un modal con el listado de conceptos disponibles
  public pressCodigo( event, i ): void {

    if(event.keyCode == 43) {

      this.indexForm = i;
      $("#modalConceptos").modal("show");
    }
  }



  // Se ejecuta cuando se cierra el modalConceptos, pasando por parámetro el concepto elegido y asignandolo a la forma
  public successModal( event ): void {

    this.getFormGroup(this.indexForm).controls['codigo'].setValue(event.codigo);
    this.getFormGroup(this.indexForm).controls['concepto'].setValue(event.conceptoGasto);

    $('#modalConceptos').modal('hide');
  }



  /**********************************************************************************************************************************/
  /****************************************************** ADD & REMOVE ROWS *********************************************************/
  /**********************************************************************************************************************************/



  // Agrego  una forma nueva al arreglo de formas
  public addRow() {

    this.amountRows ++;

    this.getForma.push(this._fb.group({

        codigo: [''],
        concepto: ['', Validators.required],
        monto: ['', Validators.required],
        descripcion: [''],
        entidad: ['', Validators.required],
        manzana: ['', Validators.required]
    }));   
  }



  // Elimino la forma de la posición pasada por parámetro
  // Actualizo el estado del formBuilder
  public deleteRow(i: number) {
  
    this.getForma.controls.splice(i, 1);
    this.amountRows--;

    this.getForma.updateValueAndValidity();

  }



  /**********************************************************************************************************************************/
  /******************************************************** VALIDATORS FORM *********************************************************/
  /**********************************************************************************************************************************/


  
  // Validador que recorre el arreglo de controles de las manzanas y verifica que se haya tildado al menos una
  public checkValidator( controls: FormArray ): null | object {

    let flag = false
    let invalid = { 'unchecked': true };

    controls.controls.forEach(element => {

      if(element.value) 
        flag = true;      
    });

    
    return flag ? null : invalid;
  }



  /**********************************************************************************************************************************/
  /************************************************************** SUBMIT ************************************************************/
  /**********************************************************************************************************************************/



  public onSubmit() {

    // Muestro mensaje de confirmación
    this._fxGlobals.showQuestionAlert("Confirmación", "Está seguro de confirmar la operación?", "warning").then(
  
      // Afirmativo
      () => {
        
        // Instancio arreglo de gastos
        let arrGastos = new Array<GastoLiquidacion>();
        
        // Recorro el arreglo de formas
        for(let i=0 ; i < this.lengthForms; i++) {
    
          // Instancio un nuevo gasto
          let gasto = new GastoLiquidacion();
    
          // Seteo los atributos del gasto con los datos ingresados en la forma
          // IdLiquidacion lo recibo por parámetro en la url
          gasto.setIdLiquidacionGlobal = this.idLiquidacion;

          gasto.setCodConceptoGasto = this.getFormGroup(i).get('codigo').value.toString().toUpperCase();
          gasto.setMonto = Number.parseFloat(this.getFormGroup(i).get('monto').value);
          gasto.setDetalle = this.getFormGroup(i).get('descripcion').value;
    
          // Guardo el código del gastos ingresado y recupero las relaciones
          let codEntidad: String = this.getFormGroup(i).get('entidad').value;
          let relaciones = this.getFormGroup(i).get(codEntidad.toString()).value;
    
          // Si las relaciones es arreglo es porque hay varias relaciones (manzanas)
          // Si no es arreglo se elgió departamento o uf
          if(Array.isArray(relaciones)) {
           
            // Itero las manzanas elegidas
            for(let i = 0 ; i < relaciones.length ; i++) {
    
              // Si el check de manzana en posicion de i está tildado
              if(relaciones[i]) {
                
                // Instancio una relacion
                let relacion = new RelacionGasto();
      
                // Seteo los atributos de la relación con los de la forma
                relacion.setEntidad(codEntidad);
                relacion.setNumero(this.arrManzanas[i].id);
      
                // Inserto el objeto en el arreglo de relaciones
                gasto.getRelacionesGastos.push(relacion);
              }
            }
    
          // Si la entidad es uf o edificio 
          } else {
    
            // Instancio una relacion
            let relacion = new RelacionGasto();

            // Seteo los atributos con los datos de la forma
            relacion.setEntidad(codEntidad);
            relacion.setNumero(relaciones);

            // Si el tipo de entidad no es manzana, agrego el id de la manzana
            relacion.setIdManzana(this.getFormGroup(i).get('manzana').value);
    
            // Inserto el objeto en el arreglo de relaciones
            gasto.getRelacionesGastos.push(relacion);
          }
    
          // Inserto el gasto en el arreglo de gastos
          arrGastos.push(gasto);          
        }
    
        // Acá ya tengo conformado el arreglo de gastos con sus respectivas relaciones, realizo el insert

        /*************************************** INSERT **********************************************/

        console.log(arrGastos);

        this._common.insertEntity(arrGastos, 'gastos-liq').subscribe(
    
          // Operación exitosa. Operación truncada la manejo en el interceptor.class
          () => {

            // Muestro alert de success y redirecciono a la grilla de gastos
            this._fxGlobals.showAlert( 'Operación Exitosa!', 'Los gastos se han insertado con éxito', 'success' );
            this.router.navigate( ['grilla-gastos-liquidacion', this.idLiquidacion]);
          }
        )
      },
      // Cancel
      () => {}
    );
  }
 
  test() {

    console.log(this.formBuilder);
  }
}
