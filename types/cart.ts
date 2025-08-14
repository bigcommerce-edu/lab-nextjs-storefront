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

}

export interface BasicCartDetails extends BasicCart {
  
}
