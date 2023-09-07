import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from 'projects/main/src/app/ecommerce/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
