import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { TimelineComponent } from './timeline/timeline.component';
import { SharedModule } from '../shared/shared.module';
import { TestingComponent } from './testing/testing.component';
import { IntroComponent } from './intro/intro.component';
import { PagesComponent } from './pages.component';
import { FooterComponent } from './footer/footer.component';
import { DjdatarenderComponent } from './djdatarender/djdatarender.component';


@NgModule({
  declarations: [
    TimelineComponent,
    TestingComponent,
    IntroComponent,
    PagesComponent,
    FooterComponent,
    DjdatarenderComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
