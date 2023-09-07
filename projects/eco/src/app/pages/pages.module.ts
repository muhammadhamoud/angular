import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CookiePopupComponent } from './cookie-popup/cookie-popup.component';
import { SupportComponent } from './support/support.component';
import { CarouselComponent } from './carousel/carousel.component';

import { ThemePicker } from '../core/theme-picker/theme-picker';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CookiePopupComponent,
    SupportComponent,
    CarouselComponent,
    ThemePicker
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
