import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Router } from '@angular/router';
import { ProductService } from '@nodeart/productservice';
import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent OnInit {

  /**
   * Store categories
   */
  public categories = [];

  /**
   * Id of general category
   */
  @Input() public generalCategoryId: string | number;
  
  /**
   * Name of specific category route
   */
  @Input() public routeName: string;

  constructor(protected productService: ProductService,
              protected router: Router) { }

  ngOnInit() {
    this.getCategories();
  }

  /**
   * Get categories and patch to variable
   */
  getCategories(): void {
    this.productService.getCategories(this.generalCategoryId).subscribe(categories => {
      if(categories.val()){
        this.categories = categories.val().map(category => {
          category['_source']['id'] = category['_id'];
          return category['_source'];
        });
      }
    });
  }

  /**
   * On select category navigate to specific category
   * @param categoryId category id
   */
  onSelect(categoryId: string){
    this.router.navigate([this.routeName, categoryId]);
  }

}
