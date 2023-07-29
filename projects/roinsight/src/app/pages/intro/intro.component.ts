import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from 'src/app/core/core.module';

@Component({
  selector: 'ROI-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  pandas = 'assets/icons/pandas_mark.svg'
  tableau = 'assets/icons/tableau_mark.png'
  excel = 'assets/icons/excel.png'
  powerbi = 'assets/icons/powerbi.png'
  python = 'assets/icons/python.png'
  r = 'assets/icons/r.png'
  angular = 'assets/icons/angular.png'
  hero = 'assets/tableau/tableau_2018.2_auto_mobile_layout_0.jpg'
  image1 = 'assets/tableau/tableau_2018.2_auto_mobile_layout_0.jpg'


}
