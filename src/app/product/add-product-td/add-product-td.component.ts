import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from 'src/app/models/produit';
@Component({
  selector: 'app-add-product-td',
  templateUrl: './add-product-td.component.html',
  styleUrls: ['./add-product-td.component.css']
  
})
export class AddProductTDComponent implements OnInit {
  model : Produit =  { idProduit: 1, code: "P147852", libelle: "Produit1",
   prixUnitaire: 12, tauxTVA: 0.02 };
  cats : String[] = ['Electromenager',
    'Alimentaire' , 'Quincaillerie'];
  submitted = false;
  
  onSubmit() { this.submitted = true;
  
  console.log("this.model")
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
