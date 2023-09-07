import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Product, Category } from '../services/products.model';
import { Item } from 'projects/main_ng/src/content/examples/built-in-directives/src/app/item';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;
  categories: Category[] = [];
  addedProduct: Product | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService
  ) {
    this.addProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      discountedPrice: [''],
      imageUrl: [''],
      brand: [''],
      category: [''],
      tags: [[]],
      ratings: [0],
      reviews: [[]],
      stockQuantity: [0],
      variations: [[]],
      isFeatured: [false],
      isNewArrival: [false],
      isOnSale: [false],
      createdAt: [new Date()],
      updatedAt: [new Date()]
    });
  }

  ngOnInit(): void {
    this.getCategories()
  }

  onSubmit(): void {
    if (this.addProductForm.valid) {
      const newProduct: Product = this.addProductForm.value;
      this.productService.createProduct(newProduct).subscribe((product) => {
        this.addedProduct = product; // Store the added product
        console.log('New product added:', product);
        // Clear the form after adding the product
        this.addProductForm.reset();
      });
    }
  }

  /**
   * Get categories
   */
  // getCategories(){
  //   this.productService.getCategories().subscribe( category => {
  //     if(category) {
  //       this.categories = category.map(item => {
  //         // item['name']= item['id'];
  //         console.log(item)
  //         return item;
  //       });
  //     }
  //   });
  // }

  getCategories(){
  this.productService
  .getCategories()
  .subscribe((category) => 
  (this.categories = category)
  );
}

}
