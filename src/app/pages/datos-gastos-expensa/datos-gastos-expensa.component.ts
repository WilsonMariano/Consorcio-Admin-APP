import { Component, OnInit } from '@angular/core';
import { ConceptosGastosService, DiccionarioService, FxGlobalsService, CommonService } from 'src/app/services/service.index';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { GastoLiquidacion, RelacionGasto } from 'src/app/class/class.index';

declare var $ : any;



@Component({
  selector: 'app-datos-gastos-expensa',
  templateUrl: './datos-gastos-expensa.component.html',
  styleUrls: ['./datos-gastos-expensa.component.css']
})
export class DatosGastosExpensaComponent implements OnInit {


  /*
  formBuider:    se utilizará para construir el arreglo de formularios
  amountRows:    cantidad de registros que tendra el arreglo de formularios 
  arrEntidad:    arreglo de entidades que se desplegaran en el combo del formulario
  arrManzanas:   idem arrEntidad pero con manzanas
  */
  public formBuilder: FormGroup;
  public amountRows = 0;
  public arrEntidades = [];
  public arrManzanas  = [];



  constructor( 
    private _fb: FormBuilder, 
    private _conceptoGastos: ConceptosGastosService, 
    private _diccionario: DiccionarioService, 
    private _fxGlobals: FxGlobalsService, 
    private _common: CommonService ) { }



  ngOnInit() {  

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
    this.getFormGroup(index).removeControl('manzanas');
    this.getFormGroup(index).removeControl('edificio');
    this.getFormGroup(index).removeControl('uf');


    // Agrego los controles correspondientes en base a la entidad elegida
    // Si se elige manzana, se agrega un arreglo de controles en base a la cantidad de manzanas existentes 

    let codEntidad: string = this.getFormGroup(index).get('entidad').value;

    switch(codEntidad) {

      case 'TIPO_ENTIDAD_1':
          this.getFormGroup(index).addControl(codEntidad, this.addManzanasControls());        
        break;

      default:
        this.getFormGroup(index).addControl(codEntidad, new FormControl('', Validators.required));
        break;
    }
  }



  // Se ejecuta cada vez que se escribe en el input de código
  public pressCodigo( event, index ): void {

    let value: String = event['srcElement'].value;

    // Si la cadena ingresada en el input tiene mas de 3 caracteres, trae de la db el concepto relacionado al codigo ingresado
    if(value.length == 3) {

      this._conceptoGastos.getOne( value ).subscribe(

        data =>  this.getFormGroup(index).controls['concepto'].setValue(data.conceptoGasto),
        err =>   this.getFormGroup(index).controls['concepto'].setValue('')
      );
    }
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
        entidad: ['', Validators.required]
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

    let arrGastos = new Array<GastoLiquidacion>();
    

    for(let i=0 ; i < this.lengthForms; i++) {

      let gasto = new GastoLiquidacion();

      gasto.setCodConceptoGasto = this.getFormGroup(i).get('codigo').value.toString().toUpperCase();
      gasto.setMonto = Number.parseFloat(this.getFormGroup(i).get('monto').value);
      gasto.setDetalle = this.getFormGroup(i).get('descripcion').value;

      let codEntidad: String = this.getFormGroup(i).get('entidad').value;
      let relaciones = this.getFormGroup(i).get(codEntidad.toString()).value;

      // Si la entidad es manzana
      if(Array.isArray(relaciones)) {
       
        for(let i = 0 ; i < relaciones.length ; i++) {

          if(relaciones[i]) {
            let relacion = new RelacionGasto();
  
            relacion.setEntidad = codEntidad;
            relacion.setNumero = this.arrManzanas[i].id;
  
            gasto.getRelacionesGastos.push(relacion);
          }
        }

      // Si la entidad es unidad  
      } else {

        let relacion = new RelacionGasto();
        relacion.setEntidad = codEntidad;
        relacion.setNumero = relaciones;

        gasto.getRelacionesGastos.push(relacion);
      }

      arrGastos.push(gasto);

      // console.log(relaciones);
      
    }

    console.log(arrGastos);



  }
  
}
