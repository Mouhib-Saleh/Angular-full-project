import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { MainProductComponent } from './main-product/main-product.component';
import { AddProductTDComponent } from './add-product-td/add-product-td.component';


@NgModule({
  declarations: [MainProductComponent, AddProductTDComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ]
})
export class ProductModule { }
