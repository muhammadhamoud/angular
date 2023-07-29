import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../core/core.module';

@Component({
  selector: 'ROI-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutusComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

}
