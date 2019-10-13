import { Component, OnInit } from '@angular/core';
import { ConceptosGastosService, DiccionarioService, FxGlobalsService, CommonService } from 'src/app/services/service.index';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

declare var $ : any;

@Component({
  selector: 'app-datos-gastos-expensa',
  templateUrl: './datos-gastos-expensa.component.html',
  styleUrls: ['./datos-gastos-expensa.component.css']
})
export class DatosGastosExpensaComponent implements OnInit {

  public forma: FormGroup;
  public amountRows = 0;
  public arrEntidades = [];
  public arrManzanas  = [];

  constructor( private formBuilder: FormBuilder, private _conceptoGastos: ConceptosGastosService, private _diccionario: DiccionarioService, private _fxGlobals: FxGlobalsService, private _common: CommonService ) { }


  ngOnInit() {  

    this.forma = this.formBuilder.group({
      controls: new FormArray([])
    });


    this.getEntidades();
    this.getManzanas();

    this.addRow();

  }

   // convenience getters for easy access to form fields
  //  get f() { return this.forma.controls; }
   get t() { return this.forma.controls.controls as FormArray; }
  //  private getControl(i) { return this.t.controls[i].controls as  }
  get manzanasArray() {

    return <FormArray> this.t;
  }


  private addManzanasControls() {

    const arr = this.arrManzanas.map(element => {

      return this.formBuilder.control(false);
    });

    return this.formBuilder.array(arr, this.checkValidator);
  }


  public pressCodigo( event, index ): void {

    let value: String = event['srcElement'].value;


    if(value.length == 3) {

      console.log(value);
      this._conceptoGastos.getOne( value ).subscribe(

        data => (<FormArray>this.t.controls[index]).controls['concepto'].setValue(data.conceptoGasto),
        err => this.forma.get('concepto').reset()
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



  public onChangeEntidad(i) : void {

    this.forma.get('controls')['controls'][i].removeControl('manzanas');
    this.forma.get('controls')['controls'][i].removeControl('edificio');
    this.forma.get('controls')['controls'][i].removeControl('uf');

    let entidad = this.forma.get('controls')['controls'][i].get('entidad').value;


    switch(entidad) {

      case 'TIPO_ENTIDAD_1':
          this.forma.get('controls')['controls'][i].addControl('manzanas', this.addManzanasControls());        
        break;

      case 'TIPO_ENTIDAD_2':
        this.forma.get('controls')['controls'][i].addControl('edificio', new FormControl('', Validators.required));
        break;

      case 'TIPO_ENTIDAD_3':
        this.forma.get('controls')['controls'][i].addControl('uf', new FormControl('', Validators.required));
        break;

    }
  }


test(){

  console.log(this.manzanasArray);
  console.log(this.getValidity(0));
}

  public addRow() {

    

    this.amountRows ++;

        for (let i = this.t.length; i < this.amountRows; i++) {
            this.t.push(this.formBuilder.group({
                codigo: [''],
                concepto: ['', Validators.required],
                monto: ['', Validators.required],
                descripcion: [''],
                entidad: ['', Validators.required]
            }));
        }
  
        
  }

  public getValidity(i) {
    return (<FormArray>this.forma.get('controls')).controls[i].invalid;
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
