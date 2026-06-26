import { createCartRedirect, getCartDetails } from "./page-data";
import PageHeading from "@/components/page-heading";
import CartItemRow from "@/components/cart/item-row";
import { getCookieName, isSecure } from "@/lib/cookies";
import { cookies } from "next/headers";

export default async function CartPage() {
  // TODO: Use cookies() to get cartId cookie

  // TODO: If there's a cartId, fetch the cart details with getCartDetails
  //  - Delete the cartId cookie if no cart is found

  // TODO: Log the cart info

  return (
    <>
    </>
  );
}