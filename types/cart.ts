export interface BasicCart {
  // TODO: Fill in fields, matching GraphQL schema
  //  - Include entityId, currencyCode, amount
  //  - amount is an object with a value
}

// TODO: Fill in the fragment, matching GraphQL schema
//  - Fragment for type `Cart`
//  - Include entityId, currencyCode, amount, lineItems
//  - amount is an object with a value
//  - lineItems is an object with a totalQuantity 
export const CartFragment = `

`;

export interface CartItem {
  // TODO: Fill in fields, matching GraphQL schema
  //  - Include entityId, productEntityId, sku, name, imageUrl, quantity, salePrice, extendedSalePrice
  //  - salePrice and extendedSalePrice are objects with a value
}

export interface BasicCartDetails extends BasicCart {
  // TODO: BasicCartDetails adds baseAmount (with a value) to BasicCart
}
