export interface BasicCart {
  entityId: string;
  currencyCode: string;
  amount: {
    value: number;
  };
}

export const CartFragment = `
fragment cartFields on Cart {
  entityId
  currencyCode
  amount {
    value
  }
  lineItems {
    totalQuantity
  }
}
`;

export interface CartItem {
  // TODO: Fill in fields, matching GraphQL schema
  //  - Include entityId, productEntityId, sku, name, imageUrl, quantity, salePrice, extendedSalePrice
  //  - salePrice and extendedSalePrice are objects with a value
}

export interface BasicCartDetails extends BasicCart {
  // TODO: BasicCartDetails adds baseAmount (with a value) to BasicCart
}
