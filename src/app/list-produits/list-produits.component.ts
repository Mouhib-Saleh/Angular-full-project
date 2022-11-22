import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css'],
  
})
export class ListProduitsComponent implements OnInit {
  list: Produit[];
  mod!: Number;
  values!: Produit[];
  productform = new FormGroup({
    idProduit: new FormControl(''),
    code: new FormControl(''),
    libelle: new FormControl(''),
    prixUnitaire: new FormControl(''),
    tauxTVA: new FormControl(''),
  })
  newProduit!:Produit[]
  listProduits!: Produit[];
  constructor(private produitService:ProductService) {
    this.list = [
      { idProduit: 1, code: "P147852P", libelle: "Produit1", prixUnitaire: 12.5, tauxTVA: 0.02 },
      { idProduit: 2, code: "P147552P", libelle: "Produit1", prixUnitaire: 30, tauxTVA: 0.1980 },
      { idProduit: 3, code: "D14785CC", libelle: "Produit1", prixUnitaire: 20, tauxTVA: 0.1980 },
      { idProduit: 4, code: "E147852P", libelle: "Produit1", prixUnitaire: 50, tauxTVA: 0.1980 },
      { idProduit: 5, code: "F147852P", libelle: "Produit1", prixUnitaire: 70, tauxTVA: 0.02 },
    ];
    this.values = this.list;
  }

  ngOnInit(): void {
  }
  ajuster(idProduit: Number) {

    this.list.forEach((value, index) => {
      if (value.idProduit == idProduit) {
        this.list[index].tauxTVA = 0.02;
        this.mod = idProduit;
      };
    });

  }

  search(prod: string) {

    this.values = this.list.filter(produit => produit.code.toUpperCase().match(prod.toUpperCase()));

  }

  AddProd(){
    this.values.push(this.productform.value)
    
    console.warn(this.productform.value);
    this.productform.reset();

  }

}
