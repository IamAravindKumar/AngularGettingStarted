import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-detail.guard';


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent}
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }