import { bcGqlFetch } from "../bc-client-gql";
import { Product } from "../types/catalog";

export const getProduct: (
  path: string,
  imgSize: number,
  customerId?: number
) => Promise<Product> = async (
  path,
  imgSize,
  customerId
) => {
  return {};
}
