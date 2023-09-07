import { Address } from "./address";


export interface CustomerAddress {
    id: number;
    customerId: number;
    address: Address;
    isDefault: boolean;
    // Other properties
  }
  