'use server';

import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { redirect } from "next/navigation";

/**
 * Register a new customer
 */
export const registerCustomer = async ({
  email,
  firstName,
  lastName,
  password,
}: {
  email: string,
  firstName: string,
  lastName: string,
  password: string,
}) => {
  return Promise.resolve(
    { success: false, error: "Registration not implemented." }
  );
};
