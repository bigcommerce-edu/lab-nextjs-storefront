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
  prevState: RegisterState,
  formData: FormData
): Promise<RegisterState> => {
  const email = String(formData.get("email") ?? "");
  const firstName = String(formData.get("firstName") ?? "");
  const lastName = String(formData.get("lastName") ?? "");
  const password = String(formData.get("password") ?? "");

  const submitted = { email, firstName, lastName };

  return Promise.resolve(
    { ...submitted, error: "Registration not implemented." }
  );
};
