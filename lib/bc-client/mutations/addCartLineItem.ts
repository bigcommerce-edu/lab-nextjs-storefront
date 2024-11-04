import { bcGqlFetch } from "../bc-client-gql";
import { BasicCart, Cart, CartFragment } from "../types/cart";

export const addCartLineItem: (
  cartId: string,
  productId: number,
  quantity: number
) => Promise<Cart> = async (
  cartId,
  productId,
  quantity
) => {
  return {
    totalQuantity: 0,
  }
}
