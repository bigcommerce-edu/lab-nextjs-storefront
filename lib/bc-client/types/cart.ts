export type BasicCart = {
  
}

export type Cart = BasicCart & {
  totalQuantity: number,
}

export const CartFragment = `

`

export type CartItem = {

}

export type BasicCartDetails = BasicCart & {
  
}

export type CartDetails = BasicCartDetails & Cart & {
  lineItems: CartItem[],
}
