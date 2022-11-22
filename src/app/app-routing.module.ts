import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


const routes: Routes = [ 
{path: '', component: HomeComponent},
{path: 'main', component: MainInvoiceComponent},
{path: 'invoice/:id/:bol', component: InvoiceComponent},
{path: 'product', loadChildren:()=>
import ('./product/product.module').then(m=>m.ProductModule)},
{path: 'provider', loadChildren:()=>
import ('./provider/provider.module').then(m=>m.ProviderModule)},
{path: 'user', loadChildren:()=>
import ('./user/user.module').then(m=>m.UserModule)},
{path: '**', pathMatch: 'full', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
