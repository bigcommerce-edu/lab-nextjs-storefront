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

  if (!product) {
    return notFound();
  }

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: product.prices.price.currencyCode,
  });

  return (
    <>
      <PageHeading>{product.name}</PageHeading>
      <div className="w-full max-w-screen-2xl flex flex-wrap justify-center">
        <div className="w-1/2">
          {product.defaultImage && (
            <Image src={product.defaultImage.url} 
              alt={product.defaultImage.altText ?? ''}
              width={imgSize} height={imgSize / 2}
              className="" />
          )}
        </div>
        <div className="w-1/2 p-4">
          <p className="my-2"><label className="font-bold">SKU:</label> {product.sku}</p>
          {product.description && (
            <div dangerouslySetInnerHTML={{__html: product.description}}
              className="my-2" />
          )}
          <div className="text-lg my-4">
            <label className="font-bold">Price:</label>
            <span> {currencyFormatter.format(product.prices.price.value)}</span>
          </div>
          <AddToCart product={product} />
        </div>
      </div>
    </>
  );
}