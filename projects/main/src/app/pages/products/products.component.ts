import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
// import { ProductItems, PRODUCT } from '../data/products.data';
import {
  selectSettingsLanguage,
  AppState,
  ROUTE_ANIMATIONS_ELEMENTS
} from '../../core/core.module';

import { ProductItem, ProductItems } from '../data/products.data';

@Component({
  selector: 'ROI-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  products: ProductItem[] | undefined;
  language$: Observable<string> | undefined;
  constructor(private store: Store<AppState>, private productitems: ProductItems) {}
  ngOnInit(): void {
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.products = this.productitems.getAllItems()
    }
}
