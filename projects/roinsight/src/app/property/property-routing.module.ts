import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyComponent } from './property/property.component';
import { AddPropertyComponent } from './add-property/add-property.component';

const routes: Routes = [
  {
    path: '',
    component: PropertyComponent,
    data: { title: 'ROI.menu.intro' }
  },
  {
    path: 'add',
    component: AddPropertyComponent,
    data: { title: 'ROI.menu.intro' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
