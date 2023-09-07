import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ProductComponent
  ]
})
export class PagesModule { }
