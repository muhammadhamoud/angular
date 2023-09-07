import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeatureItems } from '../data/features.data';
import { OurServiceItems } from '../data/ourservices.data';
import { ProductItems } from '../data/products.data';

@Component({
  selector: 'ROI-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomepageComponent {
  constructor (
    public featureitems: FeatureItems,
    public ourservicesitems: OurServiceItems,
    public productitems: ProductItems
  ) {}
}
