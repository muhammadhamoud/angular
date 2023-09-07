import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
// import { TimelineComponent } from './timeline/timeline.component';
import { SharedModule } from '../shared/shared.module';
import { IntroComponent } from './intro/intro.component';
import { PagesComponent } from './pages.component';
import { MarketingComponent } from './marketing/marketing.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoadmarkdownModule } from '../shared/load-contents.module';
import { AboutComponent } from './about/about.component';
import { TestingComponent } from './testing/testing.component';
import { Carousel, CarouselItem } from '../shared/carousel/carousel';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { LegalComponent } from './legal/legal.component';
import { ProductsComponent } from './products/products.component';
import { HerosComponent } from './heros/heros.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    IntroComponent,
    PagesComponent,
    MarketingComponent,
    OurservicesComponent,
    ContactusComponent,
    AboutComponent,
    TestingComponent,
    AboutusComponent,
    // FooterComponent,
    FeaturesComponent,
    LegalComponent,
    ProductsComponent,
    HerosComponent,
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    LoadmarkdownModule,
    Carousel,
    CarouselItem,
  ]
})
export class PagesModule { }
