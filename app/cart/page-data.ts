import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { BasicCartDetails, CartItem } from "@/types/cart";

// TODO: Define a cartItemFields string once, since we'll use it to define fragments on two types
//  - Include entityId, productEntityId, sku, name, imageUrl, quantity, salePrice, extendedSalePrice
//  - salePrice and extendedSalePrice are objects with a value

// TODO: Add `getCartDetailsQuery`
//  - This is a GraphQL query
//  - It should use cart.cart
//  - Needs a $cartId variable
//  - Include entityId, curencyCode, amount, baseAmount, lineItems
//  - amount and baseAmount are objects with a value
//  - lineItems is an object with a totalQuantity, physicalItems, and digitalItems
//  - Include PhysicalItemFields and DigitalItemFields fragments, concatenating cartItemFields to each

// TODO: Define the `GetCartDetailsVars` interface
//  - This should match the expected variables for `getCartDetailsQuery`

// TODO: Define the `GetCartDetailsResp` interface
//  - The `BasicCartDetails` interface provides most of the response shape
//  - Fill out the rest of the response structure, including site.cart
//  - Add lineItems to BasicCartDetails
//    - Include totalQuantity, physicalItems, and digitalItems
//    - physicalItems and digitalItems are arrays of CartItem

/**
 * Fetch details of a cart
 */
export const getCartDetails = async ({
  // TODO: Add cartId
}: {
  // TODO: cartId is a string
}) => {
  // TODO: Replace this with the actual query logic
  //  - Use bcGqlFetch with the response and var types
  //    - Pass getCartDetailsQuery as the query
  //    - Include cartId
  //  - Extract cart from the response and verify it exists
  //  - Return an object with all cart fields (using spread operator), plus totalQuantity (from cart.lineItems) and lineItems
  //    - lineItems should be a flat array concatenating physicalItems and digitalItems
  return Promise.resolve({});
};

// TODO: Add `createCartRedirectQuery`
//  - This is a GraphQL mutation
//  - It should use cart.createCartRedirectUrls
//  - Needs a $cartId variable
//  - Select redirectUrls.redirectedCheckoutUrl from cart

// TODO: Define the `CreateCartRedirectVars` interface
//  - This should match the expected variables for `createCartRedirectQuery`

// TODO: Define the `CreateCartRedirectResp` interface
//  - Matches the shape of `createCartRedirectQuery`

/**
 * Generate a redirect URL for a cart
 */
export const createCartRedirect = async ({
  // TODO: Add cartId
}:{
  // TODO: cartId is a string
}) => {
  // TODO: Replace this with the actual mutation logic
  //  - Use bcGqlFetch with the response and var types
  //    - Pass createCartRedirectQuery as the query
  //    - Include cartId
  //  - Extract redirectedCheckoutUrl from the response and throw an error if it's not found
  //  - Return the redirectedCheckoutUrl
  return Promise.resolve("");
};
