import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {

  /**
   * Store categories 
   */
  @Input() categories = [];

  /**
   * Emit new value when category updates
   */
  @Output() categoryUpdated = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.categories);
  }

  /**
   * Emit new category id when user update a category in select box
   * @param newCategoryId store category id 
   */
  updated(newCategoryId: string){
    this.categoryUpdated.emit(newCategoryId);
  }

}