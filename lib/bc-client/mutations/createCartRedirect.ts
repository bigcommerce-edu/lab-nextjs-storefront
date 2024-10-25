import { bcGqlFetch } from "../bc-client-gql";

const createCartRedirectQuery = `
mutation GetCartRedirectUrls(
  $cartId: String!
) {
  cart {
    createCartRedirectUrls(
      input: {
        cartEntityId: $cartId
      }
    ) {
      redirectUrls {
        redirectedCheckoutUrl
      }
    }
  }
}
`;

type CreateCartRedirectVars = {
  cartId: string,
}

type CreateCartRedirectResp = {
  data: {
    cart: {
      createCartRedirectUrls: {
        redirectUrls: {
          redirectedCheckoutUrl: string,
        },
      },
    },
  },
}

export const createCartRedirect: (
  cartId: string
) => Promise<string> = async (
  cartId
) => {
  const cartRedirectResp = await bcGqlFetch<CreateCartRedirectResp, CreateCartRedirectVars>(
    createCartRedirectQuery,
    {
      cartId,
    }
  );

  const url = cartRedirectResp.data.cart.createCartRedirectUrls.redirectUrls.redirectedCheckoutUrl;
  if (!url) {
    throw new Error("Creating cart redirect URL failed");
  }

  return url;
}
