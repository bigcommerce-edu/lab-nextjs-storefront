import { bcGqlFetch } from "../bc-client-gql";
import { Customer } from "../types/customer";

export const login: (
  email: string, password: string
) => Promise<Customer> = async (
  email, password
) => {
  return {};
}
