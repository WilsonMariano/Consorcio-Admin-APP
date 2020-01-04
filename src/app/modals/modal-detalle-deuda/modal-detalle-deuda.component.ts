import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-detalle-deuda',
  templateUrl: './modal-detalle-deuda.component.html',
  styles: []
})
export class ModalDetalleDeudaComponent implements OnInit {

  @Input() deuda;

  constructor() { }

  ngOnInit() {
  }

}
