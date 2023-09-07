import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    ErrorComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '404', component: NotFoundComponent },
      { path: 'error', component: ErrorComponent },
      { path: '**', redirectTo: '/404' }
    ]),
    SharedModule,
    MaterialModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
