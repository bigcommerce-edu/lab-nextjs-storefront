'use server';

import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { getCookieName, isSecure } from "@/lib/cookies";
import { BasicCart, CartFragment } from "@/types/cart";
import { cookies } from "next/headers";

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
  return Promise.resolve({});
};
