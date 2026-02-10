import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { BasicCategory, CategoryProduct } from "@/types/catalog";
import { cache } from "react";

const categoryFragment = `
fragment categoryFields on Category {
  name
  path
  description
  defaultImage {
    url(width: $mainImgSize)
    altText
  }
}
`;

const productFragment = `
fragment productFields on Product {
  sku
  name
  path
  prices {
    price {
      value
      currencyCode
    }
  }
  defaultImage {
    url(width: $thumbnailSize)
    altText
  }
}
`;

// TODO: Add `pageFragment`
//  - This is a GraphQL fragment
//  - It should include fields on the PageInfo type
//  - hasNextPage, hasPreviousPage, startCursor, and endCursor

// TODO: Add `pageInfo` as a selection of `products`, using `pageFragment`
//  - Make sure to add both the sub-selection and the fragment itself (at the end of the string)
const getCategoryWithBeforeQuery = `
query GetCategory(
  $path: String!,
  $mainImgSize: Int!,
  $thumbnailSize: Int!,
  $limit: Int,
  $before: String
) {
  site {
    route(path: $path) {
      node {
        __typename
        ... on Category {
          ... categoryFields
          products(
            last: $limit,
            before: $before
          ) {
            edges {
              node {
                ... productFields
              }
            }
          }
        }
      }
    }
  }
}

${categoryFragment}

${productFragment}
`;

// TODO: Add `pageInfo` as a selection of `products`, using `pageFragment`
//  - Make sure to add both the sub-selection and the fragment itself (at the end of the string)
const getCategoryWithAfterQuery = `
query GetCategory(
  $path: String!,
  $mainImgSize: Int!,
  $thumbnailSize: Int!,
  $limit: Int,
  $after: String
) {
  site {
    route(path: $path) {
      node {
        __typename
        ... on Category {
          ... categoryFields
          products(
            first: $limit,
            after: $after
          ) {
            edges {
              node {
                ... productFields
              }
            }
          }
        }
      }
    }
  }
}

${categoryFragment}

${productFragment}
`;

interface GetCategoryWithProductsVars {
  path: string;
  mainImgSize: number;
  thumbnailSize: number;
  limit: number;
  before?: string;
  after?: string;
}

interface GetCategoryWithProductsResp {
  data: {
    site: {
      route: {
        node: BasicCategory & {
          "__typename": string;
          products: {
            // TODO: Add the definition of `pageInfo`, matching the structure of the fragment
            edges: {
              node: CategoryProduct;
            }[]
          }
        }
      }
    }
  }
}

/**
 * Fetch a category and its products
 */
export const getCategoryWithProducts = cache(async ({
  path,
  mainImgSize,
  thumbnailSize,
  page,
  customerToken
}: {
  path: string,
  mainImgSize: number,
  thumbnailSize: number,
  page: {limit: number, before?: string, after?: string},
  customerToken?: string
}) => {
  const categoryResp = await bcGqlFetch<GetCategoryWithProductsResp, GetCategoryWithProductsVars>(
    page.before ? getCategoryWithBeforeQuery : getCategoryWithAfterQuery,
    {
      path,
      mainImgSize,
      thumbnailSize,
      ...page,
    },
    customerToken
  );

  const category = categoryResp.data.site.route.node;
  if (!category || category.__typename !== "Category") {
    throw new Error(`No category found for "${path}"`);
  }

  const products = (category.products?.edges ?? []).map(edge => edge.node);
  // TODO: Extract pageOpts from the response
  //  - A single object with both `before` and `after` values
  //  - `before` should depend on whether there is a startCursor
  //  - `after` should depend on whether there is an endCursor

  return {
    ...category,
    products,
    // TODO: Add a `page` object to the response, using `pageOpts`
  };
});
