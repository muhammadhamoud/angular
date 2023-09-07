export interface Cart {
    id: number;
    items: CartItem[];
    // Other properties
  }
  
  export interface CartItem {
    productId: number;
    quantity: number;
    // Other properties
  }
  