import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { Product } from "@/types/catalog";
import { cache } from "react";

// TODO: Add `getProductQuery`
//  - This is a GraphQL query
//  - It should use site.route.node
//  - Select fields of node specifically on the Product type
//    - entityId, sku, name, description, prices, defaultImage
//    - From prices, select price, with value and currencyCode sub-fields
//    - defaultImage has a url with a width argument, and an altText
//  - The whole query needs variables for $path and $imgSize

// TODO: Define the `GetProductVars` interface
//  - This should match the expected variables for `getProductQuery`

// TODO: Define the `GetProductResp` interface
//  - The `Product` interface provides most of the response shape
//  - Fill out the rest of the response structure, including site.route.node

/**
 * Fetch a product
 */
export const getProduct = cache(async ({
  // TODO: Add the function's destructured parameters here
  //  - path and imgSize for the GQL params
  //  - The customerToken is also needed
}: {
  // TODO: Include type information for all destructured parameters
}) => {
  // TODO: Replace this with the actual query logic
  //  - Use bcGqlFetch with the response and var types
  //    - Include params
  //    - Include the customerToken
  // - Extract product from the response and verify it exists and is of type `Product`
  // - Return the product object
  return Promise.resolve({});
});
