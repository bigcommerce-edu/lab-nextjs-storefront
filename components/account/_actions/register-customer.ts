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
      return { ...submitted, error: errorMsg };
    }
  } catch(err) {
    const error = (err instanceof Error) ? err.message : String(err);
    return { ...submitted, error };
  }

  redirect("/login");
};
