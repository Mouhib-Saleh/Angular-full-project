import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { AccountsComponent } from './accounts/accounts.component';
import { SliderComponent } from './slider/slider.component';
import { ListUserComponent } from './list-user/list-user.component';
import { MainUserComponent } from './main-user/main-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormUserComponent } from './form-user/form-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AccountsComponent,
    SliderComponent,
    ListUserComponent,
    MainUserComponent,
    UserDetailsComponent,
    FormUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
