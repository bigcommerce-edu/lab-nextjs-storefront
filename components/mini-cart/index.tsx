import Cart from "../icons/cart";
import { getCart } from "./_data/component-data";
import Link from "next/link";
import { getCookieName, isSecure } from "@/lib/cookies";
import { cookies } from "next/headers";

const MiniCart = async () => {
  const cookieStore = await cookies();
  const secure = await isSecure();
  const cookieName = getCookieName({ name: "cartId", secure });

  const cartId = cookieStore.get(cookieName)?.value;

  let cart;
  if (cartId) {
    try {
      cart = await getCart({ cartId });
    } catch (err) {
      cart = null;
      cookieStore.delete(cookieName);
    }
  } else {
    cart = null;
  }

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: cart?.currencyCode ?? 'USD',
  });

  return (
    <div>
      <Link href="/cart"><Cart className="w-6 h-6 inline-block" /></Link>
      {cart && (
        <span>({cart.totalQuantity}) - {currencyFormatter.format(cart.amount.value)}</span>
      )}
    </div>
  );
};

export default MiniCart;