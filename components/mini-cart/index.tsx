import Cart from "../icons/cart";
import { getCart } from "./_data/component-data";
import Link from "next/link";
import { getCookieName, isSecure } from "@/lib/cookies";
import { cookies } from "next/headers";

const MiniCart = async () => {
  // TODO: Use cookies() to get cartId cookie

  // TODO: If there's a cartId, fetch the cart details with getCart
  //  - Delete the cartId cookie if no cart is found

  // TODO: Create a currencyFormatter w/ Intl.NumberFormat
  //  - Get the currency from the cart's currencyCode

  return (
    <div>
      {/* TODO: Render the mini-cart with <Link> */}
      {/*  - Path is "/cart" */}
      {/*  - Render "<quantity> - <amount>" after the link if there's a cart */}
    </div>
  );
};

export default MiniCart;