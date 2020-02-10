import { Component, OnInit } from '@angular/core';
import { CommonService, UfService } from 'src/app/services/service.index';
import { UnidadFuncional } from '../../class/class.index';
import { Manzana } from '../../class/class.index';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-buscar-uf-pago',
  templateUrl: './buscar-uf-pago.component.html',
  styleUrls: ['buscar-uf-pago.component.css']
})
export class BuscarUfPagoComponent implements OnInit {

  public arrManzanas: Manzana[];
  public ufBuscada: any = null;
  public forma: FormGroup;

  constructor(private _common: CommonService, private _uf: UfService, private fb: FormBuilder) { }

  ngOnInit() {

    this.forma = this.fb.group({
      'nroUF': new FormControl('', Validators.required),
      'idManzana': new FormControl('', Validators.required)
    });

    this.getManzanas();
  }

  public getManzanas(): void {

    this._common.getAll('manzanas').subscribe(
      data => this.arrManzanas = data
    );
  }

  public onSubmit(): void {

    console.log(this.forma);

    this._uf.getOneByNro(this.forma.get('idManzana').value, this.forma.get('nroUF').value).subscribe(
      data => {
        this._common.getOne('vwUF', data.id).subscribe(
          uf => {this.ufBuscada = uf; console.log(uf)}
        );
      },
      err => this.ufBuscada = ""
    );
  }

}
