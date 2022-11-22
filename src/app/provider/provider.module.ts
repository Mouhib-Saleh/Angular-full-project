import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { MainProviderComponent } from './main-provider/main-provider.component';


@NgModule({
  declarations: [MainProviderComponent],
  imports: [
    CommonModule,
    ProviderRoutingModule
  ]
})
export class ProviderModule { }
