import { bcGqlFetch } from "../bc-client-gql";
import { BasicCategory, PagedCategory, CategoryProduct } from "../types/catalog";

export const getCategoryWithProducts: (
  path: string,
  mainImgSize: number,
  thumbnailSize: number,
  page: {limit: number, before?: string, after?: string},
  customerToken?: string
) => Promise<PagedCategory> = async (
  path,
  mainImgSize,
  thumbnailSize,
  page,
  customerToken
) => {
  return {
    products: [],
  };
}
