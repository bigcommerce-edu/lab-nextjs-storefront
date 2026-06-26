'use server';

import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { getCookieName, isSecure } from "@/lib/cookies";
import * as jwt from 'jsonwebtoken';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export interface LoginState {
  error: string | null;
  email: string;
}

/**
 * Perform login
 */
export const loginCustomer = async (
  // TODO: Add parameters
  //  - prevState, of type `LoginState`
  //  - formData, of type `FormData`
  //  - The function returns a `Promise<LoginState>`
) => {
  // TODO: Get `email` and `password` from formData

  // TODO: Replace this with a response object with a "not implemented" error message and the submitted email
  return Promise.resolve({});
};
