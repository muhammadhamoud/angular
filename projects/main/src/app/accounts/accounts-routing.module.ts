import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AccountsComponent,
  //   data: { title: 'ROI.menu.accounts' }
  // },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'ROI.menu.accounts' }
  }
  ,
  {
    path: 'singnup',
    component: SignupComponent,
    data: { title: 'ROI.menu.accounts' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
