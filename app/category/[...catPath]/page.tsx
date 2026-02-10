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
  // TODO: Add searchParams
}: {
  params: Promise<{ catPath: string[] }>,
  // TODO: The type of `searchParams` is a Promise that returns an object with `before` and `after` (both optional)
}) {
  const { catPath } = await params;
  const path = `/${catPath.join('/')}`;

  const mainImgSize = 500;
  const thumbnailSize = 500;

  // TODO: Extract `before` and `after` from searchParams

  let category;
  try {
    category = await getCategoryWithProducts({
      path,
      mainImgSize,
      thumbnailSize,
      // TODO: Expand the values passed for `page` to include `before` or `after` depending on the presence of those querystring params
      page: { limit: 12 },
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

      {/* TODO: Render the pagination controls */}
      {/*  - Check for the presence of `category.page.before` and `category.page.after` (each will only be populated if there was an appropriate cursor in the GQL response) */}
      {/*  - Render each pagination link as a <Link> with the current category URL path and appropriate `before` or `after` querystring param */}
    </>
  );
}