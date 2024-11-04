import { bcGqlFetch } from "../bc-client-gql";
import { BasicCartDetails, CartDetails, CartItem } from "../types/cart";

export const getCartDetails: (
  cartId: string
) => Promise<CartDetails> = async (
  cartId
) => {
  return {
    totalQuantity: 0,
    lineItems: [],
  }
}
