import { Routes } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
          import('./accounts/accounts.module').then(
            (m) => m.AccountsModule
          )
      },

      {
        path: 'login',
        component: LoginComponent
      },



    // {
    //     path: 'product',
    //     loadChildren: () =>
    //       import('./pages/pages.module').then(
    //         (m) => m.PagesModule
    //       )
    //   },
];
