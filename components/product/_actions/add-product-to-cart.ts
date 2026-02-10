'use server';

import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { getCookieName, isSecure } from "@/lib/cookies";
import { BasicCart, CartFragment } from "@/types/cart";
import { cookies } from "next/headers";

// TODO: Add `createCartQuery`
//  - This is a GraphQL mutation
//  - It should use cart.createCart
//  - Needs variables for $productId and $quantity
//  - Formulate this to support a single item in input.lineItems
//  - Use CartFragment for fields to select

// TODO: Define the `CreateCartVars` interface
//  - This should match the expected variables for `createCartQuery`

// TODO: Define the `CreateCartResp` interface
//  - The `BasicCart` interface provides most of the response shape
//  - Fill out the rest of the response structure, including cart.createCart.cart
//  - Add lineItems.totalQuantity to BasicCart

// TODO: Add `createCart` function
//  - Use bcGqlFetch with `createCartQuery`
//  - Extract cart from the response
//  - Return an object with all cart fields (using spread operator), plus totalQuantity (from cart.lineItems)

// TODO: Add `addCartLineItemQuery`
//  - This is a GraphQL mutation
//  - It should use cart.addLineItem
//  - Needs variables for $cartId and $productId and $quantity
//  - Formulate this to support a single item in input.lineItems
//  - Use CartFragment for fields to select

// TODO: Define the `AddCartLineItemVars` interface
//  - This should match the expected variables for `addCartLineItemQuery`

// TODO: Define the `AddCartLineItemResp` interface
//  - The `BasicCart` interface provides most of the response shape
//  - Fill out the rest of the response structure, including cart.addLineItem.cart
//  - Add lineItems.totalQuantity to BasicCart

// TODO: Add `addCartLineItem` function
//  - Use bcGqlFetch with `addCartLineItemQuery`
//  - Extract cart from the response
//  - Return an object with all cart fields (using spread operator), plus totalQuantity (from cart.lineItems)

/**
 * Add item to new or existing cart
 */
export const addProductToCart = async ({
  // TODO: Add destructured parameters
  //  - productId and quantity
  //  - quantity defaults to 1
}: {
  // TODO: Add type information for destructured parameters
}) => {
  // TODO: Replace this with action logic
  //  - Use cookies() to get cartId cookie
  //  - If cartId cookie exists, call addCartLineItem 
  //  - If there's no cart yet (no cartId cookie or addCartLineItem fails), call createCart
  //  - Set the cartId cookie with the new cart's id
  //  - Return the cart object
  return Promise.resolve({});
};
