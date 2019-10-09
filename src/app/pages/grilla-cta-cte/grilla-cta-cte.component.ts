import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grilla-cta-cte',
  templateUrl: './grilla-cta-cte.component.html'
})
export class GrillaCtaCteComponent implements OnInit {

  // SEE grilla.component

  private arrControls = ['Fecha', 'Descrpicion', 'Monto', 'Saldo'];


  private arrAttr = [
    { 'attr': 'fecha',          'type': 'Date'  },
    { 'attr': 'descripcion',    'type': 'String'  },
    { 'attr': 'monto',          'type': 'Currency'  },
    { 'attr': 'saldo',          'type': 'Number'  },
  ];


  private filterParams = {
    'col': 'idUf',
    'txt': null
  }


  public options = {
    'entity': 'CtasCtes',
    'arrAttr': this.arrAttr,
    'arrControls': this.arrControls,
    'filterParams': this.filterParams
  }


  constructor(private activateRoute: ActivatedRoute) { }


  ngOnInit() {
    
    // Recibo el id de la cta. cte. por url y lo asigno al objeto de filtros
    this.activateRoute.params.subscribe(
      data => {

        if(data['id']) 
          this.filterParams.txt = data['id'];
          
    });
  }

}
