import { Component, OnInit } from '@angular/core';
import { invoice } from '../data/factures';
import { Invoice } from '../models/invoice';
@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  list : Invoice[] = invoice.list ;
  constructor() { }

  ngOnInit(): void {
  }

}
