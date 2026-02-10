'use server';

import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { getCookieName, isSecure } from "@/lib/cookies";
import { getCurrentCustomer } from "@/lib/getCurrentCustomer";
import { cookies } from "next/headers";

// TODO: Add `logoutQuery`
//  - This is a GraphQL mutation
//  - It should use logout
//  - Select `result` from logout

// TODO: Define the `LogoutResp` interface
//  - Matches the shape of `logoutQuery`

/**
 * Perform logout
 */
export const logout = async () => {
  // TODO: Use the `getCurrentCustomer` helper function to get the current customer from the session cookie

  // TODO: If there is a current customer with a token, use `bcGqlFetch` with `logoutQuery` and the token

  // TODO: Delete any existing customer cookie
};
