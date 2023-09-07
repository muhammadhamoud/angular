import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddPropsComponent } from './add-props/add-props.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'add-props',
    component: AddPropsComponent
  },
  {
    path: 'category',
    component: CategoriesComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
