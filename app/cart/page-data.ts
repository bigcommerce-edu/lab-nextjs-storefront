import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { BasicCartDetails, CartItem } from "@/types/cart";

const cartItemFields = `
  entityId
  productEntityId
  sku
  name
  imageUrl
  quantity
  salePrice {
    value
  }
  extendedSalePrice {
    value
  }
`;

const getCartsDetailsQuery = `
query GetCart($cartId: String!) {
  site {
    cart(entityId: $cartId) {
      entityId
      currencyCode
      amount {
        value
      }
      baseAmount {
        value
      }
      lineItems {
        totalQuantity,
        physicalItems {
          ...PhysicalItemFields
        }
        digitalItems {
          ...DigitalItemFields
        }
      }
    }
  }
}

fragment PhysicalItemFields on CartPhysicalItem {
  ${cartItemFields}
}

fragment DigitalItemFields on CartDigitalItem {
  ${cartItemFields}
}
`;

interface GetCartDetailsVars {
  cartId: string;
}

interface GetCartDetailsResp {
  data: {
    site: {
      cart: BasicCartDetails & {
        lineItems: {
          totalQuantity: number;
          physicalItems: CartItem[];
          digitalItems: CartItem[];
        }
      }
    }
  }
}

/**
 * Fetch details of a cart
 */
export const getCartDetails = async ({
  cartId,
}: {
  cartId: string,
}) => {
  const cartResp = await bcGqlFetch<GetCartDetailsResp, GetCartDetailsVars>(
    getCartsDetailsQuery,
    {
      cartId,
    }
  );

  const cart = cartResp.data.site.cart;
  if (!cart) {
    throw new Error("Cart not found");
  }

  return {
    ...cart,
    totalQuantity: cart.lineItems.totalQuantity,
    lineItems: cart.lineItems.physicalItems.concat(cart.lineItems.digitalItems),
  };
};

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

interface CreateCartRedirectVars {
  cartId: string;
}

interface CreateCartRedirectResp {
  data: {
    cart: {
      createCartRedirectUrls: {
        redirectUrls: {
          redirectedCheckoutUrl: string;
        }
      }
    }
  }
}

/**
 * Generate a redirect URL for a cart
 */
export const createCartRedirect = async ({
  cartId,
}:{
  cartId: string,
}) => {
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
};
