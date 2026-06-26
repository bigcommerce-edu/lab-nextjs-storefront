'use server';

import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { redirect } from "next/navigation";

export interface RegisterState {
  error: string | null;
  email: string;
  firstName: string;
  lastName: string;
}

/**
 * Register a new customer
 */
export const registerCustomer = async (
  // TODO: Add parameters
  //  - prevState, of type `RegisterState`
  //  - formData, of type `FormData`
  //  - The function returns a `Promise<RegisterState>`
) => {
  // TODO: Get `email`, `firstName`, `lastName`, and `password` from formData

  // TODO: Create a `submitted` object with email, firstName, and lastName, to be returned to the form

  // TODO: Replace this with a response object with a "not implemented" error message and the submitted values
  return Promise.resolve({});
};
