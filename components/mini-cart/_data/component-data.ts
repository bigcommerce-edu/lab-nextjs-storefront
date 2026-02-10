import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { BasicCart, CartFragment } from "@/types/cart";

// TODO: Add `getCartQuery`
//  - This is a GraphQL query
//  - It should use site.cart
//  - Use CartFragment for fields to select
//  - Needs a $cartId variable

// TODO: Define the `GetCartVars` interface
//  - This should match the expected variables for `getCartQuery`

// TODO: Define the `GetCartResp` interface
//  - The `BasicCart` interface provides most of the response shape
//  - Fill out the rest of the response structure, including site.cart
//  - Add lineItems.totalQuantity to BasicCart

/**
 * Get basic details of a cart for header
 */
export const getCart = async ({
  // TODO: Add cartId
}: {
  // TODO: cartId is a string
}) => {
  // TODO: Replace this with the actual query logic
  //  - Use bcGqlFetch with the response and var types
  //    - Pass getCartQuery as the query
  //    - Include cartId
  //    - Include the customerToken
  // - Extract cart from the response and verify it exists 
  // - Return an object with all cart fields (using spread operator), plus totalQuantity (from cart.lineItems)
  return Promise.resolve({});
};
