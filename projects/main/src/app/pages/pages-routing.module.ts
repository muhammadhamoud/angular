import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FeaturesComponent } from './features/features.component';
import { TestingComponent } from './testing/testing.component';
import { LegalComponent } from './legal/legal.component';
import { ProductsComponent } from './products/products.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    data: { title: 'ROI.menu.intro' }
  },
  {
    path: 'about',
    component: AboutusComponent,
    data: { title: 'ROI.menu.about' }
  },
  {
    path: 'contactus',
    component: ContactusComponent,
    data: { title: 'ROI.menu.contactus' }
  },
  {
    path: 'products',
    component: ProductsComponent,
    data: { title: 'ROI.menu.products' }
  },
  {
    path: 'features',
    component: FeaturesComponent,
    data: { title: 'ROI.menu.features' }
  },
  {
    path: 'link',
    component: FeaturesComponent,
    data: { title: 'ROI.menu.features' }
  },
  {
    path: 'privacy',
    component: LegalComponent,
    data: { title: 'ROI.menu.privacy' }
  },
  {
    path: 'test',
    component: TestingComponent,
    data: { title: 'ROI.menu.features' }
  },
  
  // Dynamic Routers
  { 
    path: 'legal/:file_name', 
    component: LegalComponent ,
    // data: { title: 'ROI.menu.features' }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
