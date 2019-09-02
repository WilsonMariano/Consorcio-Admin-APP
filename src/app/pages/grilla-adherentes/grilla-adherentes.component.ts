import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/service.index';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-grilla-adherentes',
  templateUrl: './grilla-adherentes.component.html',
  styles: []
})
export class GrillaAdherentesComponent implements OnInit {

  public arrAdherentes: Array<any> = [];
  public rowsWithPage = 20;
  public page = 1;

  constructor(private _commonService: CommonService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.getAdherentes();
  }

  public getAdherentes() {
    
    this._commonService.getWithPaged('adherentes', this.rowsWithPage, this.page-1).subscribe(
      data => {
        this.arrAdherentes = data.data;
        console.log(data);
        this.spinner.hide();
      }
    );
  }

}
