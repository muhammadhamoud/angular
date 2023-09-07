import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './pages/product/product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'product/:id', component: ProductComponent },
      { path: '', component: ProductListComponent }
    ]),
    LayoutModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    SharedModule
  ]
})
export class ProductsModule { }
