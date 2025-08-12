import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { Product } from "@/types/catalog";
import { cache } from "react";

const getProductQuery = `
query GetProduct(
  $path: String!, 
  $imgSize: Int!
) {
  site {
    route(path: $path) {
      node {
        __typename
        ... on Product {
          entityId
          sku
          name
          description
          prices {
            price {
              value
              currencyCode
            }
          }
          defaultImage {
            url(width: $imgSize)
            altText
          }
        }
      }
    }
  }
}
`;

interface GetProductVars {
  path: string;
  imgSize: number;
}

interface GetProductResp {
  data: {
    site: {
      route: {
        node: Product & {
          "__typename": string,
        }
      }
    }
  }
}

/**
 * Fetch a product
 */
export const getProduct = cache(async ({
  path,
  imgSize,
  customerToken
}: {
  path: string,
  imgSize: number,
  customerToken?: string
}) => {
  const productResp = await bcGqlFetch<GetProductResp, GetProductVars>(
    getProductQuery,
    {
      path,
      imgSize,
    },
    customerToken
  );

  const product = productResp.data.site.route.node;

  if (!product || product.__typename !== "Product") {
    throw new Error(`Product not found for "${path}"`);
  }

  return product;
});
