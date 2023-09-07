import { Component, OnInit } from '@angular/core';
import { Product } from '../services/products.model'; // Import the Product interface
import { ConnectorService } from '../../management/services/connector.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  productForm: FormGroup = new FormGroup({});
  initializeForm: boolean = false;
  selectedProduct: Product | null = null;
  originalProduct: Product | null = null;

  displayedColumns: string[] = [
    'name',
    // 'description',
    'price',
    'discountedPrice',
    'imageUrl',
    'brand',
    // 'category',
    // 'tags',
    // 'ratings',
    // 'reviews',
    'stockQuantity',
    // 'variations',
    'isFeatured',
    'isNewArrival',
    'isOnSale',
    // 'createdAt',
    // 'updatedAt',
    'actions',
  ];

  constructor(private connector: ConnectorService) {}

  ngOnInit(): void {
    this.getProducts();
    // this.initializeProductForm();
  }

  getProducts(): void {
    this.connector
      .database()
      .ref('/products')
      .read()
      .subscribe({
        next: (data: any) => {
          this.products = data;
          console.log('Data retrieved successfully');
        },
        error: (error: any) => console.error('Error retrieving data:', error),
        complete: () => console.log('Complete'),
      });
  }

  getColumnLabel(column: string): string {
    // Convert the column name to title case
    return column.replace(/([A-Z])/g, ' $1').trim();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  editProduct(product: Product): void {
    this.selectedProduct = product;
    this.originalProduct = { ...product };
  }

  saveProduct(product: Product): void {
    // Create a copy of the product to store the original data
    this.originalProduct = { ...product };
    // Send the updated data to the server
    this.connector.database().ref(`/products/${product.id}`).update(product);
    // Clear the selected product and original product data
    this.originalProduct = null;
  }

  cancelEdit(): void {
    // Restore the original data and clear the selection
    if (this.selectedProduct && this.originalProduct) {
      Object.assign(this.selectedProduct, this.originalProduct);
    }
    this.selectedProduct = null;
    // this.originalProduct = null;
  }

  deleteProduct(product: Product): void {
    // Store the original products list
    const originalProducts = [...this.products];

    // Update the UI immediately by removing the deleted product
    this.products = this.products.filter((p) => p.id !== product.id);

    // Delete the product from the server
    this.connector
      .database()
      .ref(`/products/${product.id}`)
      .remove()
      .subscribe({
        next: (response: any) => {
          console.log('Product deleted successfully:', response);
        },
        error: (error: any) => {
          console.error('Error deleting product:', error);
          // Restore the original products list in case of an error
          this.products = originalProducts;
        },
        complete: () => {
          console.log('Complete');
          // Clear the selected product
          this.selectedProduct = null;
        },
      });
  }

  initializeProductForm(): void {
    // this.initializeForm = true;
    this.initializeForm = !this.initializeForm;
    const formControls: { [key: string]: FormControl } = {};
    this.displayedColumns.forEach((column) => {
      formControls[column] = new FormControl('');
    });
    this.productForm = new FormGroup(formControls);
  }

  createProduct(): void {
    const newProduct: Product = this.productForm.value;
    if (this.productForm.valid) {
      // Send the new product data to the server
      this.connector
        .database()
        .ref('/products')
        .create(newProduct)
        .subscribe({
          next: (response: any) => {
            console.log('Product created successfully:', response);
            // Add the new product to the UI immediately
            this.products.push(newProduct);

            // Fetch the updated list of products
            this.getProducts();

            // Reset the form
            this.productForm.reset();
            this.initializeForm = false;
          },
          error: (error: any) =>
            console.error('Error creating product:', error),
          complete: () => {
            console.log('Complete');
          },
        });
    }
  }

  getColumnControl(element: Product, column: string): FormControl {
    return (this.productForm.get(element.id.toString()) as FormGroup).get(
      column
    ) as FormControl;
  }
  
  quantity: number = 0;
  setQuantity(no: number) {
    this.quantity = no;
  }

}
