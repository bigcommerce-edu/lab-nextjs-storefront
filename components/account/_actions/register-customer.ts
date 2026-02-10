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
//  - This should match the expected variables for `registerCustomerQuery`

// TODO: Define the `RegisterResp` interface
//  - Matches the shape of `registerCustomerQuery`

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
  // TODO: Replace this with the actual mutation logic
  //  - Use bcGqlFetch with the response and var types
  //    - Pass registerQuery as the query
  //    - Pass email, firstName, lastName, password
  //  - Extract the customer object from the response
  //  - Extract errors from the response and return an appropriate failure response object if any errors are present
  //  - If no errors occur, redirect to "/login"
  return Promise.resolve(
    { success: false, error: "Registration not implemented." }
  );
};
