import { Injectable } from "@angular/core";

export interface ProductItem {
  id: number;  
  name: string;
  image?: string;
  description: string;
  url?: string;
  }

const PRODUCTS = [
    {
        id: 1,
        name: "ROI.product.name.01",
        description: "ROI.product.description.01",
        image: "../../../assets/prodcut-icons/bit.png",
        url: ""
    },
      {
        id: 2,
        name: "ROI.product.name.02",
        description: "ROI.product.description.02",
        image: "../../../assets/prodcut-icons/aas.png",
        url: ""
    },
      {
        id: 3,
        name: "ROI.product.name.03",
        description: "ROI.product.description.03",
        image: "../../../assets/prodcut-icons/sis.png",
        url: ""
    },
      {
        id: 4,
        name: "ROI.product.name.04",
        description: "ROI.product.description.04",
        image: "../../../assets/prodcut-icons/pms.png",
        url: ""
    },
      {
        id: 5,
        name: "ROI.product.name.05",
        description: "ROI.product.description.05",
        image: "../../../assets/prodcut-icons/tss.png",
        url: ""
    },
      {
        id: 6,
        name: "ROI.product.name.06",
        description: "ROI.product.description.06",
        image: "../../../assets/prodcut-icons/dps.png",
        url: ""
    },
      {
        id: 7,
        name: "ROI.product.name.07",
        description: "ROI.product.description.07",
        image: "../../../assets/prodcut-icons/rtd.png",
        url: ""
    },
      {
        id: 8,
        name: "ROI.product.name.08",
        description: "ROI.product.description.08",
        image: "../../../assets/prodcut-icons/dts.png",
        url: ""
    },
      {
        id: 9,
        name: "ROI.product.name.09",
        description: "ROI.product.description.09",
        image: "../../../assets/prodcut-icons/tps.png",
        url: ""
    },
      {
        id: 10,
        name: "ROI.product.name.10",
        description: "ROI.product.description.10",
        image: "../../../assets/prodcut-icons/mis.png",
        url: ""
    },
      {
        id: 11,
        name: "ROI.product.name.11",
        description: "ROI.product.description.11",
        image: "../../../assets/prodcut-icons/dss.png",
        url: ""
    },
      {
        id: 12,
        name: "ROI.product.name.12",
        description: "ROI.product.description.12",
        image: "../../../assets/prodcut-icons/ess.png",
        url: ""
    },
];


@Injectable({providedIn: 'root'})

export class ProductItems {
  getAllItems(): ProductItem[] {
    return PRODUCTS;
  }
  getItemById(id: number): ProductItem | undefined {
    return PRODUCTS.find(i => i.id === id);
  }
}