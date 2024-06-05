import { bcGqlFetch } from "../bc-client-gql";
import { BasicCategory, PagedCategory, CategoryProduct } from "../types/catalog";

export const getCategoryWithProducts: (
  path: string,
  mainImgSize: number,
  thumbnailSize: number,
  page: {limit: number, before?: string, after?: string},
  customerId?: number
) => Promise<PagedCategory> = async (
  path,
  mainImgSize,
  thumbnailSize,
  page,
  customerId
) => {
  return {
    products: [],
  };
}
