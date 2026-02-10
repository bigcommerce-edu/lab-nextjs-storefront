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
  entityId: string;
  productEntityId: number;
  sku?: string;
  name: string;
  imageUrl?: string;
  quantity: number;
  salePrice: {
    value: number;
  };
  extendedSalePrice: {
    value: number;
  };
}

export interface BasicCartDetails extends BasicCart {
  baseAmount: {
    value: number
  };
}
