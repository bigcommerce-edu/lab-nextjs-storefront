'use server';

import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { redirect } from "next/navigation";

// TODO: Add `registerQuery`
//  - This is a GraphQL mutation
//  - It should use customer.registerCustomer
//  - Needs variables for $email, $firstName, $lastName, $password
//  - Select entityId from customer
//  - Select any error message on the various error types (EmailAlreadyInUseError, AccountCreationDisabledError, CustomerRegistrationError, ValidationError)

// TODO: Define the `RegisterVars` interface
//  - This should match the expected variables for `registerQuery`

// TODO: Define the `RegisterResp` interface
//  - Matches the shape of `registerQuery`

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

  // TODO: Replace this with the actual mutation logic
  //  - Use bcGqlFetch with the response and var types
  //    - Pass registerQuery as the query
  //    - Pass email, firstName, lastName, password
  //  - Extract the customer object from the response
  //  - If no customer was returned, extract errors from the response and return an error response with the error messages
  //  - If the request throws, return an error response with the error message
  //  - Include the submitted values in every error response
  //  - If no errors occur, redirect to "/login"
  return Promise.resolve(
    { ...submitted, error: "Registration not implemented." }
  );
};
