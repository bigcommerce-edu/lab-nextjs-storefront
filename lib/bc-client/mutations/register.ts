import { bcGqlFetch } from "../bc-client-gql";
import { Customer } from "../types/customer";

export const register: (
  email: string, 
  firstName: string,
  lastName: string,
  password: string
) => Promise<Customer> = async (
  email, firstName, lastName, password
) => {
  return {};
}
