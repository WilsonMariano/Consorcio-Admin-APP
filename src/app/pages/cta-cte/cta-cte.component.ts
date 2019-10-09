import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cta-cte',
  templateUrl: './cta-cte.component.html'
})
export class CtaCteComponent implements OnInit {

  private arrControls = ['Fecha', 'Descrpicion', 'Monto', 'Saldo'];


  private arrAttr = [
    { 'attr': 'fecha',          'type': 'Date'  },
    { 'attr': 'descripcion',    'type': 'String'  },
    { 'attr': 'monto',          'type': 'Number'  },
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

    this.activateRoute.params.subscribe(
      data => {

        if(data['id']) 
          this.filterParams.txt = data['id'];
          
    });
  }



}
