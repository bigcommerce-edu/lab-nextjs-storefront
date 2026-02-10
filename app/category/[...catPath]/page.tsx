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
      page: { limit: 12 },
    });
  } catch(err) {
    console.log(err);
    category = null;
  }

  console.log(category);

  return (
    <>
      {/* TODO: Render the category page */}
      {/*  - Render a PageHeading with the category name */}
      {/*  - Check for and render defaultImage and description */}
      {/*  - Render a <ul>, loop over products and render a ProductCard for each */}
    </>
  );
}