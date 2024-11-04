import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import getGlobalServerSideProps from '@/lib/getGlobalServerSideProps';
import { PagedCategory, CategoryProduct } from '@/lib/bc-client/types/catalog';
import { getCategoryWithProducts } from '@/lib/bc-client/queries/getCategoryWithProducts';
import PageHeading from '@/components/PageHeading';
import ProductCard from '@/components/ProductCard';
import ArrowLongRight from '@/components/icons/ArrowLongRight';
import ArrowLongLeft from '@/components/icons/ArrowLongLeft';
import getCurrentCustomer from '@/lib/getCurrentCustomer';

export const getServerSideProps = (async (context) => {
  const globalProps = await getGlobalServerSideProps(context);

  return {
    props: {
      ... globalProps,
      category: { products: [] },
      mainImgSize: 0,
      thumbnailSize: 0,
    }
  };
}) satisfies GetServerSideProps;

export default function CategoryPage(
  {category, mainImgSize, thumbnailSize}: {category: PagedCategory, mainImgSize: number, thumbnailSize: number}
) {
  return (
    <>

    </>
  )
}
