// Mouhib Saleh 4twin2
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {
  dbData!: User[];
  values!: User[];
  category: String | null = null;
  cat!: String;

  constructor(private activatedroute: ActivatedRoute, private router: Router, private UserService: UserService) {
    // for getting the path param
    this.activatedroute.paramMap.subscribe(result => this.category = result.get('type'));
    // fetching data from database
    this.UserService.getData().subscribe(data => {
      this.dbData = data
      // for loading users once the page loads
      if (this.category == null) { } else {
        this.cat = this.category;
        this.values = this.dbData.filter(user => user.accountCategory.toUpperCase().match(this.cat.toUpperCase()));
      }
    })
  }

  ngOnInit(): void { }
  supp(idUSer: Number, categ: String) {
    /* this.values.forEach((value,index)=>{
      if(value.idCustomer==idUSer) this.values.splice(index,1); 
  }) */
  }
  search(accountCategory: string, bol: boolean) {
    this.values = this.dbData.filter(user => user.accountCategory.toUpperCase().match(accountCategory.toUpperCase()));
  }
}
