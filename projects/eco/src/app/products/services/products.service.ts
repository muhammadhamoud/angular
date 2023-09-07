import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Category } from './products.model'; // Import the Product interface
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // TODO Replace with your API base URL
  private AUTH_API = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Fetch all products
  getProducts(): Observable<Product[]> {
    const url = `${this.AUTH_API}/products`;
    return this.http.get<Product[]>(url);
  }

  // Fetch a single product by ID
  getProductById(id: string): Observable<Product> {
    const url = `${this.AUTH_API}/products/${id}`;
    return this.http.get<Product>(url);
  }

  // Create a new product
  createProduct(product: Product): Observable<Product> {
    const url = `${this.AUTH_API}/products`;
    return this.http.post<Product>(url, product);
  }

  // Update a product
  updateProduct(id: string, product: Product): Observable<Product> {
    const url = `${this.AUTH_API}/products/${id}`;
    return this.http.put<Product>(url, product);
  }

  // Delete a product
  deleteProduct(id: string): Observable<Product> {
    const url = `${this.AUTH_API}/products/${id}`;
    return this.http.delete<Product>(url);
  }

  getCategories(): Observable<Category[]> {
    const url = `${this.AUTH_API}/category`;
    return this.http.get<Category[]>(url);
  }

  getCategoriesbyID(generalCategoryId: string | number): Observable<Category[]> {
    const url = `${this.AUTH_API}/category/${generalCategoryId}`;
    return this.http.get<Category[]>(url);
  }

  addTag(tagForm: FormGroup, categoryId: string) {
    // this.connector.addTag(tagForm, categoryId);
  }

  /**
   * Add new attribute to database
   *
   * @param {FormGroup} attributeForm  form of attribute
   * @param {string} categoryId id of category
   */
  // addAttribute(attributeForm: FormGroup, categoryId: string) {
  //   // this.connector.addAttribute(attributeForm, categoryId);
  // }

  // addCategory(categoryForm: FormGroup) {
  //   // this.connector.addCategory(categoryForm);
  //   const url = `${this.AUTH_API}/category`;
  //   this.http.post<Category>(url, categoryForm.value);
  // }

  // // Create a new category
  // createCategory(category: Category): Observable<Category> {
  //   const url = `${this.AUTH_API}/category`;
  //   return this.http.post<Category>(url, category);
  // }



  /**
   * Add category using HTTP POST request
   * 
   * @param {FormGroup} categoryForm  form of category
   * @returns {Observable<Category>} Observable with the response from the API
   */
  addCategory(categoryForm: FormGroup): Observable<Category>{
    const url = `${this.AUTH_API}/category`;
    const category: Category = categoryForm.value;
    console.log('Added ', categoryForm.value)
    return this.http.post<Category>(url, category);
  }


//   /**
//  * Add new attribute to database
//  * 
//  * @param {FormGroup} attributeForm  form of attribute
//  * @param {string} categoryId id of category
//  */
// addAttribute(attributeForm : FormGroup, categoryId: string){
//   this.database.ref('attributes/').push(attributeForm.value).then(ref => {
//     this.database.ref().child('category/' + categoryId +'/attrs').once('value').then(data => {
//         if(data.val()){
//           console.log(data);
//           if(data.val()[0] == '1234' && data.val()[1] == '1234'){
//             let attrs = ['1234'];
//             attrs.push(ref['key']);
//             console.log(attrs);
//             this.database.ref().child('category/' + categoryId + '/attrs').set(attrs);
//           } else {
//             let attrs = [].concat(...data.val());
//             console.log(attrs);
//             attrs.push(ref['key']);
//             console.log(attrs);
//             this.database.ref().child('category/' + categoryId + '/attrs').set(attrs);
//           }
//         }
//     });
//   });
// }



  // Update a category
  addAttribute(id: string, category: Category): Observable<Category> {
    const url = `${this.AUTH_API}/category/${id}`;
    return this.http.put<Category>(url, category);
  }

  /**
   * Add general category to database
   *
   * @param {FormGroup} generalCategoryForm form of general category
   */
  addGeneralCategory(generalCategoryForm: FormGroup) {
    // this.connector.addGeneralCategory(generalCategoryForm);
  }
}
