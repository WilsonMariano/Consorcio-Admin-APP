import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-detalle-grilla',
  templateUrl: './modal-detalle-grilla.component.html',
  styles: []
})
export class ModalDetalleGrillaComponent implements OnInit {

  @Input() input = [];

  constructor() { }

  ngOnInit() {
  }

}
