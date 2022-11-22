import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Products! : Produit[]
  constructor() { }


  getAllProducts(){
    this.Products = [
      { idProduit: 1, code: '127',libelle: "PC", prixUnitaire : 2000, tauxTVA :10},
      { idProduit: 2, code: '128',libelle: "TV", prixUnitaire : 1000, tauxTVA :20},
      { idProduit: 3, code: '128',libelle: "Table", prixUnitaire : 200, tauxTVA :30},
      ]
    return this.Products
  }

}
