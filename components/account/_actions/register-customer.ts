'use server';

import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { redirect } from "next/navigation";

const registerQuery = `
mutation Register(
  $email: String!,
  $firstName: String!,
  $lastName: String!,
  $password: String!
) {
  customer {
    registerCustomer(
      input: {
        email: $email,
        firstName: $firstName,
        lastName: $lastName,
        password: $password
      }
    ) {
      customer {
        entityId
      }
      errors {
        ... on EmailAlreadyInUseError {
          message
        }
        ... on AccountCreationDisabledError {
          message
        }
        ... on CustomerRegistrationError {
          message
        }
        ... on ValidationError {
          message
        }
      }
    }
  }
}
`;

interface RegisterVars {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

interface RegisterResp {
  data: {
    customer: {
      registerCustomer: {
        customer: {
          entityId: number;
        };
        errors?: {
          message: string;
        }[]
      }
    }
  }
}

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
  try {
    const customerResp = await bcGqlFetch<RegisterResp, RegisterVars>(
      registerQuery,
      {
        email,
        firstName,
        lastName,
        password,
      }
    );

    const customer = customerResp.data.customer.registerCustomer.customer;
    const errors = customerResp.data.customer.registerCustomer.errors;
    if (!customer) {
      let errorMsg = "Customer registration failed";
      if (errors) {
        errorMsg = errors.map(error => error.message).join("; ")
      }
      return { success: false, error: errorMsg };
    }
  } catch(err) {
    const error = (err instanceof Error) ? err.message : String(err);
    return { success: false, error };
  }

  redirect("/login");
};
