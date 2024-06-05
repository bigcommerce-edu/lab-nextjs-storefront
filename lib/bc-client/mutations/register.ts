import { bcGqlFetch } from "../bc-client-gql";
import { Customer } from "../types/customer";

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

type RegisterVars = {
  email: string,
  firstName: string,
  lastName: string,
  password: string,
}

type RegisterResp = {
  data: {
    customer: {
      registerCustomer: {
        customer: Customer,
        errors?: {
          message: string,
        }[],
      },
    },
  },
}


export const register: (
  email: string, 
  firstName: string,
  lastName: string,
  password: string
) => Promise<Customer> = async (
  email, firstName, lastName, password
) => {
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
    throw new Error(errorMsg);
  }

  return customer;
}
