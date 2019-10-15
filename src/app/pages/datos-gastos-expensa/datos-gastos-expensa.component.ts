import { Component, OnInit } from '@angular/core';
import { ConceptosGastosService, DiccionarioService, FxGlobalsService, CommonService } from 'src/app/services/service.index';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

declare var $ : any;



@Component({
  selector: 'app-datos-gastos-expensa',
  templateUrl: './datos-gastos-expensa.component.html',
  styleUrls: ['./datos-gastos-expensa.component.css']
})
export class DatosGastosExpensaComponent implements OnInit {


  /*
  formBuider:  se utilizará para construir 
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


    this.getEntidades();
    this.getManzanas();

    this.addRow();
  }



  // Getters
  get getForma() { return this.formBuilder.controls.forma as FormArray; }
  get lengthForms() { return this.getForma.controls.length }



  private getFormGroup( index: any ) {

    return this.getForma.controls[index] as FormGroup
  }



  private addManzanasControls() {

    const arr = this.arrManzanas.map(element => {

      return this._fb.control(false);
    });

    return this._fb.array(arr, this.checkValidator);
  }



  public pressCodigo( event, index ): void {

    let value: String = event['srcElement'].value;


    if(value.length == 3) {

      console.log(value);
      this._conceptoGastos.getOne( value ).subscribe(

        data => (<FormArray>this.getForma.controls[index]).controls['concepto'].setValue(data.conceptoGasto),
        err => this.formBuilder.get('concepto').reset()
      );
    }
  }



  private getEntidades() : void {

    this._diccionario.getAll('TIPO_ENTIDAD').subscribe(

      data => this.arrEntidades = data 
    );
  }



  private getManzanas() : void {

    this._common.getAll('manzanas').subscribe(

      data => this.arrManzanas = data 
    );
  }



  public onChangeEntidad( index ) : void {

    this.getFormGroup(index).removeControl('manzanas');
    this.getFormGroup(index).removeControl('edificio');
    this.getFormGroup(index).removeControl('uf');


    let entidad = this.getFormGroup(index).get('entidad').value;


    switch(entidad) {

      case 'TIPO_ENTIDAD_1':
          this.getFormGroup(index).addControl('manzanas', this.addManzanasControls());        
        break;

      case 'TIPO_ENTIDAD_2':
        this.getFormGroup(index).addControl('edificio', new FormControl('', Validators.required));
        break;

      case 'TIPO_ENTIDAD_3':
        this.getFormGroup(index).addControl('uf', new FormControl('', Validators.required));
        break;

    }
  }



  public addRow() {

    this.amountRows ++;

        for (let i = this.getForma.length; i < this.amountRows; i++) {

            this.getForma.push(this._fb.group({

                codigo: [''],
                concepto: ['', Validators.required],
                monto: ['', Validators.required],
                descripcion: [''],
                entidad: ['', Validators.required]
            }));
        }        
  }



  public deleteRow(i: number) {
  
    console.log(this.getForma.controls);
    this.getForma.controls.splice(i, 1);
    this.amountRows--;

  }



  public checkValidator( controls: FormArray ): null | object {

    let flag = false
    let invalid = { 'unchecked': true };

    controls.controls.forEach(element => {

      if(element.value) 
        flag = true;      
    });

    
    return flag ? null : invalid;
  }

  
}
