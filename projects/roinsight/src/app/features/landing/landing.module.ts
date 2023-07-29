import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ChartsModule} from '../charts/charts.module'

@NgModule({
  declarations: [LandingComponent, OurservicesComponent, MarketingComponent, ContactusComponent],
  imports: [CommonModule, SharedModule, LandingRoutingModule, ChartsModule]
})
export class LandingModule {}
