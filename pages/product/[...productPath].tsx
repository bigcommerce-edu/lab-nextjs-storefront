import { GetServerSideProps } from 'next';
import Image from 'next/image';
import getGlobalServerSideProps from '@/lib/getGlobalServerSideProps';
import { Product } from '@/lib/bc-client/types/catalog';
import { getProduct } from '@/lib/bc-client/queries/getProduct';
import PageHeading from '@/components/PageHeading';
import AddToCart from '@/components/Product/AddToCart';
import getCurrentCustomer from '@/lib/getCurrentCustomer';

export const getServerSideProps = (async (context) => {
  const globalProps = await getGlobalServerSideProps(context);

  return {
    props: {
      ... globalProps,
      product: {},
      imgSize: 0,
    }
  };
}) satisfies GetServerSideProps;

export default function ProductPage(
  { product, imgSize }: { product: Product, imgSize: number }
) {
  return (
    <>

    </>
  )
}