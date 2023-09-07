import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./accounts/accounts.module').then(
        (m) => m.AccountsModule
      )
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then(
        (m) => m.ProductsModule
      )
  },
  {
    path: 'connectors',
    loadChildren: () =>
      import('./management/management.module').then(
        (m) => m.ManagementModule
      )
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
