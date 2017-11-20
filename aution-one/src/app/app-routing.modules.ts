import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './common/home/home.component';
import {ProductDeatailComponent} from './common/product-deatail/product-deatail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'product/:productId', component: ProductDeatailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

