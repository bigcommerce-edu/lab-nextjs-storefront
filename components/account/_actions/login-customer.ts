'use server';

import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { getCookieName, isSecure } from "@/lib/cookies";
import * as jwt from 'jsonwebtoken';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// TODO: Add `loginQuery`
//  - This is a GraphQL mutation
//  - It should use login
//  - Needs variables for $email, $password
//  - Select entityId from customer, and customerAccessToken.value

// TODO: Define the `LoginVars` interface
//  - This should match the expected variables for `loginQuery`

// TODO: Define the `LoginResp` interface
//  - Matches the shape of `loginQuery`

/**
 * Perform login
 */
export const loginCustomer = async ({
  email,
  password,
}: {
  email: string,
  password: string,
}) => {
  return Promise.resolve(
    { success: false, error: 'Login not implemented' }
  );
};
