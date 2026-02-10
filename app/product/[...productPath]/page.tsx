import { notFound } from 'next/navigation';
import { getProduct } from './page-data';
import PageHeading from '@/components/page-heading';
import Image from 'next/image';
import AddToCart from '@/components/product/add-to-cart';
import { getCurrentCustomer } from '@/lib/getCurrentCustomer';

export default async function ProductPage({
  // TODO: Add params
}: {
  // TODO: The type of `params` is a Promise that returns `productPath` (the URL segments)
}) {
  // TODO: Get `productPath` from params and form a full path from all segments

  // TODO: Define static imgSize value

  // TODO: Fetch the product
  //  - Use `getProduct` 
  //  - Pass in path and imgSize

  // TODO: Log the product response

  return (
    <>
      {/* TODO: Render the product page */}
      {/*  - Render a PageHeading with the product name */}
      {/*  - Check for and render defaultImage and description */}
      {/*  - Use currencyFormatter to format the price */}
    </>
  );
}