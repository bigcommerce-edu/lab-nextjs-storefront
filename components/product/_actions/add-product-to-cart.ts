'use server';

import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { getCookieName, isSecure } from "@/lib/cookies";
import { BasicCart, CartFragment } from "@/types/cart";
import { cookies } from "next/headers";

/**
 * Add item to new or existing cart
 */
export const addProductToCart = async ({
  productId,
  quantity=1,
}: {
  productId: number,
  quantity?: number,
}) => {
  return Promise.resolve({});
};
