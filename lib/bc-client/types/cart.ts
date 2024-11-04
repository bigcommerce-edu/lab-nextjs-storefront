export type BasicCart = {
  entityId: string,
  currencyCode: string,
  amount: {
    value: number,
  },
}

export type Cart = BasicCart & {
  totalQuantity: number,
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
`

export type CartItem = {

}

export type BasicCartDetails = BasicCart & {
  
}

export type CartDetails = BasicCartDetails & Cart & {
  lineItems: CartItem[],
}
