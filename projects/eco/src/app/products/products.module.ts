import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { AddPropsComponent } from './add-props/add-props.component';
import { CategoriesComponent } from './categories/categories.component';
import { SharedModule } from '../shared/shared.module';
// import { CategoryFilterComponent } from './category-filter/category-filter.component';
// import { ProductsGeneralComponent } from './products-general/products-general.component';


@NgModule({
  declarations: [
    ProductComponent,
    AddProductComponent,
    ProductCardComponent,
    AddPropsComponent,
    CategoriesComponent,
    // CategoryFilterComponent,
    // ProductsGeneralComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule, 
    FormsModule,
    ReactiveFormsModule, 
    MaterialModule, 
    SharedModule
  ]
})
export class ProductsModule { }
