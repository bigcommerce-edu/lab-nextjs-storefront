import { bcGqlFetch } from "../bc-client-gql";
import { BasicCategory, PagedCategory, CategoryProduct } from "../types/catalog";

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
`

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
`

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

type GetCategoryWithProductsVars = {
  path: string,
  mainImgSize: number,
  thumbnailSize: number,
  limit: number,
  before?: string,
  after?: string,
}

type GetCategoryWithProductsResp = {
  data: {
    site: {
      route: {
        node: BasicCategory & {
          "__typename": string,
          products: {
            edges: {
              node: CategoryProduct,
            }[],
          },
        },
      },
    },
  },
}

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
  const categoryResp = await bcGqlFetch<GetCategoryWithProductsResp, GetCategoryWithProductsVars>(
    page.before ? getCategoryWithBeforeQuery : getCategoryWithAfterQuery,
    {
      path,
      mainImgSize,
      thumbnailSize,
      ...page,
    },
    customerId
  );

  const category = categoryResp.data.site.route.node;
  if (!category || category.__typename !== "Category") {
    throw new Error(`No category found for "${path}"`);
  }

  const products = (category.products?.edges ?? []).map(edge => edge.node);

  return {
    ...category,
    products,
  };
}
