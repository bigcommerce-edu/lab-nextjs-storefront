import { createCartRedirect, getCartDetails } from "./page-data";
import PageHeading from "@/components/page-heading";
import CartItemRow from "@/components/cart/item-row";
import { getCookieName, isSecure } from "@/lib/cookies";
import { cookies } from "next/headers";

export default async function CartPage() {
  const cookieStore = await cookies();
  const secure = await isSecure();
  const cookieName = getCookieName({ name: "cartId", secure });

  const cartId = cookieStore.get(cookieName)?.value;

  let cart;
  try {
    cart = (cartId) ? await getCartDetails({ cartId }) : null;
  } catch (err) {
    cart = null;
  }

  console.log(cart);

  return (
    <>
      {/* TODO: Render the cart page */}
      {/*  - Render a PageHeading with "Cart" */}
      {/*  - Render a table with a tbody looping over cart.lineItems (use CartItemRow for each row) */}
      {/*  - Render a tfoot with subtotal (cart.baseAmount.value) and grand total (cart.amount.value) */}
      {/*  - Use currencyFormatter to format the amounts */}
    </>
  );
}