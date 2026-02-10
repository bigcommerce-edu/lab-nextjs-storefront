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

// TODO: Add `createCartRedirectQuery`
//  - This is a GraphQL mutation
//  - It should use cart.createCartRedirectUrls
//  - Needs a $cartId variable
//  - Select redirectUrls.redirectedCheckoutUrl from cart

// TODO: Define the `CreateCartRedirectVars` interface
//  - This should match the expected variables for `createCartRedirectQuery`

// TODO: Define the `CreateCartRedirectResp` interface
//  - Matches the shape of `createCartRedirectQuery`

/**
 * Generate a redirect URL for a cart
 */
export const createCartRedirect = async ({
  // TODO: Add cartId
}:{
  // TODO: cartId is a string
}) => {
  // TODO: Replace this with the actual mutation logic
  //  - Use bcGqlFetch with the response and var types
  //    - Pass createCartRedirectQuery as the query
  //    - Include cartId
  //  - Extract redirectedCheckoutUrl from the response and throw an error if it's not found
  //  - Return the redirectedCheckoutUrl
  return Promise.resolve("");
};
