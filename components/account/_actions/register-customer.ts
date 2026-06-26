'use server';

import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { redirect } from "next/navigation";

/**
 * Register a new customer
 */
export const registerCustomer = async ({
  // TODO: Add destructured parameters
  //  - email, firstName, lastName, password
}: {
  // TODO: Add type information for destructured parameters
}) => {
  // TODO: Replace this with a response object indicating `success: false` with a "not implemented" error message
  return Promise.resolve({});
};
