import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { BasicCart, CartFragment } from "@/types/cart";

const getCartQuery = `
query GetCart($cartId: String!) {
  site {
    cart(entityId: $cartId) {
      ...cartFields
    }
  }
}

${CartFragment}
`;

interface GetCartVars {
  cartId: string;
}

interface GetCartResp {
  data: {
    site: {
      cart: BasicCart & {
        lineItems: {
          totalQuantity: number;
        }
      }
    }
  }
}

/**
 * Get basic details of a cart for header
 */
export const getCart = async ({
  cartId,
}: {
  cartId: string,
}) => {
  const cartResp = await bcGqlFetch<GetCartResp, GetCartVars>(
    getCartQuery,
    {
      cartId
    }
  );

  const cart = cartResp.data.site.cart;
  if (!cart) {
    throw new Error("Cart not found");
  }

  return {
    ...cart,
    totalQuantity: cart.lineItems.totalQuantity,
  };
};
