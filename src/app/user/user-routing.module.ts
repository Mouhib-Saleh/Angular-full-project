import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUserComponent } from './form-user/form-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { MainUserComponent } from './main-user/main-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  
  {path: '', component: MainUserComponent , 
  children:[
    {path: 'category/:type', component: ListUserComponent , 
    children:[
      {path: 'details/:id', component: UserDetailsComponent},  
    ]}, {path: 'ajouter', component: FormUserComponent}             ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
