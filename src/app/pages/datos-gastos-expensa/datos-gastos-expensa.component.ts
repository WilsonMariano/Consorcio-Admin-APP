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



  public pressCodigo( event, index ): void {

    let value: String = event['srcElement'].value;


    if(value.length == 3) {

      console.log(value);
      this._conceptoGastos.getOne( value ).subscribe(

        data => this.t.controls[index].controls['concepto'].setValue(data.conceptoGasto),
        // data => this.getControl['concepto'].setValue(data.conceptoGasto),
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

    let entidad = this.forma.get('controls')['controls'][i].get('entidad').value;


    switch(entidad) {

      case 'TIPO_ENTIDAD_1':
          this.forma.get('controls')['controls'][i].addControl('140', new FormControl(''));
          this.forma.get('controls')['controls'][i].addControl('141', new FormControl(''));
          this.forma.get('controls')['controls'][i].addControl('142', new FormControl(''));
          this.forma.get('controls')['controls'][i].addControl('143', new FormControl(''));
        break;

      default:
        this.forma.get('controls')['controls'][i].addControl('numero', new FormControl(''));
        break;

    }
  }


test(){

  console.log(this.forma);
}

  public addRow() {

    

    this.amountRows ++;

        for (let i = this.t.length; i < this.amountRows; i++) {
            this.t.push(this.formBuilder.group({
                concepto: [{ value: '', disabled: true }, Validators.required],
                monto: ['', Validators.required],
                descripcion: [''],
                entidad: ['', Validators.required],
                valores: ['', Validators.required]
            }));
        }
  
        
  }

}
