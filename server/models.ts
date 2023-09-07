export interface Product {
    id: string;
    user: User[];
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

  export interface User {
    id: string;
    email: string;
    password: string;
  }
  
  export interface Category {
    id: string;
    name: string;
  }


  export interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    // Other properties
  }
  