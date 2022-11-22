// Mouhib Saleh 4twin2
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  values! : User[];
  category : String|null = null;
  cat! : String;
  
    

    constructor( private activatedroute : ActivatedRoute, private router: Router,private UserService:UserService) { 
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.activatedroute.paramMap.subscribe(result=>this.category=result.get('type'));
       this.values = this.UserService.getAllUsers()
      
      if (this.category == null){}else {
        this.cat = this.category;
        this.values = this.values.filter(user=>user.accountCategory.toUpperCase().match( this.cat.toUpperCase()));
         ;
      }

      
    }





  ngOnInit(): void {
   
  }
  supp(idUSer : Number , categ : String) {
    this.values=this.UserService.deleteUser(idUSer,categ)
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  search(accountCategory:string){ 
   /*  if (accountCategory.length == 0){ this.values.length = 0;}
    else { */
    
    this.values = this.values.filter(user=>user.accountCategory.toUpperCase().match(accountCategory.toUpperCase()));
    /* } */
 }
    
   
  
}
