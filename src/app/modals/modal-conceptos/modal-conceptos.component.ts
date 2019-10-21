import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../../services/http/common.service';

@Component({
  selector: 'app-modal-conceptos',
  templateUrl: './modal-conceptos.component.html',
  styleUrls: ['./modal-conceptos.component.css']
})
export class ModalConceptosComponent implements OnInit {

  @Output() successModal = new EventEmitter();

  public arrConceptos = [];

  constructor(private _common: CommonService) { }

  ngOnInit() {

    this._common.getAll('conceptosgastos').subscribe(
      data => {
        this.arrConceptos = data;
        console.log(data);
      }
    );
  }

  public selectItem( index: number ) : void {

    // console.log(this.arrConceptos[index]);
    this.successModal.emit(this.arrConceptos[index]);
  }



}
