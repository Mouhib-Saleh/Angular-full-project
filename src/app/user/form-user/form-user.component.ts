import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
 

productform = new FormsModule();

model : User = {
  idCustomer: 7,
  firstName: "George",
  lastName: "Clooney",
  birthDate: "1999-06-30",
  accountCategory: "Customer",
  email: "marlon@gmail.com",
  password: "testAZ78888",
  picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
  profession: "Software Engineer"
  };

submitted = false;

onSubmit() { this.submitted = true;


this.UserService.addUser(this.model)
console.log(this.model)
}

  constructor( private router: Router, private UserService: UserService) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

   
  
  }
  newUser() {
   
  
   console.log(this.model);
  }
  ngOnInit(): void {
  }

}
