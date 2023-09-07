import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Category } from '../services/products.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  /**
   * Store categories
   */
  public categories: Category[] = [];

  /**
   * Id of general category
   */
  @Input()
  public generalCategoryId!: string | number;
  
  /**
   * Name of specific category route
   */
  @Input() public routeName: string | undefined;

  constructor(protected productService: ProductsService,
              protected router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

    /**
   * Get categories and patch to variable
   */
    getCategories(): void {
      // this.productService.getCategoriesbyID(this.generalCategoryId).subscribe((data) => (this.categories = data));
      this.productService.getCategories().subscribe((data) => (this.categories = data));

    }

  /**
   * On select category navigate to specific category
   * @param categoryId category id
   */
  onSelect(categoryId: string) {
    if (categoryId) {
      console.log(categoryId);
      this.router.navigate([this.routeName, categoryId]);
    } else {
      console.error('categoryId is undefined or null');
    }
}

}
