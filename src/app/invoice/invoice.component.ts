import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { invoice } from '../data/factures';
import { Invoice } from '../models/invoice';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
 id! :string | null;
 list : Invoice[] = invoice.list ;
 facture! : Invoice ;



  constructor( private activatedroute : ActivatedRoute) { 
    this.activatedroute.paramMap.subscribe(result=>this.id=result.get('id'));
    /* this.id=this.activatedroute.snapshot.paramMap.get("id"); */
    this.list.forEach((value,index)=>{
      if(value.idFacture==Number(this.id)) {
        this.facture = value;

      }
  });

  }

  ngOnInit(): void {
  }

}
