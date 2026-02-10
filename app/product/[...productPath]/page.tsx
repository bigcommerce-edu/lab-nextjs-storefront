import { notFound } from 'next/navigation';
import { getProduct } from './page-data';
import PageHeading from '@/components/page-heading';
import Image from 'next/image';
import AddToCart from '@/components/product/add-to-cart';
import { getCurrentCustomer } from '@/lib/getCurrentCustomer';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productPath: string[] }>,
}) {
  const { productPath } = await params;
  const path = `/${productPath.join('/')}`;

  const imgSize = 900;

  let product;
  try {
    product = await getProduct({
      path,
      imgSize,
    });
  } catch (err) {
    console.log(err);
    product = null;
  }
  
  // TODO: Replace this with a check for whether the product was found
  //  - If no product was found, return notFound()
  console.log(product);

  // TODO: Create a currencyFormatter w/ Intl.NumberFormat
  //  - Get the currency from product.prices.price.currencyCode

  return (
    <>
      {/* TODO: Render the product page */}
      {/*  - Render a PageHeading with the product name */}
      {/*  - Check for and render defaultImage and description */}
      {/*  - Use currencyFormatter to format the price */}
    </>
  );
}