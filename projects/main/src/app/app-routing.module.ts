import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then(
        (m) => m.PagesModule
      )
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./accounts/accounts.module').then(
        (m) => m.AccountsModule
      )
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./blog/blog.module').then(
        (m) => m.BlogModule
      )
  },
  // {
  //   path: 'settings',
  //   loadChildren: () =>
  //     import('./features/settings/settings.module').then(
  //       (m) => m.SettingsModule
  //     )
  // },

  {
    path: '**',
    redirectTo: ''
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
