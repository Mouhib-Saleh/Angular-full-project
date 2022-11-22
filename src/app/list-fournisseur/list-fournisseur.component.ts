// Mouhib Saleh 4twin2
import { Component, OnInit } from '@angular/core';
import {Fournisseur} from '../models/fournisseur';
@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {
  list : Fournisseur[] = [
    {idFournisseur:1,code:"1ABC4522",libelle:"hp"},
    {idFournisseur:2,code:"2ABC4522",libelle:"dell"},
    {idFournisseur:3,code:"3ABC4522",libelle:"lenovo"},
    {idFournisseur:400,code:"40ABC452",libelle:"asus"}
    ] ;
  constructor() {
    console.log(this.list)
   }

  ngOnInit(): void {
  }
  
  supp(idFournisseur : Number) {
    this.list.forEach((value,index)=>{
      if(value.idFournisseur==idFournisseur) this.list.splice(index,1);
  });
  }
}
