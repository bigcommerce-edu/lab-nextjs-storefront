import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { BasicCategory, CategoryProduct } from "@/types/catalog";
import { cache } from "react";

/**
 * Fetch a category and its products
 */
export const getCategoryWithProducts = cache(async ({

}: {

}) => {
  return Promise.resolve({});
});
