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

) => {
  return Promise.resolve({});
};
