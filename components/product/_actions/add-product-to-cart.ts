'use server';

import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { getCookieName, isSecure } from "@/lib/cookies";
import { BasicCart, CartFragment } from "@/types/cart";
import { cookies } from "next/headers";

const createCartQuery = `
mutation CreateCart(
  $productId: Int!,
  $quantity: Int!
) {
  cart {
    createCart(
      input: {
        lineItems: [
          {
            quantity: $quantity,
            productEntityId: $productId
          }
        ]
      }
    ) {
      cart {
        ...cartFields
      }
    }
  }
}

${CartFragment}
`;

interface CreateCartVars {
  productId: number;
  quantity: number;
}

interface CreateCartResp {
  data: {
    cart: {
      createCart: {
        cart: BasicCart & {
          lineItems: {
            totalQuantity: number;
          }
        }
      }
    }
  }
}

const createCart = async ({
  productId,
  quantity,
}: {
  productId: number,
  quantity: number,
}) => {
  const cartResp = await bcGqlFetch<CreateCartResp, CreateCartVars>(
    createCartQuery,
    {
      productId,
      quantity,
    }
  );

  const cart = cartResp.data.cart.createCart.cart;

  return {
    ...cart,
    totalQuantity: cart.lineItems.totalQuantity,
  };
};

const addCartLineItemQuery = `
mutation AddCartLineItem(
  $cartId: String!,
  $productId: Int!,
  $quantity: Int!
) {
  cart {
    addCartLineItems(
      input: {
        cartEntityId: $cartId,
        data: {
          lineItems: [
            {
              quantity: $quantity,
              productEntityId: $productId
            }
          ]
        }
      }
    ) {
      cart {
        ...cartFields
      }
    }
  }
}

${CartFragment}
`;

interface AddCartLineItemVars {
  cartId: string;
  productId: number;
  quantity: number;
}

interface AddCartLineItemResp {
  data: {
    cart: {
      addCartLineItems: {
        cart: BasicCart & {
          lineItems: {
            totalQuantity: number;
          }
        }
      }
    }
  }
}

const addCartLineItem = async ({
  cartId,
  productId,
  quantity
}: {
  cartId: string,
  productId: number,
  quantity: number,
}) => {
  const cartResp = await bcGqlFetch<AddCartLineItemResp, AddCartLineItemVars>(
    addCartLineItemQuery,
    {
      cartId,
      productId,
      quantity,
    }
  );

  const cart = cartResp.data.cart.addCartLineItems.cart;

  return {
    ...cart,
    totalQuantity: cart.lineItems.totalQuantity,
  };
}

/**
 * Add item to new or existing cart
 */
export const addProductToCart = async ({
  productId,
  quantity=1,
}: {
  productId: number,
  quantity?: number,
}) => {
  const cookieStore = await cookies();
  const secure = await isSecure();
  const cookieName = getCookieName({ name: "cartId", secure });

  const cartId = cookieStore.get(cookieName)?.value;

  let cart = null;
  if (cartId) {
    try {
      cart = await addCartLineItem({ cartId, productId, quantity });
    } catch (err) {
      // Existing cart ID might not have matched a cart
    }
  }

  if (!cart) {
    try {
      cart = await createCart({ productId, quantity });
    } catch (err) {
      console.log(err);
    }
  }

  if (cart) {
    cookieStore.set({
      name: cookieName,
      value: cart.entityId,
      httpOnly: true,
      secure,
    });
  }

  return cart;
};
