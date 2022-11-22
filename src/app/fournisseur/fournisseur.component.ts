import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  idFournisseur: number;
  code: String;
  libelle: String;
  hide: boolean;

  constructor() {
    this.idFournisseur = 105;
    this.code = 'A104B89';
    this.libelle = 'MyTeck';
    this.hide = false;
  }
  ngOnInit(): void {
  }

  cacher() {
    if (this.hide) {
      this.hide = false;

    }
    else
      this.hide = true
    console.log(this.hide)

  }

}
