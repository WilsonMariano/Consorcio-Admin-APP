import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/service.index';
import { UnidadFuncional } from '../../class/class.index';

@Component({
  selector: 'app-nuevo-pago',
  templateUrl: './nuevo-pago.component.html',
  styles: []
})
export class NuevoPagoComponent implements OnInit {

  public uf: UnidadFuncional = null;

  constructor(private _common: CommonService) {}

  ngOnInit() {
  }


  public buscarUF( uf ): void{

    this._common.getOne("uf", uf.toString()).subscribe(

      data => {
        console.log(data);
        this.uf = new UnidadFuncional();
        this.uf.setId(data.id);
      }

    )
  }

}
