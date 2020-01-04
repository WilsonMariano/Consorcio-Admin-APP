import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/service.index';
import { UnidadFuncional } from '../../class/class.index';
import { Manzana } from '../../class/class.index';

@Component({
  selector: 'app-buscar-uf-pago',
  templateUrl: './buscar-uf-pago.component.html',
  styleUrls: ['buscar-uf-pago.component.css']
})
export class BuscarUfPagoComponent implements OnInit {

  public arrManzanas: Manzana[];
  public ufBuscada: UnidadFuncional = null;

  constructor(private _common: CommonService) { }

  ngOnInit() {

    this.getManzanas();

    this.ufBuscada = new UnidadFuncional();
  }

  public getManzanas(): void {

    this._common.getAll('manzanas').subscribe(
      data => this.arrManzanas = data
    );
  }

}
