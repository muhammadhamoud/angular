import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'todos',
  //   loadChildren: () =>
  //     import('./todos/todos.module').then((m) => m.TodosModule)
  // },
  // {
  //   path: 'property',
  //   loadChildren: () =>
  //     import('./property/property.module').then((m) => m.PropertyModule)
  // },
  {
    path: 'auth',
    loadChildren: () =>
      import('./accounts/accounts.module').then((m) => m.AccountsModule)
  },
  // {
  //   path: 'pages',
  //   loadChildren: () =>
  //     import('./pages/pages.module').then((m) => m.PagesModule)
  // },
  // {
  //   path: 'charts',
  //   loadChildren: () =>
  //     import('./features/charts/charts.module').then((m) => m.ChartsModule)
  // },
  // {
  //   path: 'about',
  //   loadChildren: () =>
  //     import('./features/landing/landing.module').then((m) => m.LandingModule)
  // },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule)
  },
  // {
  //   path: 'features-list',
  //   loadChildren: () =>
  //     import('./features/features-list/features-list.module').then(
  //       (m) => m.FeaturesListModule
  //     )
  // },
  {
    path: 'settings',
    loadChildren: () =>
      import('./features/settings/settings.module').then(
        (m) => m.SettingsModule
      )
  },
  // {
  //   path: 'test',
  //   loadChildren: () =>
  //     import('./testing/testing.module').then(
  //       (m) => m.TestingModule
  //     )
  // },
  // {
  //   path: 'examples',
  //   loadChildren: () =>
  //     import('./features/examples/examples.module').then(
  //       (m) => m.ExamplesModule
  //     )
  // },
  {
    path: '**',
    redirectTo: 'home'
  }
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
export class AppRoutingModule {}
