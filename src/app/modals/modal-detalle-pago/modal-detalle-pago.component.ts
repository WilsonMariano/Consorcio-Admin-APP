import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-detalle-pago',
  templateUrl: './modal-detalle-pago.component.html',
  styles: []
})
export class ModalDetallePagoComponent implements OnInit {

  @Input() inputArrPagos;

  constructor() { }

  ngOnInit() {
  }

  public pay(): void {

    console.log(this.inputArrPagos);
  }

}
