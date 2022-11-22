import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProviderComponent } from './main-provider/main-provider.component';

const routes: Routes = [{path:"", component:MainProviderComponent} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
