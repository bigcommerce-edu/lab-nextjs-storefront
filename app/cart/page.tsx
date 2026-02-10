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

  if (!cart) {
    return (
      <>
        <PageHeading>Cart</PageHeading>
        <div className="w-1/2 text-center">There are no items in the cart.</div>
      </>
    )
  }

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: cart?.currencyCode ?? 'USD',
  });

  const checkoutRedirectUrl = (cartId) ? await createCartRedirect({ cartId }) : '';

  return (
    <>
      <PageHeading>Cart</PageHeading>
      <div className="w-full flex justify-center">
        <table className="w-2/3">
          <tbody>
            {cart.lineItems.map(item => (
              <CartItemRow key={item.entityId} item={item} currencyCode={cart.currencyCode} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th className="px-8 py-4 text-right" colSpan={2}>Subtotal</th>
              <td className="px-8 py-4 text-right">{currencyFormatter.format(cart.baseAmount.value)}</td>
            </tr>
            <tr>
              <th className="px-8 py-4 text-right" colSpan={2}>Grand Total</th>
              <td className="px-8 py-4 text-right">{currencyFormatter.format(cart.amount.value)}</td>
            </tr>
            <tr>
              <td></td>
              <td className="p-8 text-right" colSpan={2}>
                {checkoutRedirectUrl && (
                  <a className="p-2 rounded-md text-lg px-4 font-normal cursor-pointer
                    bg-neutral-700 text-white hover:bg-neutral-500 disabled:bg-neutral-500
                    hover:no-underline"
                    href={checkoutRedirectUrl}>
                    Proceed to Checkout
                  </a>
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}