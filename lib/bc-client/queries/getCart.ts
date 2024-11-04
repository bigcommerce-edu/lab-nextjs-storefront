import { bcGqlFetch } from "../bc-client-gql";
import { BasicCart, Cart, CartFragment } from "../types/cart";

export const getCart: (
  cartId: string
) => Promise<Cart> = async (
  cartId
) => {
  return {
    totalQuantity: 0,
  }
}
