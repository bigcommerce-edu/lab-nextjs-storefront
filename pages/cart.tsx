import { GetServerSideProps } from 'next';
import getGlobalServerSideProps from '@/lib/getGlobalServerSideProps';
import { getCookie } from "cookies-next";
import { getCartDetails } from '@/lib/bc-client/queries/getCartDetails';
import { CartDetails } from '@/lib/bc-client/types/cart';
import PageHeading from '@/components/PageHeading';
import CartItemRow from '@/components/Cart/ItemRow';
import { createCheckoutRedirectUrl } from '@/lib/bc-client/rest/createCheckoutRedirectUrl';

export const getServerSideProps = (async (context) => {
  const globalProps = await getGlobalServerSideProps(context);

  return {
    props: {
      ... globalProps,
      cart: { totalQuantity: 0, lineItems: [] },
      checkoutRedirectUrl: '',
    }
  };
}) satisfies GetServerSideProps;

export default function CartPage(
  { cart, checkoutRedirectUrl }: { cart: CartDetails | null, checkoutRedirectUrl: string }
) {
  return (
    <>

    </>
  )
}