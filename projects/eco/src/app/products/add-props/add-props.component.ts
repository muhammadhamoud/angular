import { subscribeOn } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Category, Child } from '../services/products.model';

@Component({
  selector: 'app-add-props',
  templateUrl: './add-props.component.html',
  styleUrls: ['./add-props.component.scss'],
})
export class AddPropsComponent implements OnInit {
  propOptions = ['', 'category', 'attribute', 'tag'];
  categoryForm: FormGroup;
  attributeForm: FormGroup;
  tagForm: FormGroup;
  selectValue = '';
  // categories = [];
  categories: Category[] = [];
  category: Category[] | undefined;
  addedChilds: Child[] = []; // Initialize the array in your component

  constructor(
    protected fb: FormBuilder,
    protected productService: ProductsService
  ) {
    this.categoryForm = fb.group({
      name: ['', Validators.required],
      tags: [],
      attrs: [],
      parentCategory: '1',
    });
    this.attributeForm = fb.group({
      name: ['', Validators.required],
      desc: '',
      childs: [],
    });
    this.tagForm = fb.group({
      name: ['', Validators.required],
      desc: '',
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  /**
   * On change selected category to add clean forms
   */
  change() {
    this.categoryForm.patchValue({
      name: '',
      tags: [],
      attrs: [],
    });
    this.attributeForm.patchValue({
      name: '',
      desc: '',
      childs: [],
    });
  }

  //   /**
  //  * Add new category
  //  */
  //   addCategory(){
  //     if (this.categoryForm.valid) {
  //     this.categoryForm.patchValue({
  //       tags: [''],
  //       attrs: ['']
  //     });
  //     const newCategory: Category = this.categoryForm.value;
  //     this.productService.createCategory(newCategory).subscribe((data) => {
  //       // console.log('New product added:', data);
  //       this.categoryForm.reset();
  //     });
  //   }

  //     // console.log(this.categoryForm.value)
  //     // this.productService.addCategory(this.categoryForm);
  //   }

  /**
   * Add new category
   */
  addCategory() {
    this.categoryForm.patchValue({
      tags: ['1234', '1234'],
      attrs: ['1234', '1234'],
    });
    this.productService.addCategory(this.categoryForm).subscribe(
      (response) => {
        console.log('Category added successfully:', response);
        // Additional handling if needed
        this.categoryForm.reset();
      },
      (error) => {
        console.error('Error adding category:', error);
        // Handle the error appropriately
      }
    );
  }


  // /**
  //  * Add new attribute to category by categoryId
  //  * @param categoryId category id
  //  */
  // addAttribute(categoryId: string){
  //   this.attributeForm.patchValue({
  //     childs: this.addedChilds
  //   });
  //   this.productService.addAttribute(this.attributeForm, categoryId);
  // }



  /**
   * Add new attribute to category by categoryId
   * @param categoryId category id
   */
  addAttribute(categoryId: string) {
    this.attributeForm.patchValue({
      childs: this.addedChilds,
    });

    this.productService
      .getCategoriesbyID(categoryId)
      .subscribe((data) => (this.category = data));
    console.log(this.category);

    const newCategory: Category = this.attributeForm.value;
    console.log(newCategory);
    this.productService.addAttribute(categoryId, newCategory);
    // console.log(categoryId, newCategory)
  }

  addTag(categoryId: string) {
    this.productService.addTag(this.tagForm, categoryId);
  }

  getCategories() {
    this.productService
      .getCategories()
      .subscribe((category) => (this.categories = category));
  }

  /**
   * Add new child to new properties
   */
  addChild() {
    this.addedChilds.push({
      key: '',
      name: '',
    });
  }

  /**
   * Remove child form addedChilds array
   * @param index index in addedChilds array
   */
  removeChild(index: number) {
    this.addedChilds.splice(index, 1);
  }
}
