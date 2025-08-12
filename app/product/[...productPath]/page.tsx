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
  
  console.log(product);

  return (
    <>

    </>
  );
}