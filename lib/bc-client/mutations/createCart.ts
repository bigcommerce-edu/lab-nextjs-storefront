import { bcGqlFetch } from "../bc-client-gql";
import { BasicCart, Cart, CartFragment } from "../types/cart";

export const createCart: (
  productId: number,
  quantity: number
) => Promise<Cart> = async (
  productId,
  quantity
) => {
  return {
    totalQuantity: 0,
  }
}
