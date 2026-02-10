import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { BasicCategory, CategoryProduct } from "@/types/catalog";
import { cache } from "react";

// TODO: Add `categoryFragment`
//  - This is a GraphQL fragment
//  - It should include name, path, description, and defaultImage
//  - defaultImage has a url with a width argument, and an altText

// TODO: Add `productFragment`
//  - This is a GraphQL fragment
//  - It should include sku, name, path, prices, and defaultImage
//  - From prices, select price, with value and currencyCode sub-fields
//  - defaultImage has a url with a width argument, and an altText

// TODO: Add `pageFragment`
//  - This is a GraphQL fragment
//  - It should include fields on the PageInfo type
//  - hasNextPage, hasPreviousPage, startCursor, and endCursor

// TODO: Add the full category queries
//  - This will be two separate queries - `getCategoryWithBeforeQuery` and `getCategoryWithAfterQuery` - because of different arguments
//  - Both queries should use site.route.node
//  - Select fields of node specifically on the Category type
//    - Use the `categoryFragment` for basic fields
//    - Also select a list of products
//    - Use the `productFragment` for each node in the products list
//    - products needs either last/before or first/after arguments
//  - The whole query needs variables for $path, $mainImgSize, $thumbnailSize, and $limit
//  - The "before" query needs a variable for $before, and the "after" query needs a variable for $after

// TODO: Define the `GetCategoryWithProductsVars` interface
//  - This should match the expected variables for the two `getCategory` queries
//  - `before` and `after` will both need to be optional

// TODO: Define the `GetCategoryWithProductsResp` interface
//  - The `BasicCategory` and `CategoryProduct` interfaces provide most of the response shape
//  - Include the above interfaces in the full response structure, including site.route, edges.node, etc

/**
 * Fetch a category and its products
 */
export const getCategoryWithProducts = cache(async ({
  // TODO: Add the function's destructured parameters here
  //  - Most of these match the GraphQL query variables
  //  - path, mainImgSize, and thumbnailSize are separate params
  //  - A single `page` param will contain the limit and either `before` or `after`
  //  - The customerToken is also needed
}: {
  // TODO: Include type information for all destructured parameters
}) => {
  // TODO: Replace this with the actual query logic
  //  - Use bcGqlFetch with the response and var types
  //    - Use the existence of page.before to determine which GQL query to pass
  //    - Include params (limit, before, and after can be included by using the spread operator with `page`)
  //    - Include the customerToken
  //  - Extract category from the response and verify it exists and is of type `Category`
  // - Extract a flat products array from the response, or use an empty array
  // - Return an object with the base category fields (use spread operator) and `products`
  return Promise.resolve({});
});
