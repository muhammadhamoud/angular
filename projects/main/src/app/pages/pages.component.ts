import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ROI-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagesComponent {
}
