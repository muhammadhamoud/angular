import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ROI-general-categories-all',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './general-categories-all.component.html',
  styleUrls: ['./general-categories-all.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralCategoriesAllComponent {

}
