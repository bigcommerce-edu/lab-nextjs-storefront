import { notFound } from "next/navigation";
import { getCategoryWithProducts } from "./page-data";
import PageHeading from "@/components/page-heading";
import Image from "next/image";
import ProductCard from "@/components/product-card";
import Link from "next/link";
import ArrowLongLeft from "@/components/icons/arrow-long-left";
import ArrowLongRight from "@/components/icons/arrow-long-right";
import { getCurrentCustomer } from "@/lib/getCurrentCustomer";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ catPath: string[] }>,
  searchParams?: Promise<{ before?: string, after?: string }>,
}) {
  const { catPath } = await params;
  const path = `/${catPath.join('/')}`;

  const mainImgSize = 500;
  const thumbnailSize = 500;

  const { before, after } = await searchParams ?? {};

  let category;
  try {
    category = await getCategoryWithProducts({
      path,
      mainImgSize,
      thumbnailSize,
      page: { 
        limit: 12,
        before: before ? String(before) : undefined,
        after: after ? String(after) : undefined,
      },
    });
  } catch(err) {
    console.log(err);
    category = null;
  }

  if (!category) {
    return notFound();
  }

  return (
    <>
      <PageHeading>{category.name}</PageHeading>

      <div className="w-full max-w-screen-2xl flex justify-center">
        <div className="px-8 border-x-2 border-neutral-300 xl:w-2/3">
          {category.defaultImage && (
            <Image src={category.defaultImage.url} 
              alt={category.defaultImage.altText ?? ''}
              width={mainImgSize} height={mainImgSize / 2}
              className="max-w-full inline-block mr-4
                md:w-1/2 md:max-w-3xl md:float-left" />
          )}
          {category.description && (
            <div className="text-lg" dangerouslySetInnerHTML={{__html: category.description}} />
          )}
        </div>
      </div>

      <ul className="w-full max-w-screen-2xl grid grid-cols-1
        md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        {category.products.map(product => (
          <li key={product.sku} className="bg-neutral-200 rounded-md p-4">
            <ProductCard product={product} thumbnailSize={thumbnailSize} />
          </li>
        ))}
      </ul>

      <div className="w-full flex justify-center">
          {category.page.before && (
            <Link
              className="mx-4"
              href={`/category${category.path}?before=${category.page.before}`}
            >
              <ArrowLongLeft />
            </Link>
          )}
          {category.page.after && (
            <Link
              className="mx-4"
              href={`/category${category.path}?after=${category.page.after}`}
            >
              <ArrowLongRight />
            </Link>
          )}
      </div>
    </>
  );
}