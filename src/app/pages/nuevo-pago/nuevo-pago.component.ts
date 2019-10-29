import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/service.index';
import { UnidadFuncional } from '../../class/class.index';
import { FxGlobalsService } from '../../services/fxGlobals/fxGlobals.service';
import { ActivatedRoute } from '@angular/router';

declare var $;

@Component({
  selector: 'app-nuevo-pago',
  templateUrl: './nuevo-pago.component.html',
  styleUrls: ['./nuevo-pago.component.css']
})
export class NuevoPagoComponent implements OnInit {

  public uf: UnidadFuncional = null;

  constructor(private _common: CommonService, private _fxGlobals: FxGlobalsService, private activateRoute: ActivatedRoute) {}

  ngOnInit() {

    this.activateRoute.params.subscribe(
      data => {

        if(data['id'] != 'nuevo') 
          this.buscarUF(data['id']);
    });
  }
  


  public buscarUF( uf ): void{

    this._common.getOne("uf", uf.toString()).subscribe(

      data => {
        console.log(data);
        this.uf = new UnidadFuncional();
        this.uf.setId(data.id);
        this.uf.setIdAdherente(data.idAdherente);
      },
      (err) => {

        this._fxGlobals.showAlert("Error", "La unidad funcional ingresa no existe", "error");
        this.uf = null;
      }

    )
  }

}
