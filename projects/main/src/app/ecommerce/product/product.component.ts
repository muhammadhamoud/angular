import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ROI-product',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      product works!
    </div>
  `,
  styles: [
    
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

}
