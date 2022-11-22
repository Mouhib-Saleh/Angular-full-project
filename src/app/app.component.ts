//Mouhib Saleh
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workshop1';
  first: any;
  constructor() { 
     this.first = ['Angular','vue'];
   
    
  }
}
