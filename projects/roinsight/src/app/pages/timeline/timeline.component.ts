import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from 'src/app/core/core.module';
import { Marketing, marketing } from 'src/app/data/marketing.data';

@Component({
  selector: 'ROI-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  marketing: Marketing[] = marketing;

}
