import { Component, Input } from '@angular/core';
import { Product } from '../services/products.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: Product | undefined;

  constructor() {}

  addToCart(id: string) {
    console.log('added to cart')
  }
}
