import { bcGqlFetch } from "../bc-client-gql";
import { Product } from "../types/catalog";

export const getProduct: (
  path: string,
  imgSize: number,
  customerToken?: string
) => Promise<Product> = async (
  path,
  imgSize,
  customerToken
) => {
  return {};
}
