export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  imageUrl: string;
  brand: string;
  category: Category[];
  tags: ProductTag[];
  ratings: number;
  reviews: Review[];
  stockQuantity: number;
  variations: ProductVariation[];
  isFeatured: boolean;
  isNewArrival: boolean;
  isOnSale: boolean;
  createdAt: Date;
  updatedAt: Date;
  actions?: any; // Add this property
}

export interface Review {
  id: string;
  username: string;
  rating: number;
  reviewText: string;
  date: Date;
}

export interface ProductVariation {
  id: string;
  name: string;
  price: number;
  stockQuantity: number;
  imageUrl: string;
  attributes: ProductAttribute[];
}

export interface ProductAttribute {
  name: string;
  value: string;
}

export interface ProductTag {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  tags: ProductTag[];
  attrs: ProductAttribute[];

}

export interface Child {
  key: string;
  name: string;
}


// Example usage:
// const exampleProduct: Product = {
//   id: 'product-123',
//   name: 'Example Product',
//   description: 'This is an example product description.',
//   price: 99.99,
//   discountedPrice: 79.99,
//   imageUrl: 'https://example.com/product-image.jpg',
//   brand: 'Example Brand',
//   category: [{
//     id: 'Electronics',
//     name: 'Electronics'
//   }],
//   tags: [
//     {
//       id: 'string',
//       name: 'string',
//     },
//   ],
//   ratings: 4.5,
//   reviews: [
//     {
//       id: 'review-1',
//       username: 'User123',
//       rating: 5,
//       reviewText: 'Great product!',
//       date: new Date(),
//     },
//     // More reviews...
//   ],
//   stockQuantity: 100,
//   variations: [
//     {
//       id: 'variation-1',
//       name: 'Size',
//       price: 99.99,
//       stockQuantity: 50,
//       imageUrl: 'https://example.com/variation-image.jpg',
//       attributes: [
//         { name: 'Size', value: 'Large' },
//         { name: 'Color', value: 'Black' },
//       ],
//     },
//     // More variations...
//   ],
//   isFeatured: true,
//   isNewArrival: false,
//   isOnSale: true,
//   createdAt: new Date(),
//   updatedAt: new Date(),
// };
