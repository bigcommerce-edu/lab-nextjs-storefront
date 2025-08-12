export interface CategoryProduct {
  sku: string;
  name: string;
  path: string;
  prices: {
    price: {
      value: number;
      currencyCode: string;
    }
  }
  defaultImage?: {
    url: string;
    altText?: string;
  }
}

export interface BasicCategory {
  name: string;
  path: string;
  description?: string;
  defaultImage?: {
    url: string;
    altText?: string;
  }
}

export interface Product {

}
