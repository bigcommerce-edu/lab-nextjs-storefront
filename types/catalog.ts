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
  // TODO: Fill in fields, matching GraphQL schema
  //  - Include entityId, sku, name, description, prices, defaultImage
  //  - Prices is an object with a price, which has a value and currencyCode
  //  - defaultImage has a url and an altText
}
