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

export interface LoginState {
  error: string | null;
  email: string;
}

/**
 * Perform login
 */
export const loginCustomer = async (
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> => {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  // TODO: Replace this with the actual mutation logic
  //  - Get JWT_SECRET from environment variables and return an error response if it's not set
  //  - Use bcGqlFetch with the response and var types
  //    - Pass loginQuery as the query
  //    - Pass email, password
  //  - Extract the customer object from the response
  //  - Extract the token from the response
  //    - Return an error response if the customer or token is not found
  //    - Sign a JWT with the customer entityId and the token
  //    - Set the customer cookie with the signed JWT
  //  - If the request throws, return an error response with the error message
  //  - Include the submitted email in every error response
  //  - If no errors occur, redirect to "/"
  return Promise.resolve(
    { error: "Login not implemented", email }
  );
};
