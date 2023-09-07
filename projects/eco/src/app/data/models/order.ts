import { LineItem } from "./line-item";

export interface Order {
    id: number;
    customerId: number;
    orderDate: Date;
    items: LineItem[];
    // Other properties
  }
  
  
  // GetOrderParams model
export interface GetOrderParams {
  // Define properties relevant to GetOrderParams
  // For example:
  fromDate?: Date;
  toDate?: Date;
  status?: string;
  paymentSource?: string;
  // Add any other properties as needed
}

// UpdateOrderParams model (assuming it's an array of strings)
export type UpdateOrderParams = string[];